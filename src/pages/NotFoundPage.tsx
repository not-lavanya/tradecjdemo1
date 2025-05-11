import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import Button from '../components/common/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-16">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-500">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mt-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            href="/"
            className="flex items-center"
          >
            <Home className="mr-2 h-5 w-5" />
            Back to Home
          </Button>
          
          <Button
            variant="outline"
            onClick={() => window.history.back()}
            className="flex items-center"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;