import React from 'react';
import { StoryLayout } from '@/components/layout/StoryLayout';
import { ComponentExample } from '@/components/layout/ComponentExample';
import Button from '@/components/cs16/Button';
import { ArrowRight, ArrowLeft, Plus, Trash2, Download, Send } from 'lucide-react';

export default function ButtonsShowcase() {
  return (
    <StoryLayout>
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">CS1.6 Buttons</h1>
          <p className="text-xl text-muted-foreground">
            Classic Counter-Strike 1.6 styled button components.
          </p>
        </div>

        <div className="grid gap-8">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Basic Buttons</h2>
            <div className="grid gap-6">
              <ComponentExample
                title="Default Button"
                description="The standard CS16 button with hover and active states."
                code={`<Button>Click Me</Button>
<Button disabled>Disabled</Button>`}
              >
                <div className="flex flex-wrap gap-4">
                  <Button>Click Me</Button>
                  <Button disabled>Disabled</Button>
                </div>
              </ComponentExample>

              <ComponentExample
                title="Buttons with Icons"
                description="Buttons with prefix and suffix icons for enhanced visual communication."
                code={`<Button prefixIcon={<Plus size={16} />}>Add Item</Button>
<Button suffixIcon={<ArrowRight size={16} />}>Next</Button>
<Button prefixIcon={<ArrowLeft size={16} />} suffixIcon={<ArrowRight size={16} />}>Navigate</Button>
<Button prefixIcon={<Download size={16} />}>Download</Button>
<Button suffixIcon={<Send size={16} />}>Send</Button>
<Button prefixIcon={<Trash2 size={16} />}>Delete</Button>`}
              >
                <div className="flex flex-wrap gap-4">
                  <Button prefixIcon={<Plus size={16} />}>Add Item</Button>
                  <Button suffixIcon={<ArrowRight size={16} />}>Next</Button>
                  <Button prefixIcon={<ArrowLeft size={16} />} suffixIcon={<ArrowRight size={16} />}>Navigate</Button>
                  <Button prefixIcon={<Download size={16} />}>Download</Button>
                  <Button suffixIcon={<Send size={16} />}>Send</Button>
                  <Button prefixIcon={<Trash2 size={16} />}>Delete</Button>
                </div>
              </ComponentExample>

              <ComponentExample
                title="Button Sizes"
                description="Different button sizes for various use cases."
                code={`<Button size="small">Small</Button>
<Button>Default</Button>
<Button size="large">Large</Button>`}
              >
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="small">Small</Button>
                  <Button>Default</Button>
                  <Button size="large">Large</Button>
                </div>
              </ComponentExample>

              <ComponentExample
                title="Button Variants"
                description="Different button styles for different purposes."
                code={`<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="danger">Danger</Button>`}
              >
                <div className="flex flex-wrap gap-4">
                  <Button variant="primary">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="danger">Danger</Button>
                </div>
              </ComponentExample>
            </div>
          </section>
        </div>
      </div>
    </StoryLayout>
  );
} 