import { Feature } from '../types';

export const features: Feature[] = [
  {
    id: 'feature-1',
    title: 'Dynamic Stop Loss',
    description: 'Automatically adjust stop loss levels based on market movement to protect your profits while giving trades room to breathe.',
    icon: 'shield',
    category: 'stop-loss'
  },
  {
    id: 'feature-2',
    title: 'Predefined Stop Loss',
    description: 'Set exact stop loss values before entering trades to maintain strict risk management discipline.',
    icon: 'bookmark',
    category: 'stop-loss'
  },
  {
    id: 'feature-3',
    title: 'Strike-Based Stop Loss',
    description: 'Configure stop loss based on option strike prices with OTM, ATM, or ITM settings for precise risk control.',
    icon: 'target',
    category: 'stop-loss'
  },
  {
    id: 'feature-4',
    title: 'Trail Stop Loss',
    description: 'Follow market movements with customizable trailing ratios including 1-1, 1-0.75, 1-0.5, 1-0.25, 1-1.25, and 1-1.5.',
    icon: 'move-up-right',
    category: 'stop-loss'
  },
  {
    id: 'feature-5',
    title: 'Capital Stop Loss',
    description: 'Protect your trading capital with stop losses based on overall account value rather than individual positions.',
    icon: 'piggy-bank',
    category: 'stop-loss',
    isAdvanced: true
  },
  {
    id: 'feature-6',
    title: 'Trailing Capital Stop Loss',
    description: 'Dynamically adjust capital-based stop losses to secure profits as your account value increases.',
    icon: 'trending-up',
    category: 'stop-loss',
    isAdvanced: true
  },
  {
    id: 'feature-7',
    title: 'Auto Target',
    description: 'Set profit targets that automatically close positions when reached, securing gains without constant monitoring.',
    icon: 'check-circle',
    category: 'entry-exit'
  },
  {
    id: 'feature-8',
    title: 'Trailing Auto Target',
    description: 'Automatically adjust profit targets higher as the market moves in your favor to maximize potential returns.',
    icon: 'move-up',
    category: 'entry-exit',
    isAdvanced: true
  },
  {
    id: 'feature-9',
    title: 'Buying Trailing Buy',
    description: 'Enter positions gradually with trailing buy orders that adjust to market movements for better average prices.',
    icon: 'shopping-cart',
    category: 'entry-exit'
  },
  {
    id: 'feature-10',
    title: 'Conditional Buy/Sell',
    description: 'Execute trades automatically when specific index or strike price conditions are met for precise market timing.',
    icon: 'git-branch',
    category: 'entry-exit',
    isAdvanced: true
  },
  {
    id: 'feature-11',
    title: 'Reverse Function',
    description: 'Quickly reverse your position from long to short or vice versa with a single click when market sentiment changes.',
    icon: 'refresh-cw',
    category: 'entry-exit'
  },
  {
    id: 'feature-12',
    title: 'Auto Reverse',
    description: 'Automatically reverse positions based on predefined market conditions without manual intervention.',
    icon: 'repeat',
    category: 'entry-exit',
    isAdvanced: true
  },
  {
    id: 'feature-13',
    title: 'Quantity Management',
    description: 'Easily manage position sizes with intelligent lot sizing based on account value and risk parameters.',
    icon: 'list',
    category: 'management'
  },
  {
    id: 'feature-14',
    title: 'Partial Auto Target',
    description: 'Take partial profits at different price levels while leaving remainder of position to capture extended moves.',
    icon: 'divide-circle',
    category: 'management',
    isAdvanced: true
  },
  {
    id: 'feature-15',
    title: 'Exit on LE/ME/TLE',
    description: 'Automatically exit positions based on market events like Last/Mid/Trailing Last Exit signals.',
    icon: 'log-out',
    category: 'management',
    isAdvanced: true
  },
  {
    id: 'feature-16',
    title: 'Percentage-Based Exit',
    description: 'Close 25%, 33%, 50% or any custom percentage of your position with a single click for strategic scaling.',
    icon: 'percent',
    category: 'management'
  },
  {
    id: 'feature-17',
    title: 'Full Quantity Exit',
    description: 'Instantly close entire positions with one click during fast market movements or when targets are reached.',
    icon: 'x-circle',
    category: 'management'
  },
  {
    id: 'feature-18',
    title: 'Exit Remaining Quantity',
    description: 'Close any leftover contracts after partial exits with a dedicated button for complete position management.',
    icon: 'trash-2',
    category: 'management'
  },
  {
    id: 'feature-19',
    title: 'Break Even Exit',
    description: 'Automatically exit positions at your entry price to avoid losses when market reverses after being profitable.',
    icon: 'activity',
    category: 'management'
  },
  {
    id: 'feature-20',
    title: 'Strike Change',
    description: 'Quickly shift positions between different option strikes to adjust delta exposure as market conditions change.',
    icon: 'shuffle',
    category: 'option-trading',
    isAdvanced: true
  },
  {
    id: 'feature-21',
    title: 'Long Straddle',
    description: 'Create long straddle option strategies with a single click for volatility plays around major market events.',
    icon: 'arrow-up-down',
    category: 'option-trading',
    isAdvanced: true
  },
  {
    id: 'feature-22',
    title: 'Option Hedge Sell',
    description: 'Automatically create and manage hedge positions to protect your option trades from adverse market movements.',
    icon: 'shield-alert',
    category: 'option-trading',
    isAdvanced: true
  },
  {
    id: 'feature-23',
    title: 'Runtime Price Adjustment',
    description: 'Adjust order prices in real-time as market conditions change to improve fill rates and execution quality.',
    icon: 'edit-2',
    category: 'option-trading',
    isAdvanced: true
  },
  {
    id: 'feature-24',
    title: 'Option Strike Display',
    description: 'View comprehensive strike information with clear visual indicators for making informed option trading decisions.',
    icon: 'eye',
    category: 'option-trading'
  },
  {
    id: 'feature-25',
    title: 'Runtime Strike Change',
    description: 'Increase or decrease option strikes during active trades to optimize delta exposure as market trends develop.',
    icon: 'sliders',
    category: 'option-trading',
    isAdvanced: true
  },
  {
    id: 'feature-26',
    title: 'Bulk Quantity Trading',
    description: 'Execute large orders with a single click, with built-in slicing algorithms to minimize market impact.',
    icon: 'package',
    category: 'management',
    isAdvanced: true
  },
  {
    id: 'feature-27',
    title: 'Multi-Strike Display',
    description: 'View multiple option strikes simultaneously with automatic ATM/ITM/OTM classification for comprehensive market analysis.',
    icon: 'layers',
    category: 'option-trading',
    isAdvanced: true
  }
];