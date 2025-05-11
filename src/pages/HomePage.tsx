import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import HeroSection from '../components/sections/HeroSection';
import FeatureHighlights from '../components/sections/FeatureHighlights';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import PricingPreview from '../components/sections/PricingPreview';
import FAQPreview from '../components/sections/FAQPreview';
import CTASection from '../components/sections/CTASection';

const HomePage: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <HeroSection />
      
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <FeatureHighlights />
      </motion.div>
      
      <TestimonialsSection />
      <PricingPreview />
      <FAQPreview />
      <CTASection />
    </>
  );
};

export default HomePage;