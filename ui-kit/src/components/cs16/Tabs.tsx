import type { HTMLAttributes } from 'react';
import { forwardRef, useState } from 'react';
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
    const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

    return (
      <div ref={ref} className={cn('cs-tabs', className)} {...props}>
        <div className="cs-tabs-list">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={cn('cs-tab-trigger', activeTab === tab.id && 'active')}
              onClick={() => setActiveTab(tab.id)}
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="cs-tab-content">
          {tabs.find(tab => tab.id === activeTab)?.content}
        </div>
      </div>
    );
  }
);

Tabs.displayName = 'CS16Tabs';

export default Tabs;
