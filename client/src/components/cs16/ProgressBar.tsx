import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
  progress: number;
}

const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ className, progress, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('cs-progress-bar', className)} {...props}>
        <div className="bars" style={{ width: `${progress}%` }} />
      </div>
    );
  }
);

ProgressBar.displayName = 'CS16ProgressBar';

export default ProgressBar;
