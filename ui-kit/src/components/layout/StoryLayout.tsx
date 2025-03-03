import type React from 'react';
import { Link, useLocation } from 'wouter';

interface StoryLayoutProps {
  children: React.ReactNode;
}

export function StoryLayout({ children }: StoryLayoutProps) {
  const [location] = useLocation();

  const isActive = (path: string) => {
    return location === path 
      ? "text-primary font-semibold border-b-2 border-primary transition-all" 
      : "text-muted-foreground hover:text-foreground transition-all";
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4" style={{ marginTop: 8, marginBottom: 8 }}>
          <nav className="flex items-center justify-between">
            <Link href="/">
              <span className={`text-2xl font-bold cursor-pointer ${location === "/" ? "text-primary" : "text-foreground hover:text-primary/90"}`}>UI Kit</span>
            </Link>
            <div className="flex gap-4">
              <Link href="/components/buttons">
                <span className={`cursor-pointer py-1 ${isActive("/components/buttons")}`}>Buttons</span>
              </Link>
              <Link href="/components/inputs">
                <span className={`cursor-pointer py-1 ${isActive("/components/inputs")}`}>Inputs</span>
              </Link>
              <Link href="/components/data-display">
                <span className={`cursor-pointer py-1 ${isActive("/components/data-display")}`}>Data Display</span>
              </Link>
              <Link href="/components/overlays">
                <span className={`cursor-pointer py-1 ${isActive("/components/overlays")}`}>Overlays</span>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8" style={{ marginTop: 20, marginBottom: 40 }}>
        {children}
      </main>
      <footer className="py-8">
        <div className="container mx-auto px-4 py-4 text-center text-sm text-muted-foreground">
          <span className="font-mono">
            /* hacked together with 🍕 and ☕️ by{' '}
            <a 
              href="https://twitter.com/mxlcolm" 
              target="_blank"
              rel="noopener noreferrer" 
              className="text-primary hover:text-primary/80 hover:underline"
            >
              @mxlcolm
            </a>{' '}
            */
          </span>
        </div>
      </footer>
    </div>
  );
} 