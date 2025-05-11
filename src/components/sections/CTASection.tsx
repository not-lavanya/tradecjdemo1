import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const CTASection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 md:py-24 bg-primary-900 dark:bg-primary-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Trading?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Join thousands of traders who have improved their results with TradeCJ's powerful utilities.
          </p>
          
          <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:space-x-4">
            <Button
              variant="accent"
              size="xl"
              href="/pricing"
              className="group"
            >
              <span>Get Started Today</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button
              variant="outline"
              size="xl"
              href="/contact"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;