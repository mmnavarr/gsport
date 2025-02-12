import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <button 
        ref={ref}
        className={cn('cs-btn', className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'CS16Button';

export default Button;
