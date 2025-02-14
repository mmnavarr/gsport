import { type InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface RadioOption {
  value: string;
  label: string;
}

export interface RadioGroupProps extends InputHTMLAttributes<HTMLInputElement> {
  legend?: string;
  options: RadioOption[];
  name: string;
}

const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  ({ className, legend, options, name, ...props }, ref) => {
    return (
      <fieldset ref={ref} className={cn('cs-fieldset', className)}>
        {legend && <legend>{legend}</legend>}
        {options.map((option) => (
          <div key={option.value} className="radio-wrapper">
            <input
              type="radio"
              name={name}
              id={option.value}
              value={option.value}
              {...props}
            />
            <label htmlFor={option.value}>{option.label}</label>
          </div>
        ))}
      </fieldset>
    );
  }
);

RadioGroup.displayName = 'CS16RadioGroup';

export default RadioGroup;
