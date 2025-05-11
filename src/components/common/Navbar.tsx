import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown, BarChart, TrendingUp } from 'lucide-react';
import Button from './Button';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Features', path: '/features' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Resources', path: '/resources' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <header
      className={`sticky top-0 z-30 transition-all duration-300 ${
        scrolled
          ? 'bg-white/80 dark:bg-dark-900/80 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="flex items-center">
              <TrendingUp className="w-8 h-8 text-primary-600" />
              <BarChart className="w-6 h-6 text-accent-500 -ml-3" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              TradeCJ
            </span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'text-primary-600 dark:text-primary-400'
                    : 'text-gray-700 hover:text-primary-600 dark:text-gray-200 dark:hover:text-primary-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              variant="primary"
              className="ml-4"
              href="/pricing"
            >
              Get Started
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-700 dark:text-gray-200 hover:text-primary-600 dark:hover:text-primary-400"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        id="mobile-menu"
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-4 pt-2 pb-4 space-y-1 bg-white dark:bg-dark-900 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                location.pathname === link.path
                  ? 'text-primary-600 bg-primary-50 dark:bg-primary-900/20 dark:text-primary-400'
                  : 'text-gray-700 hover:bg-gray-50 hover:text-primary-600 dark:text-gray-200 dark:hover:bg-dark-800 dark:hover:text-primary-400'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-2">
            <Button
              variant="primary"
              fullWidth
              href="/pricing"
            >
              Get Started
            </Button>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;