import { type InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <>
        <input
          ref={ref}
          className={cn('cs-input', className)}
          id={id}
          {...props}
        />
        {label && (
          <label className="cs-input__label" htmlFor={id}>
            {label}
          </label>
        )}
      </>
    );
  }
);

Input.displayName = 'CS16Input';

export default Input;
