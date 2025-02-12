import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface HrProps extends HTMLAttributes<HTMLHRElement> {}

const Hr = forwardRef<HTMLHRElement, HrProps>(
  ({ className, ...props }, ref) => {
    return (
      <hr 
        ref={ref}
        className={cn('cs-hr', className)}
        {...props}
      />
    );
  }
);

Hr.displayName = 'CS16Hr';

export default Hr;
