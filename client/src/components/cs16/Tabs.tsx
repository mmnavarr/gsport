import { HTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface TabsProps extends HTMLAttributes<HTMLDivElement> {
  tabs: TabItem[];
  defaultTab?: string;
}

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ className, tabs, defaultTab, ...props }, ref) => {
    return (
      <div ref={ref} className={cn('cs-tabs', className)} {...props}>
        {tabs.map((tab) => (
          <div key={tab.id}>
            <input
              className="radiotab"
              name="tabs"
              type="radio"
              id={tab.id}
              defaultChecked={tab.id === defaultTab}
            />
            <label className="label" htmlFor={tab.id}>
              {tab.label}
            </label>
            <div className="panel">
              {tab.content}
            </div>
          </div>
        ))}
      </div>
    );
  }
);

Tabs.displayName = 'CS16Tabs';

export default Tabs;
