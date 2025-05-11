export type SubscriptionTier = 'free' | 'basic' | 'premium' | 'pro';

export interface Subscription {
  id: string;
  name: string;
  description: string;
  price: number;
  billingPeriod: 'monthly' | 'yearly';
  tier: SubscriptionTier;
  features: string[];
  isPopular?: boolean;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'stop-loss' | 'entry-exit' | 'management' | 'option-trading';
  isAdvanced?: boolean;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'pricing' | 'features' | 'technical';
}

export interface Testimonial {
  id: string;
  name: string;
  title: string;
  image: string;
  quote: string;
  rating: number;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  link: string;
  type: 'video' | 'article' | 'guide' | 'webinar';
  thumbnail?: string;
}