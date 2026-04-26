import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  href?: string;
  external?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  href,
  external,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 text-base font-medium transition-colors duration-200';
  
  const variants = {
    primary: 'bg-brand-gold text-brand-charcoal hover:bg-brand-goldHover',
    secondary: 'border border-brand-olive text-brand-oliveDark hover:bg-brand-olive hover:text-white',
    ghost: 'text-brand-oliveDark hover:bg-brand-cream',
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
