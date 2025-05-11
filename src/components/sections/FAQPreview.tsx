import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown } from 'lucide-react';
import Button from '../common/Button';
import { faqs } from '../../data/faqData';

const FAQPreview: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Only show first 4 FAQs in the preview
  const previewFaqs = faqs.slice(0, 4);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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
            FAQ
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Get answers to common questions about TradeCJ
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {previewFaqs.map((faq, index) => {
            const [itemRef, itemInView] = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.id}
                ref={itemRef}
                initial={{ opacity: 0, y: 20 }}
                animate={itemInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="mb-4 border-b border-gray-200 dark:border-dark-700 pb-4"
              >
                <button
                  className="w-full flex justify-between items-center text-left focus:outline-none"
                  onClick={() => handleToggle(index)}
                >
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                  </motion.div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{ 
                    height: isOpen ? 'auto' : 0,
                    opacity: isOpen ? 1 : 0,
                    marginTop: isOpen ? 12 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            href="/faq"
          >
            View All FAQs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQPreview;