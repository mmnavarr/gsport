import React, { useState } from 'react';
import { StoryLayout } from '@/components/layout/StoryLayout';
import { ComponentExample } from '@/components/layout/ComponentExample';
import Dialog from '@/components/cs16/Dialog';
import Tooltip from '@/components/cs16/Tooltip';
import Button from '@/components/cs16/Button';

export default function OverlaysShowcase() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <StoryLayout>
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">CS1.6 Overlays</h1>
          <p className="text-xl text-muted-foreground">
            Components that overlay the main content to display additional information or actions.
          </p>
        </div>

        <div className="grid gap-8">
          <section>
            <h2 className="text-2xl font-semibold mb-6">Dialog</h2>
            <div className="grid gap-6">
              <ComponentExample
                title="Basic Dialog"
                description="A dialog that overlays the main content."
                code="<Dialog
  isOpen={isDialogOpen}
  onClose={() => setIsDialogOpen(false)}
  title='Example Dialog'
>
  <p>This is the dialog content.</p>
  <div className='mt-4 flex justify-end'>
    <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
  </div>
</Dialog>

<Button onClick={() => setIsDialogOpen(true)}>Open Dialog</Button>"
              >
                <div>
                  <Dialog
                    isOpen={isDialogOpen}
                    onClose={() => setIsDialogOpen(false)}
                    title="Example Dialog"
                  >
                    <p>This is the dialog content.</p>
                    <div className="mt-4 flex justify-end">
                      <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
                    </div>
                  </Dialog>

                  <Button onClick={() => setIsDialogOpen(true)}>Open Dialog</Button>
                </div>
              </ComponentExample>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">Tooltip</h2>
            <div className="grid gap-6">
              <ComponentExample
                title="Basic Tooltip"
                description="A tooltip that appears on hover."
                code="<Tooltip text='This is a tooltip'>
  <Button>Hover me</Button>
</Tooltip>"
              >
                <Tooltip text="This is a tooltip">
                  <Button>Hover me</Button>
                </Tooltip>
              </ComponentExample>

              <ComponentExample
                title="Tooltip Positions"
                description="Tooltips can be positioned in different directions."
                code="<div className='flex gap-4'>
  <Tooltip text='Top tooltip' position='top'>
    <Button>Top</Button>
  </Tooltip>
  <Tooltip text='Right tooltip' position='right'>
    <Button>Right</Button>
  </Tooltip>
  <Tooltip text='Bottom tooltip' position='bottom'>
    <Button>Bottom</Button>
  </Tooltip>
  <Tooltip text='Left tooltip' position='left'>
    <Button>Left</Button>
  </Tooltip>
</div>"
              >
                <div className="flex gap-4">
                  <Tooltip text="Top tooltip" position="top">
                    <Button>Top</Button>
                  </Tooltip>
                  <Tooltip text="Right tooltip" position="right">
                    <Button>Right</Button>
                  </Tooltip>
                  <Tooltip text="Bottom tooltip" position="bottom">
                    <Button>Bottom</Button>
                  </Tooltip>
                  <Tooltip text="Left tooltip" position="left">
                    <Button>Left</Button>
                  </Tooltip>
                </div>
              </ComponentExample>
            </div>
          </section>
        </div>
      </div>
    </StoryLayout>
  );
} 