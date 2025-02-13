import type { HTMLAttributes } from 'react';
import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  progress: number;
}

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ className, progress, ...props }, ref) => {
    // Ensure progress is between 0 and 100
    const clampedProgress = Math.min(Math.max(progress, 0), 100);
    
    return (
      <div ref={ref} className={cn('cs-progress-bar', className)} {...props}>
        <div 
          className="bars" 
          style={{ 
            width: `${clampedProgress}%`,
          }} 
        />
      </div>
    );
  }
);

ProgressBar.displayName = 'CS16ProgressBar';

export default ProgressBar;
