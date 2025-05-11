import React from 'react';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'accent' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  href?: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  href,
  children,
  className = '',
  external = false,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-colors duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-dark-800 focus:ring-primary-500',
    accent: 'bg-accent-500 text-white hover:bg-accent-600 focus:ring-accent-400',
    ghost: 'text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-dark-800 focus:ring-primary-500',
  };
  
  const sizeClasses = {
    sm: 'px-2.5 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base',
    xl: 'px-6 py-3 text-lg',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${className}`;
  
  if (href) {
    if (external) {
      return (
        <a 
          href={href}
          className={classes}
          target="_blank"
          rel="noopener noreferrer"
          {...props as any}
        >
          {children}
        </a>
      );
    }
    
    return (
      <Link 
        to={href}
        className={classes}
        {...props as any}
      >
        {children}
      </Link>
    );
  }
  
  return (
    <button 
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;