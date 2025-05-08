import React from 'react'
import {Link} from 'react-router-dom'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  to,
  href,
  type = 'button',
  onClick,
  disabled = false,
  fullWidth = false,
  ariaLabel,
  icon,
  iconPosition = 'left',
}) => {
  const baseStyles = 'inline-flex justify-center items-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md'

  const variantStyles ={
    primary: 'bg-blue-400 text-white hover:bg-blue-500 focus:ring-blue-500 disabled:bg-blue-300',
    secondary: 'bg-gray-300 text-white hover:bg-gray-400 focus:ring-gray-500 disabled:bg-gray-200',
    accent: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 disabled:bg-red-300',
    outline: 'border border-blue-400 text-blue-400 hover:bg-blue-300/20 dark:hover:bg-blue-400/30 focus:ring-blue-500 disabled:opacity-50',
    ghost: 'text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-700 focus:ring-blue-500 disabled:opacity-50',
  };

  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };

  const iconSpacing = {
    left: icon ? 'space-x-2' : '',
    right: icon ? 'space-x-2 flex-row-reverse' : '',
  };

  const buttonStyles = `
    ${baseStyles} 
    ${variantStyles[variant]} 
    ${sizeStyles[size]} 
    ${iconSpacing[iconPosition]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;
  if (to) {
    return (
      <Link to={to} className={buttonStyles} aria-label={ariaLabel}>
        {icon && iconPosition === 'left' && <span>{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span>{icon}</span>}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={buttonStyles}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
      >
        {icon && iconPosition === 'left' && <span>{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === 'right' && <span>{icon}</span>}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={buttonStyles}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </button>
  );
};

export default Button;