import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Shield, 
  TrendingUp, 
  Target, 
  Sliders, 
  PackageCheck, 
  Layers
} from 'lucide-react';
import Button from '../common/Button';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay }}
      className="bg-white dark:bg-dark-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-100 dark:border-dark-700"
    >
      <div className="mb-4 inline-flex items-center justify-center p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg text-primary-600 dark:text-primary-400">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
};

const FeatureHighlights: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
            Trading Utilities
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Advanced Trading Features
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Discover the powerful utilities that give you an edge in the markets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <FeatureCard
            icon={<Shield className="h-6 w-6" />}
            title="Dynamic Stop Loss"
            description="Automatically adjust stop loss levels based on market volatility, protecting your profits while minimizing premature exits."
            delay={0.1}
          />
          
          <FeatureCard
            icon={<TrendingUp className="h-6 w-6" />}
            title="Trailing Stop Loss"
            description="Choose from multiple trailing ratios like 1-1, 1-0.75, and more to match your risk tolerance and market conditions."
            delay={0.2}
          />
          
          <FeatureCard
            icon={<Target className="h-6 w-6" />}
            title="Auto Target & Reversal"
            description="Set automatic profit targets or reverse your position instantly when market sentiment changes."
            delay={0.3}
          />
          
          <FeatureCard
            icon={<PackageCheck className="h-6 w-6" />}
            title="Quantity Management"
            description="Manage position sizes intelligently and exit with percentage-based quantities (25%, 50%, 75%, etc.)."
            delay={0.4}
          />
          
          <FeatureCard
            icon={<Sliders className="h-6 w-6" />}
            title="Option Strike Adjustments"
            description="Change strikes on-the-fly as market conditions evolve, with runtime price adjustments for better fills."
            delay={0.5}
          />
          
          <FeatureCard
            icon={<Layers className="h-6 w-6" />}
            title="Multi-Strike Display"
            description="View multiple option strikes with ATM/ITM/OTM auto-classification for better market awareness."
            delay={0.6}
          />
        </div>

        <div className="text-center mt-12">
          <Button
            variant="primary"
            size="lg"
            href="/features"
          >
            View All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;