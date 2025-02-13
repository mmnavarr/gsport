import type React from 'react';
import { useState } from 'react';

interface ComponentExampleProps {
  title: string;
  description: string;
  children: React.ReactNode;
  code: string;
  className?: string;
}

export function ComponentExample({
  title,
  description,
  children,
  code,
  className = '',
}: ComponentExampleProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <div className={`border rounded-lg overflow-hidden bg-card ${className}`}>
      <div className="border-b p-4 bg-card">
        <h3 className="text-lg font-semibold mb-2 text-card-foreground">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
      
      <div className="p-6 bg-background/50">
        <div className="flex items-center justify-center min-h-[100px] rounded-md border bg-background p-4">
          {children}
        </div>
      </div>

      <div className="border-t">
        <button
          type="button"
          onClick={() => setShowCode(!showCode)}
          className="p-3 w-full text-sm text-left hover:bg-accent hover:text-accent-foreground flex items-center justify-between"
        >
          <span>View code</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transform transition-transform ${showCode ? 'rotate-180' : ''}`}
            aria-hidden="true"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
        {showCode && (
          <div className="border-t bg-muted p-4">
            <pre className="text-sm text-muted-foreground">
              <code>{code}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
} 