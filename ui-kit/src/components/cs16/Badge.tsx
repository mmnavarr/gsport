import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, children, variant = 'default', ...props }, ref) => {
    return (
      <span 
        ref={ref}
        className={cn(
          'cs-badge',
          `cs-badge--${variant}`,
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'CS16Badge';

export default Badge;
