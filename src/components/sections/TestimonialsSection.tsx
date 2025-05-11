import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star } from 'lucide-react';
import { testimonials } from '../../data/testimonialsData';

const TestimonialsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-dark-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-sm font-semibold tracking-wider text-primary-600 dark:text-primary-400 uppercase">
            Testimonials
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            What Traders Say About Us
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Discover how TradeCJ has helped traders transform their results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => {
            const [ref, inView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <motion.div
                key={testimonial.id}
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="bg-gray-50 dark:bg-dark-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 dark:border-dark-700"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating
                          ? 'text-accent-500 fill-accent-500'
                          : 'text-gray-300 dark:text-gray-600'
                      }`}
                    />
                  ))}
                </div>
                
                <blockquote className="italic text-gray-700 dark:text-gray-300 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;