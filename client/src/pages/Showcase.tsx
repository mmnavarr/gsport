import Button from '@/components/cs16/Button';
import Hr from '@/components/cs16/Hr';
import Checkbox from '@/components/cs16/Checkbox';
import Input from '@/components/cs16/Input';
import Select from '@/components/cs16/Select';
import RadioGroup from '@/components/cs16/RadioGroup';
import Slider from '@/components/cs16/Slider';
import Dialog from '@/components/cs16/Dialog';
import Tooltip from '@/components/cs16/Tooltip';
import ProgressBar from '@/components/cs16/ProgressBar';
import Tabs from '@/components/cs16/Tabs';
import Card from '@/components/cs16/Card';
import Alert from '@/components/cs16/Alert';
import Badge from '@/components/cs16/Badge';
import Navigation from '@/components/cs16/Navigation';
import { useState } from 'react';

interface ComponentDocsProps {
  title: string;
  description: string;
  component: React.ReactNode;
  code: string;
  props?: { name: string; type: string; description: string; required?: boolean }[];
}

function ComponentDocs({ title, description, component, code, props }: ComponentDocsProps) {
  const [showCode, setShowCode] = useState(false);

  return (
    <section className="mb-12 p-6 border border-gray-200 rounded">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Example</h3>
        <div className="p-4 border border-gray-200 rounded bg-white">
          {component}
        </div>
      </div>

      {props && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Props</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 text-left border">Name</th>
                <th className="p-2 text-left border">Type</th>
                <th className="p-2 text-left border">Required</th>
                <th className="p-2 text-left border">Description</th>
              </tr>
            </thead>
            <tbody>
              {props.map((prop) => (
                <tr key={prop.name}>
                  <td className="p-2 border">{prop.name}</td>
                  <td className="p-2 border font-mono text-sm">{prop.type}</td>
                  <td className="p-2 border">{prop.required ? "Yes" : "No"}</td>
                  <td className="p-2 border">{prop.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div>
        <h3 className="text-lg font-semibold mb-4">Code</h3>
        <Button
          onClick={() => setShowCode(!showCode)}
          className="mb-4"
        >
          {showCode ? "Hide Code" : "Show Code"}
        </Button>
        {showCode && (
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{code}</code>
          </pre>
        )}
      </div>
    </section>
  );
}

export default function Showcase() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="container mx-auto p-8">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Counter-Strike 1.6 UI Kit</h1>
        <p className="text-xl text-gray-600">
          A React component library inspired by the iconic Counter-Strike 1.6 user interface.
        </p>
        <Hr className="my-8" />
      </div>

      <ComponentDocs
        title="Button"
        description="A classic CS 1.6 styled button component with hover and active states."
        component={
          <div className="space-x-4">
            <Button>Normal Button</Button>
            <Button disabled>Disabled Button</Button>
          </div>
        }
        code={`<Button>Normal Button</Button>
<Button disabled>Disabled Button</Button>`}
        props={[
          {
            name: "children",
            type: "React.ReactNode",
            description: "The content to be displayed inside the button",
            required: true
          },
          {
            name: "disabled",
            type: "boolean",
            description: "Whether the button is disabled"
          },
          {
            name: "className",
            type: "string",
            description: "Additional CSS classes to apply"
          }
        ]}
      />

      <ComponentDocs
        title="Input"
        description="Text input field with CS 1.6 styling."
        component={
          <Input id="demo-input" label="Username" placeholder="Enter username" />
        }
        code={`<Input id="demo-input" label="Username" placeholder="Enter username" />`}
        props={[
          {
            name: "label",
            type: "string",
            description: "Label text for the input"
          },
          {
            name: "id",
            type: "string",
            description: "HTML id attribute"
          },
          {
            name: "placeholder",
            type: "string",
            description: "Placeholder text"
          }
        ]}
      />

      <ComponentDocs
        title="Select"
        description="Dropdown select menu with CS 1.6 styling."
        component={
          <Select
            id="demo-select"
            label="Choose a car"
            options={[
              { value: "volvo", label: "Volvo" },
              { value: "saab", label: "Saab" },
              { value: "opel", label: "Opel" },
              { value: "audi", label: "Audi" }
            ]}
          />
        }
        code={`<Select
  id="demo-select"
  label="Choose a car"
  options={[
    { value: "volvo", label: "Volvo" },
    { value: "saab", label: "Saab" },
    { value: "opel", label: "Opel" },
    { value: "audi", label: "Audi" }
  ]}
/>`}
        props={[
          {
            name: "options",
            type: "Array<{ value: string, label: string }>",
            description: "Array of options for the select menu",
            required: true
          },
          {
            name: "label",
            type: "string",
            description: "Label text for the select"
          }
        ]}
      />

      <ComponentDocs
        title="Checkbox"
        description="Checkbox component with CS 1.6 styling."
        component={<Checkbox id="demo-checkbox" label="Demo Checkbox" />}
        code={`<Checkbox id="demo-checkbox" label="Demo Checkbox" />`}
        props={[
          { name: "id", type: "string", description: "HTML id attribute", required: true },
          { name: "label", type: "string", description: "Label text for the checkbox", required: true },
        ]}
      />

      <ComponentDocs
        title="RadioGroup"
        description="Radio group component with CS 1.6 styling."
        component={
          <RadioGroup
            legend="What is your favorite wild animal?"
            name="animal"
            options={[
              { value: "elephant", label: "Elephant" },
              { value: "monkey", label: "Monkey" },
              { value: "cheetah", label: "Cheetah" },
              { value: "giraffe", label: "Giraffe" }
            ]}
          />
        }
        code={`<RadioGroup
  legend="What is your favorite wild animal?"
  name="animal"
  options={[
    { value: "elephant", label: "Elephant" },
    { value: "monkey", label: "Monkey" },
    { value: "cheetah", label: "Cheetah" },
    { value: "giraffe", label: "Giraffe" }
  ]}
/>`}
        props={[
          { name: "legend", type: "string", description: "Legend text for the radio group", required: true },
          { name: "name", type: "string", description: "Name attribute for the radio group", required: true },
          { name: "options", type: "Array<{ value: string; label: string; }>", description: "Array of options for the radio group", required: true },
        ]}
      />

      <ComponentDocs
        title="Slider"
        description="Slider component with CS 1.6 styling."
        component={
          <Slider
            id="demo-slider"
            label="Brightness"
            leftLabel="Dark"
            rightLabel="Light"
            min={1}
            max={100}
            defaultValue={50}
          />
        }
        code={`<Slider
  id="demo-slider"
  label="Brightness"
  leftLabel="Dark"
  rightLabel="Light"
  min={1}
  max={100}
  defaultValue={50}
/>`}
        props={[
          { name: "id", type: "string", description: "HTML id attribute", required: true },
          { name: "label", type: "string", description: "Label text for the slider" },
          { name: "leftLabel", type: "string", description: "Label text for the left end of the slider" },
          { name: "rightLabel", type: "string", description: "Label text for the right end of the slider" },
          { name: "min", type: "number", description: "Minimum value for the slider", required: true },
          { name: "max", type: "number", description: "Maximum value for the slider", required: true },
          { name: "defaultValue", type: "number", description: "Default value for the slider" },
        ]}
      />

      <ComponentDocs
        title="Card"
        description="A container component with optional header and footer sections."
        component={
          <Card
            header={<h3>Card Title</h3>}
            footer={<Button>Action</Button>}
          >
            <p>This is the main content of the card.</p>
          </Card>
        }
        code={`<Card
  header={<h3>Card Title</h3>}
  footer={<Button>Action</Button>}
>
  <p>This is the main content of the card.</p>
</Card>`}
        props={[
          { name: "header", type: "React.ReactNode", description: "Content to be displayed in the card header" },
          { name: "footer", type: "React.ReactNode", description: "Content to be displayed in the card footer" },
          { name: "bordered", type: "boolean", description: "Whether to show a border around the card" },
        ]}
      />

      <ComponentDocs
        title="Alert"
        description="Alert messages with different variants for different types of information."
        component={
          <div className="space-y-4">
            <Alert variant="info" title="Information">This is an info message.</Alert>
            <Alert variant="success" title="Success">This is a success message.</Alert>
            <Alert variant="warning" title="Warning">This is a warning message.</Alert>
            <Alert variant="error" title="Error">This is an error message.</Alert>
          </div>
        }
        code={`<Alert variant="info" title="Information">
  This is an info message.
</Alert>

<Alert variant="success" title="Success">
  This is a success message.
</Alert>

<Alert variant="warning" title="Warning">
  This is a warning message.
</Alert>

<Alert variant="error" title="Error">
  This is an error message.
</Alert>`}
        props={[
          { name: "variant", type: "'info' | 'success' | 'warning' | 'error'", description: "The style variant of the alert" },
          { name: "title", type: "string", description: "Title text for the alert" },
        ]}
      />

      <ComponentDocs
        title="Badge"
        description="Small status indicators with different variants."
        component={
          <div className="space-x-2">
            <Badge>Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
          </div>
        }
        code={`<Badge>Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>`}
        props={[
          { name: "variant", type: "'default' | 'primary' | 'success' | 'warning' | 'error'", description: "The style variant of the badge" },
        ]}
      />

      <ComponentDocs
        title="Navigation"
        description="Navigation menu component with horizontal and vertical layouts."
        component={
          <div className="space-y-4">
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
        }
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
        props={[
          { name: "items", type: "Array<{ label: string; href: string; active?: boolean; }>", description: "Array of navigation items", required: true },
          { name: "vertical", type: "boolean", description: "Whether to display the navigation vertically" },
        ]}
      />

      <Hr className="my-8" />

      <ComponentDocs
        title="Dialog"
        description="Dialog component with CS 1.6 styling."
        component={
          <>
            <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
            <Dialog
              title="Options"
              isOpen={dialogOpen}
              onClose={() => setDialogOpen(false)}
              footer={
                <>
                  <Button onClick={() => setDialogOpen(false)}>OK</Button>
                  <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
                  <Button onClick={() => setDialogOpen(false)}>Apply</Button>
                </>
              }
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ad suscipit aut asperiores laudantium error amet
              sapiente et tempora numquam voluptates.
            </Dialog>
          </>
        }
        code={`<Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
<Dialog
  title="Options"
  isOpen={dialogOpen}
  onClose={() => setDialogOpen(false)}
  footer={
    <>
      <Button onClick={() => setDialogOpen(false)}>OK</Button>
      <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
      <Button onClick={() => setDialogOpen(false)}>Apply</Button>
    </>
  }
>
  Lorem ipsum dolor sit amet consectetur adipisicing elit.
  Distinctio ad suscipit aut asperiores laudantium error amet
  sapiente et tempora numquam voluptates.
</Dialog>`}
        props={[
          { name: "title", type: "string", description: "Title of the dialog", required: true },
          { name: "isOpen", type: "boolean", description: "Whether the dialog is open", required: true },
          { name: "onClose", type: "() => void", description: "Function to close the dialog", required: true },
          { name: "footer", type: "React.ReactNode", description: "Content to render in the footer" },
        ]}
      />

      <ComponentDocs
        title="Tooltip"
        description="Tooltip component with CS 1.6 styling."
        component={
          <div className="space-x-4">
            <Tooltip text="Tooltip text" position="right">Right</Tooltip>
            <Tooltip text="Tooltip text" position="left">Left</Tooltip>
            <Tooltip text="Tooltip text" position="top">Top</Tooltip>
            <Tooltip text="Tooltip text" position="bottom">Bottom</Tooltip>
          </div>
        }
        code={`<Tooltip text="Tooltip text" position="right">Right</Tooltip>
<Tooltip text="Tooltip text" position="left">Left</Tooltip>
<Tooltip text="Tooltip text" position="top">Top</Tooltip>
<Tooltip text="Tooltip text" position="bottom">Bottom</Tooltip>`}
        props={[
          { name: "text", type: "string", description: "Text to display in the tooltip", required: true },
          { name: "position", type: "'top' | 'bottom' | 'left' | 'right'", description: "Position of the tooltip", required: true },
        ]}
      />

      <ComponentDocs
        title="ProgressBar"
        description="Progress bar component with CS 1.6 styling."
        component={<ProgressBar progress={50} />}
        code={`<ProgressBar progress={50} />`}
        props={[
          { name: "progress", type: "number", description: "Progress value (0-100)", required: true },
        ]}
      />

      <ComponentDocs
        title="Tabs"
        description="Tabs component with CS 1.6 styling."
        component={
          <Tabs
            defaultTab="tab1"
            tabs={[
              {
                id: "tab1",
                label: "Tab One",
                content: (
                  <div>
                    <h2>Tab One Content</h2>
                    <p>Tab content...</p>
                  </div>
                )
              },
              {
                id: "tab2",
                label: "Tab Two",
                content: (
                  <div>
                    <h2>Tab Two Content</h2>
                    <p>Tab content...</p>
                  </div>
                )
              },
              {
                id: "tab3",
                label: "Tab Three",
                content: (
                  <div>
                    <h2>Tab Three Content</h2>
                    <p>Tab content...</p>
                  </div>
                )
              }
            ]}
          />
        }
        code={`<Tabs
  defaultTab="tab1"
  tabs={[
    {
      id: "tab1",
      label: "Tab One",
      content: <div><h2>Tab One Content</h2><p>Tab content...</p></div>
    },
    {
      id: "tab2",
      label: "Tab Two",
      content: <div><h2>Tab Two Content</h2><p>Tab content...</p></div>
    },
    {
      id: "tab3",
      label: "Tab Three",
      content: <div><h2>Tab Three Content</h2><p>Tab content...</p></div>
    }
  ]}
/>`}
        props={[
          { name: "defaultTab", type: "string", description: "Id of the default active tab", required: true },
          { name: "tabs", type: "Array<{ id: string; label: string; content: React.ReactNode; }>", description: "Array of tabs", required: true },
        ]}
      />

      <Hr className="my-8" />

    </div>
  );
}