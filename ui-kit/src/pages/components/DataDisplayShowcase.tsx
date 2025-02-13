import React from 'react';
import { StoryLayout } from '@/components/layout/StoryLayout';
import { ComponentExample } from '@/components/layout/ComponentExample';
import Card from '@/components/cs16/Card';
import Alert from '@/components/cs16/Alert';
import Badge from '@/components/cs16/Badge';
import Navigation from '@/components/cs16/Navigation';
import Tabs from '@/components/cs16/Tabs';
import ProgressBar from '@/components/cs16/ProgressBar';

export default function DataDisplayShowcase() {
  return (
    <StoryLayout>
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">CS1.6 Data Display</h1>
          <p className="text-xl text-muted-foreground">
            Components for displaying various types of data and content.
          </p>
        </div>

        <div className="grid gap-8">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Card</h2>
            <div className="grid gap-6">
              <ComponentExample
                title="Basic Card"
                description="Container for related content."
                code={`<Card
  header={<h3>Card Title</h3>}
  footer={<Button>Action</Button>}
>
  <p>This is the main content of the card.</p>
</Card>`}
              >
                <Card
                  header={<h3>Card Title</h3>}
                  footer={<button type="button">Action</button>}
                >
                  <p>This is the main content of the card.</p>
                </Card>
              </ComponentExample>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Alert</h2>
            <div className="grid gap-6">
              <ComponentExample
                title="Alert Variants"
                description="Different types of alert messages."
                code={`<Alert variant="info" title="Information">This is an info message.</Alert>
<Alert variant="success" title="Success">This is a success message.</Alert>
<Alert variant="warning" title="Warning">This is a warning message.</Alert>
<Alert variant="error" title="Error">This is an error message.</Alert>`}
              >
                <div className="space-y-4">
                  <Alert variant="info" title="Information">This is an info message.</Alert>
                  <Alert variant="success" title="Success">This is a success message.</Alert>
                  <Alert variant="warning" title="Warning">This is a warning message.</Alert>
                  <Alert variant="error" title="Error">This is an error message.</Alert>
                </div>
              </ComponentExample>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Badge</h2>
            <div className="grid gap-6">
              <ComponentExample
                title="Badge Variants"
                description="Different styles of badges."
                code={`<Badge>Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>`}
              >
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="error">Error</Badge>
                </div>
              </ComponentExample>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Navigation</h2>
            <div className="grid gap-6">
              <ComponentExample
                title="Navigation Menu"
                description="Horizontal and vertical navigation menus."
                code={`<Navigation
  items={[
    { label: 'Home', href: '#', active: true },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
  ]}
/>

<Navigation
  vertical
  items={[
    { label: 'Home', href: '#', active: true },
    { label: 'About', href: '#' },
    { label: 'Contact', href: '#' },
  ]}
/>`}
              >
                <div className="space-y-4 w-full">
                  <Navigation
                    items={[
                      { label: 'Home', href: '#', active: true },
                      { label: 'About', href: '#' },
                      { label: 'Contact', href: '#' },
                    ]}
                  />
                  <Navigation
                    vertical
                    items={[
                      { label: 'Home', href: '#', active: true },
                      { label: 'About', href: '#' },
                      { label: 'Contact', href: '#' },
                    ]}
                  />
                </div>
              </ComponentExample>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Tabs</h2>
            <div className="grid gap-6">
              <ComponentExample
                title="Basic Tabs"
                description="Tabbed interface for organizing content."
                code={`<Tabs
  defaultTab="tab1"
  tabs={[
    {
      id: "tab1",
      label: "Tab One",
      content: <div>Tab One Content</div>
    },
    {
      id: "tab2",
      label: "Tab Two",
      content: <div>Tab Two Content</div>
    }
  ]}
/>`}
              >
                <Tabs
                  defaultTab="tab1"
                  tabs={[
                    {
                      id: "tab1",
                      label: "Tab One",
                      content: <div>Tab One Content</div>
                    },
                    {
                      id: "tab2",
                      label: "Tab Two",
                      content: <div>Tab Two Content</div>
                    }
                  ]}
                />
              </ComponentExample>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Progress Bar</h2>
            <div className="grid gap-6">
              <ComponentExample
                title="Progress Bar"
                description="Visual indicator of progress."
                code="<ProgressBar progress={75} />"
              >
                <ProgressBar progress={75} />
              </ComponentExample>
            </div>
          </section>
        </div>
      </div>
    </StoryLayout>
  );
} 