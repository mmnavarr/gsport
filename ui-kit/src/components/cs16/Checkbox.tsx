import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className="cs-checkbox">
        <input
          ref={ref}
          type="checkbox"
          id={id}
          className={cn(className)}
          {...props}
        />
        {label && (
          <label className="cs-checkbox__label" htmlFor={id}>
            {label}
          </label>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'CS16Checkbox';

export default Checkbox;
