import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success';
  fullWidth?: boolean;
  pulse?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  pulse = false,
  className = '',
  ...props 
}) => {
  let baseStyles = "font-display font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 disabled:opacity-50 disabled:cursor-not-allowed";
  
  if (fullWidth) baseStyles += " w-full";
  
  let variantStyles = "";
  switch (variant) {
    case 'primary':
      variantStyles = "bg-cta-gradient text-white shadow-[0_10px_30px_rgba(45,108,255,0.3)] hover:shadow-[0_15px_35px_rgba(45,108,255,0.5)]";
      break;
    case 'success':
      variantStyles = "bg-success-gradient text-white shadow-[0_20px_60px_rgba(0,217,163,0.4)] hover:shadow-[0_25px_70px_rgba(0,217,163,0.6)]";
      break;
    case 'secondary':
      variantStyles = "bg-white text-brand-blue border-2 border-brand-blue hover:bg-brand-blue hover:text-white";
      break;
  }

  const pulseAnimation = pulse ? "animate-pulse" : "";

  return (
    <button 
      className={`${baseStyles} ${variantStyles} ${pulseAnimation} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};