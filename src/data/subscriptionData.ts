import { Subscription } from '../types';

export const subscriptions: Subscription[] = [
  {
    id: 'free',
    name: 'Free',
    description: 'For beginners who want to try basic trading utilities',
    price: 0,
    billingPeriod: 'monthly',
    tier: 'free',
    features: [
      'Basic Stop Loss (Predefined)',
      'Simple Buy/Sell functionality',
      'Single strike display',
      'Basic quantity management',
      'Full exit functionality',
      'Limited to 2 simultaneous trades',
      'Community support',
    ],
  },
  {
    id: 'basic',
    name: 'Basic',
    description: 'Popular choice for active individual traders',
    price: 49,
    billingPeriod: 'monthly',
    tier: 'basic',
    isPopular: true,
    features: [
      'All Free features',
      'Dynamic Stop Loss',
      'Strike-based Stop Loss (OTM/ATM/ITM)',
      'Trail SL (1-1, 1-0.75)',
      'Auto Target functionality',
      'Bulk quantity management',
      'Exit with percentages (25%, 50%, 75%)',
      'Break-even exit functionality',
      'Up to 5 simultaneous trades',
      'Email support',
    ],
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'For serious traders who want advanced features',
    price: 99,
    billingPeriod: 'monthly',
    tier: 'premium',
    features: [
      'All Basic features',
      'All Trail SL ratios',
      'Capital SL & Trailing Capital SL',
      'Trailing Auto Target',
      'Conditional Buy/Sell based on index',
      'Auto Reverse functionality',
      'Partial Auto Target',
      'Advanced exit strategies (LE, ME, TLE)',
      'Strike change functionality',
      'Up to 10 simultaneous trades',
      'Priority email support',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Complete trading suite for professionals',
    price: 199,
    billingPeriod: 'monthly',
    tier: 'pro',
    features: [
      'All Premium features',
      'Long Straddle functionality',
      'Option Hedge Sell',
      'Runtime price increase/decrease',
      'Multi-strike display with ATM/ITM/OTM auto set',
      'Runtime strike change increase/decrease',
      'One-click bulk quantity buying/selling',
      'Advanced trailing algorithms',
      'Unlimited simultaneous trades',
      'Dedicated account manager',
      'Phone & email support',
      'Advanced customization options',
    ],
  },
];