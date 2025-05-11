import { FAQ } from '../types';

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'What is TradeCJ?',
    answer: 'TradeCJ is a comprehensive trading utility tool designed for active traders in the options and futures markets. It provides advanced order management features like dynamic stop losses, trailing targets, and sophisticated exit strategies to help traders execute their strategies more efficiently and effectively.',
    category: 'general'
  },
  {
    id: 'faq-2',
    question: 'How does the subscription model work?',
    answer: 'TradeCJ offers four subscription tiers: Free, Basic, Premium, and Pro. Each tier provides access to different features and capabilities. You can pay monthly or annually, with annual subscriptions offering a discount. You can upgrade, downgrade, or cancel your subscription at any time.',
    category: 'pricing'
  },
  {
    id: 'faq-3',
    question: 'Is there a free trial available?',
    answer: 'Yes, we offer a 14-day free trial of our Premium tier so you can experience the full power of TradeCJ before committing to a paid subscription. No credit card is required for the trial.',
    category: 'pricing'
  },
  {
    id: 'faq-4',
    question: 'What markets does TradeCJ support?',
    answer: 'TradeCJ currently supports equity options, index options, and futures trading on major Indian exchanges including NSE and BSE. We are continuously expanding our market coverage.',
    category: 'general'
  },
  {
    id: 'faq-5',
    question: 'How does Dynamic Stop Loss work?',
    answer: 'Dynamic Stop Loss automatically adjusts your stop loss levels based on market volatility and price action. Unlike fixed stop losses that can be triggered by normal market noise, Dynamic SL adapts to changing market conditions, providing better protection while reducing the likelihood of premature exits.',
    category: 'features'
  },
  {
    id: 'faq-6',
    question: 'What is Trail SL and how do the ratios work?',
    answer: 'Trail SL (Trailing Stop Loss) follows the price as it moves in your favor, locking in profits. The ratios (1-1, 1-0.75, etc.) define how the stop loss moves relative to price. For example, with a 1-1 ratio, if the price moves up ₹1, your stop loss also moves up ₹1. With a 1-0.5 ratio, if the price moves up ₹1, your stop loss moves up ₹0.5.',
    category: 'features'
  },
  {
    id: 'faq-7',
    question: 'Can I use TradeCJ with my existing broker?',
    answer: 'TradeCJ is designed to work with major Indian brokers including Zerodha, Upstox, Angel One, and ICICI Direct. We provide seamless integration through APIs where available or through our proprietary bridge technology.',
    category: 'technical'
  },
  {
    id: 'faq-8',
    question: 'What technical requirements are needed to run TradeCJ?',
    answer: 'TradeCJ requires a Windows 10/11 PC with at least 8GB RAM, a stable internet connection (minimum 10 Mbps), and the latest version of Google Chrome or Microsoft Edge browser. For the best experience, we recommend a dual-monitor setup.',
    category: 'technical'
  },
  {
    id: 'faq-9',
    question: 'How secure is my trading information with TradeCJ?',
    answer: 'Security is our top priority. TradeCJ uses bank-grade encryption for all data transmission and storage. We never store your complete broker credentials, and use API tokens or encrypted connection methods. Our systems undergo regular security audits and comply with all relevant data protection regulations.',
    category: 'technical'
  },
  {
    id: 'faq-10',
    question: 'What kind of support is available?',
    answer: 'Support varies by subscription tier. Free users have access to our knowledge base and community forums. Basic subscribers receive email support with 24-hour response time. Premium users get priority email support with 12-hour response time. Pro users enjoy dedicated account managers and phone support during market hours.',
    category: 'general'
  },
  {
    id: 'faq-11',
    question: 'Is TradeCJ suitable for beginners?',
    answer: 'While beginners can benefit from some features of TradeCJ, it is primarily designed for intermediate to advanced traders who already understand trading concepts and strategies. We recommend beginners start with our free tier and educational resources to build their knowledge before advancing to more complex features.',
    category: 'general'
  },
  {
    id: 'faq-12',
    question: 'Can I cancel my subscription at any time?',
    answer: 'Yes, you can cancel your subscription at any time. If you cancel, you\'ll retain access to your current tier until the end of your billing period. We don\'t offer prorated refunds for partial billing periods.',
    category: 'pricing'
  }
];