import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  bordered?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, children, header, footer, bordered = true, ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn(
          'cs-card',
          bordered && 'cs-card--bordered',
          className
        )}
        {...props}
      >
        {header && <div className="cs-card__header">{header}</div>}
        <div className="cs-card__content">{children}</div>
        {footer && <div className="cs-card__footer">{footer}</div>}
      </div>
    );
  }
);

Card.displayName = 'CS16Card';

export default Card;
