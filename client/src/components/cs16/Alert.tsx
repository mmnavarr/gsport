import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, children, variant = 'info', title, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn(
          'cs-alert',
          `cs-alert--${variant}`,
          className
        )}
        {...props}
      >
        {title && <div className="cs-alert__title">{title}</div>}
        <div className="cs-alert__content">{children}</div>
      </div>
    );
  }
);

Alert.displayName = 'CS16Alert';

export default Alert;
