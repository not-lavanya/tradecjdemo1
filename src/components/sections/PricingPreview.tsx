import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle } from 'lucide-react';
import Button from '../common/Button';
import { subscriptions } from '../../data/subscriptionData';

const PricingPreview: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Only show the first 3 subscription tiers in the preview
  const previewSubscriptions = subscriptions.slice(0, 3);

  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-dark-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-wider text-primary-600 dark:text-primary-400 uppercase">
            Pricing
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Choose the Right Plan for You
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            From free tools to comprehensive professional suites, we have options for every trader
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {previewSubscriptions.map((subscription, index) => {
            const [cardRef, cardInView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <motion.div
                key={subscription.id}
                ref={cardRef}
                initial={{ opacity: 0, y: 20 }}
                animate={cardInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`relative rounded-xl overflow-hidden ${
                  subscription.isPopular
                    ? 'border-2 border-primary-500 dark:border-primary-400 shadow-lg transform scale-105 z-10'
                    : 'border border-gray-200 dark:border-dark-700 shadow-md'
                }`}
              >
                {subscription.isPopular && (
                  <div className="absolute top-0 right-0 bg-primary-500 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    Popular
                  </div>
                )}
                
                <div className={`p-8 bg-white dark:bg-dark-800 h-full flex flex-col ${
                  subscription.isPopular ? 'pt-12' : ''
                }`}>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {subscription.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {subscription.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="flex items-end">
                      {subscription.price === 0 ? (
                        <span className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                          Free
                        </span>
                      ) : (
                        <>
                          <span className="text-xl font-medium text-gray-900 dark:text-white">₹</span>
                          <span className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                            {subscription.price}
                          </span>
                          <span className="text-gray-600 dark:text-gray-400 ml-2">/ month</span>
                        </>
                      )}
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8 flex-grow">
                    {subscription.features.slice(0, 5).map((feature) => (
                      <div key={feature} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-success-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 dark:text-gray-300 text-sm">
                          {feature}
                        </span>
                      </div>
                    ))}
                    
                    {subscription.features.length > 5 && (
                      <div className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-gray-400 dark:text-gray-500 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-500 dark:text-gray-400 text-sm italic">
                          +{subscription.features.length - 5} more features
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <Button
                    variant={subscription.isPopular ? 'primary' : 'outline'}
                    size="lg"
                    fullWidth
                    href="/pricing"
                  >
                    {subscription.price === 0 ? 'Get Started' : 'Subscribe Now'}
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            href="/pricing"
          >
            View All Plans
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingPreview;