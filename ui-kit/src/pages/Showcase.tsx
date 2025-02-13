import React from 'react';
import { Link } from 'wouter';
import { StoryLayout } from '@/components/layout/StoryLayout';

export default function Showcase() {
  return (
    <StoryLayout>
      <div className="max-w-5xl mx-auto">
        <div className="mb-2">
          <h1 className="text-4xl font-bold mb-4">CS1.6 UI Kit</h1>
          <p className="text-xl text-muted-foreground">
            A collection of reusable components for building beautiful applications with Counter-Strike 1.6 style!
          </p>
        </div>

         <div className="mt-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Getting Started</h2>
          <div className="prose prose-gray dark:prose-invert">
            <p>
              The CS1.6 UI Kit provides a comprehensive set of components to help you build consistent and beautiful user interfaces.
              Each component is designed with accessibility, customization, and ease of use in mind.
            </p>
            <p className="mt-2">
              To get started, click on any of the component categories above to explore the available components,
              their variants, and usage examples. Each component comes with detailed documentation and code snippets
              that you can copy and paste into your project.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Link href="/components/buttons">
            <div className="p-6 rounded-lg border bg-card hover:border-primary cursor-pointer transition-colors">
              <h2 className="text-2xl font-semibold mb-2">Buttons</h2>
              <p className="text-muted-foreground">
                Interactive elements for triggering actions, including various styles, sizes, and states.
              </p>
            </div>
          </Link>

          <Link href="/components/inputs">
            <div className="p-6 rounded-lg border bg-card hover:border-primary cursor-pointer transition-colors">
              <h2 className="text-2xl font-semibold mb-2">Inputs</h2>
              <p className="text-muted-foreground">
                Form controls for user input, including text fields, select menus, checkboxes, and more.
              </p>
            </div>
          </Link>

          <Link href="/components/data-display">
            <div className="p-6 rounded-lg border bg-card hover:border-primary cursor-pointer transition-colors">
              <h2 className="text-2xl font-semibold mb-2">Data Display</h2>
              <p className="text-muted-foreground">
                Components for presenting information, including cards, alerts, badges, and navigation.
              </p>
            </div>
          </Link>

          <Link href="/components/overlays">
            <div className="p-6 rounded-lg border bg-card hover:border-primary cursor-pointer transition-colors">
              <h2 className="text-2xl font-semibold mb-2">Overlays</h2>
              <p className="text-muted-foreground">
                Components that overlay the main content, such as dialogs and tooltips. More to come soon!
              </p>
            </div>
          </Link>
        </div>
      </div>
    </StoryLayout>
  );
}