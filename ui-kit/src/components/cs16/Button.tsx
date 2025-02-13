import { type ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export type ButtonSize = 'small' | 'default' | 'large';
export type ButtonVariant = 'primary' | 'secondary' | 'danger';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  prefixIcon?: React.ReactNode;
  suffixIcon?: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    children, 
    prefixIcon, 
    suffixIcon,
    size = 'default',
    variant = 'primary',
    ...props 
  }, ref) => {
    return (
      <button 
        ref={ref}
        className={cn(
          'cs-btn inline-flex items-center justify-center gap-2',
          {
            'text-sm px-3 py-1': size === 'small',
            'px-4 py-2': size === 'default',
            'text-lg px-6 py-3': size === 'large',
            'cs-btn--primary': variant === 'primary',
            'cs-btn--secondary': variant === 'secondary',
            'cs-btn--danger': variant === 'danger',
          },
          className
        )}
        {...props}
      >
        {prefixIcon && <span className="inline-flex items-center">{prefixIcon}</span>}
        {children}
        {suffixIcon && <span className="inline-flex items-center">{suffixIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'CS16Button';

export default Button;
