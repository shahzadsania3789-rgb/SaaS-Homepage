import React from 'react';
import { ArrowRight } from 'lucide-react';

// Explicitly define 'dark' in the TypeScript interface to resolve the compiler error
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'dark';
  children: React.ReactNode;
  className?: string;
}

const Button = ({ variant = 'primary', children, className = '' }: ButtonProps) => {
  const baseStyle = "px-6 py-3 text-sm font-medium transition-all duration-300 flex items-center justify-center gap-2 tracking-tight rounded-sm";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800 shadow-sm",
    secondary: "bg-white text-black border border-black hover:bg-gray-50 shadow-sm",
    dark: "bg-black text-white hover:bg-gray-800 shadow-sm"
  };
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};
export default Button;