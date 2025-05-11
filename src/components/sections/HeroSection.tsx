import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Layers, Shield, TrendingUp } from 'lucide-react';
import Button from '../common/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-primary-950 via-dark-900 to-primary-900 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 -left-10 w-72 h-72 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-0 -right-10 w-72 h-72 bg-accent-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-secondary-400 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Trade Smarter, <br />
              <span className="text-accent-400">Execute Faster</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              TradeCJ gives you the power of professional trading tools with advanced stop-loss, entry-exit strategies, and option trading utilities that maximize your edge in the markets.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Button 
                variant="accent" 
                size="lg"
                href="/pricing"
              >
                View Pricing
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                href="/features"
                className="border-white/30 text-white hover:bg-white/10 sm:ml-4"
              >
                Explore Features
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative bg-dark-800/80 backdrop-blur-sm border border-dark-700/50 rounded-xl overflow-hidden shadow-2xl transform perspective-1000 rotateY-3 rotateX-3">
              <div className="p-6 border-b border-dark-700/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-5 w-5 text-primary-500" />
                    <span className="font-semibold">TradeCJ Pro</span>
                  </div>
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 rounded-full bg-error-500"></div>
                    <div className="h-3 w-3 rounded-full bg-warning-500"></div>
                    <div className="h-3 w-3 rounded-full bg-success-500"></div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-medium text-sm text-gray-400">NIFTY</h3>
                    <div className="text-lg font-semibold">22,458.75</div>
                    <div className="text-sm text-success-500">+120.50 (0.54%)</div>
                  </div>
                  <div className="bg-dark-700/50 rounded-lg p-3">
                    <BarChart className="h-6 w-6 text-primary-500" />
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-dark-700/50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-success-500" />
                        <span className="text-sm font-medium">Dynamic Stop Loss</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">22,320.50</span>
                        <div className="h-4 w-4 rounded-full bg-success-500/20 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-success-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-dark-700/50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-accent-500" />
                        <span className="text-sm font-medium">Trail SL (1-0.75)</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">Active</span>
                        <div className="h-4 w-4 rounded-full bg-accent-500/20 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-accent-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-dark-700/50 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Layers className="h-4 w-4 text-secondary-500" />
                        <span className="text-sm font-medium">Multi-Strike Display</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-medium">Enabled</span>
                        <div className="h-4 w-4 rounded-full bg-secondary-500/20 flex items-center justify-center">
                          <div className="h-2 w-2 rounded-full bg-secondary-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  <button className="bg-success-600 hover:bg-success-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                    BUY
                  </button>
                  <button className="bg-error-600 hover:bg-error-700 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                    SELL
                  </button>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-500/10 rounded-full filter blur-xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary-500/10 rounded-full filter blur-xl"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;