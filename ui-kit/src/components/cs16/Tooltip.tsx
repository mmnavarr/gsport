import { type HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface TooltipProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  position?: 'top' | 'right' | 'bottom' | 'left';
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  ({ className, children, text, position = 'right', ...props }, ref) => {
    const getPositionStyle = () => {
      switch (position) {
        case 'right':
          return { left: '125%' };
        case 'left':
          return { right: '125%' };
        case 'top':
          return {
            bottom: '100%',
            width: '100px',
            left: '50%',
            marginLeft: '-50px',
          };
        case 'bottom':
          return {
            top: '100%',
            width: '100px',
            left: '50%',
            marginLeft: '-50px',
          };
      }
    };

    return (
      <div ref={ref} className={cn('cs-tooltip', className)} {...props}>
        {children}
        <span className="text" style={getPositionStyle()}>
          {text}
        </span>
      </div>
    );
  }
);

Tooltip.displayName = 'CS16Tooltip';

export default Tooltip;
