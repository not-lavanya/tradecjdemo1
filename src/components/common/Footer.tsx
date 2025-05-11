import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  BarChart, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin 
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-dark-900 pt-12 pb-8 border-t border-gray-200 dark:border-dark-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center">
                <TrendingUp className="w-8 h-8 text-primary-600" />
                <BarChart className="w-6 h-6 text-accent-500 -ml-3" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                TradeCJ
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Empowering traders with advanced tools to make smarter decisions and maximize profits.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/features" 
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 text-sm"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link 
                  to="/pricing" 
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/resources" 
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 text-sm"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 text-sm"
                >
                  YouTube Tutorials
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 text-sm"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 text-sm"
                >
                  Blog
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 text-sm"
                >
                  Trading Strategies
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 text-sm"
                >
                  Support Center
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-gray-500 dark:text-gray-400 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  support@tradecj.com
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-gray-500 dark:text-gray-400 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  +1 (888) 123-4567
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-500 dark:text-gray-400 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300 text-sm">
                  123 Trading Street, Financial District
                  <br />
                  New York, NY 10004
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-dark-700">
          <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} TradeCJ. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-6">
            <a 
              href="#" 
              className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 text-xs"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 text-xs"
            >
              Terms of Service
            </a>
            <a 
              href="#" 
              className="text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 text-xs"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;