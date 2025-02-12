import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';

export interface NavigationItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface NavigationProps extends HTMLAttributes<HTMLElement> {
  items: NavigationItem[];
  vertical?: boolean;
}

const Navigation = forwardRef<HTMLElement, NavigationProps>(
  ({ className, items, vertical = false, ...props }, ref) => {
    return (
      <nav 
        ref={ref}
        className={cn(
          'cs-nav',
          vertical && 'cs-nav--vertical',
          className
        )}
        {...props}
      >
        {items.map((item, index) => (
          <Button
            key={index}
            className={cn(
              'cs-nav__item',
              item.active && 'cs-nav__item--active'
            )}
            onClick={() => window.location.href = item.href}
          >
            {item.label}
          </Button>
        ))}
      </nav>
    );
  }
);

Navigation.displayName = 'CS16Navigation';

export default Navigation;
