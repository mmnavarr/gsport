import React from 'react';
import { StoryLayout } from '@/components/layout/StoryLayout';
import { ComponentExample } from '@/components/layout/ComponentExample';
import Input from '@/components/cs16/Input';
import Select from '@/components/cs16/Select';
import Checkbox from '@/components/cs16/Checkbox';
import RadioGroup from '@/components/cs16/RadioGroup';
import Slider from '@/components/cs16/Slider';

export default function InputsShowcase() {
  return (
    <StoryLayout>
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">CS1.6 Input Components</h1>
          <p className="text-xl text-muted-foreground">
            Form input components with Counter-Strike 1.6 styling.
          </p>
        </div>

        <div className="grid gap-8">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Text Input</h2>
            <div className="grid gap-6">
              <ComponentExample
                title="Basic Input"
                description="Standard text input with label."
                code={`<Input id="username" label="Username" placeholder="Enter username" />`}
              >
                <Input id="username" label="Username" placeholder="Enter username" />
              </ComponentExample>

              <ComponentExample
                title="Disabled Input"
                description="Input in disabled state."
                code={`<Input id="disabled" label="Disabled" disabled value="Can't edit this" />`}
              >
                <Input id="disabled" label="Disabled" disabled value="Can't edit this" />
              </ComponentExample>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Select</h2>
            <div className="grid gap-6">
              <ComponentExample
                title="Basic Select"
                description="Dropdown select menu with options."
                code={`<Select
  id="weapon"
  label="Choose weapon"
  options={[
    { value: "ak47", label: "AK-47" },
    { value: "m4a1", label: "M4A1" },
    { value: "awp", label: "AWP" },
  ]}
/>`}
              >
                <Select
                  id="weapon"
                  label="Choose weapon"
                  options={[
                    { value: "ak47", label: "AK-47" },
                    { value: "m4a1", label: "M4A1" },
                    { value: "awp", label: "AWP" },
                  ]}
                />
              </ComponentExample>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Checkbox</h2>
            <div className="grid gap-6">
              <ComponentExample
                title="Basic Checkbox"
                description="Checkbox with label."
                code={`<Checkbox id="terms" label="I agree to the terms" />`}
              >
                <Checkbox id="terms" label="I agree to the terms" />
              </ComponentExample>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Radio Group</h2>
            <div className="grid gap-6">
              <ComponentExample
                title="Radio Group"
                description="Group of radio buttons."
                code={`<RadioGroup
  legend="Team"
  name="team"
  options={[
    { value: "ct", label: "Counter-Terrorist" },
    { value: "t", label: "Terrorist" },
  ]}
/>`}
              >
                <RadioGroup
                  legend="Team"
                  name="team"
                  options={[
                    { value: "ct", label: "Counter-Terrorist" },
                    { value: "t", label: "Terrorist" },
                  ]}
                />
              </ComponentExample>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Slider</h2>
            <div className="grid gap-6">
              <ComponentExample
                title="Basic Slider"
                description="Range slider with labels."
                code={`<Slider
  id="volume"
  label="Volume"
  min={0}
  max={100}
  defaultValue={50}
  leftLabel="0%"
  rightLabel="100%"
/>`}
              >
                <Slider
                  id="volume"
                  label="Volume"
                  min={0}
                  max={100}
                  defaultValue={50}
                  leftLabel="0%"
                  rightLabel="100%"
                />
              </ComponentExample>
            </div>
          </section>
        </div>
      </div>
    </StoryLayout>
  );
} 