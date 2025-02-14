import { type DialogHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import Button from './Button';

export interface DialogProps extends DialogHTMLAttributes<HTMLDialogElement> {
  title?: string;
  isOpen?: boolean;
  onClose?: () => void;
  footer?: React.ReactNode;
}

const Dialog = forwardRef<HTMLDialogElement, DialogProps>(
  ({ className, title, children, isOpen, onClose, footer, ...props }, ref) => {
    return (
      <dialog
        ref={ref}
        className={cn('cs-dialog', className)}
        open={isOpen}
        {...props}
      >
        <form method="dialog">
          <div className="heading">
            <div className="wrapper">
              <div className="icon" />
              {title && <p className="text">{title}</p>}
            </div>
            <Button className="close" onClick={onClose} />
          </div>
          <div className="content">{children}</div>
          {footer && <menu className="footer-btns">{footer}</menu>}
        </form>
      </dialog>
    );
  }
);

Dialog.displayName = 'CS16Dialog';

export default Dialog;
