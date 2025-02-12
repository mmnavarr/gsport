import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface SliderProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  leftLabel?: string;
  rightLabel?: string;
}

const Slider = forwardRef<HTMLInputElement, SliderProps>(
  ({ className, label, leftLabel, rightLabel, id, ...props }, ref) => {
    return (
      <div className="cs-slider">
        {(leftLabel || rightLabel) && (
          <div className="value">
            {leftLabel && <p>{leftLabel}</p>}
            {rightLabel && <p>{rightLabel}</p>}
          </div>
        )}
        <div className="ruler" />
        <input
          ref={ref}
          id={id}
          type="range"
          className={cn(className)}
          {...props}
        />
        {label && <label htmlFor={id}>{label}</label>}
      </div>
    );
  }
);

Slider.displayName = 'CS16Slider';

export default Slider;
