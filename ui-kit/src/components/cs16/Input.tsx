import { type InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  errorMessage?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, id, error, errorMessage, ...props }, ref) => {
    return (
      <div className="cs-input-wrapper">
        <input
          ref={ref}
          className={cn(
            'cs-input',
            error && 'cs-input--error',
            className
          )}
          id={id}
          {...props}
        />
        {label && (
          <label 
            className={cn(
              'cs-input__label',
              error && 'cs-input__label--error',
              props.value && 'cs-input__label--active'
            )} 
            htmlFor={id}
          >
            {label}
          </label>
        )}
        {error && errorMessage && (
          <span className="cs-input__error-message">{errorMessage}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'CS16Input';

export default Input;
