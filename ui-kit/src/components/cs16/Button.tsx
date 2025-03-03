import { type ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

export type ButtonSize = "small" | "default" | "large";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	prefixIcon?: React.ReactNode;
	suffixIcon?: React.ReactNode;
	size?: ButtonSize;
	active?: boolean;
	loading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			children,
			prefixIcon,
			suffixIcon,
			size = "default",
			active = false,
			loading = false,
			disabled,
			...props
		},
		ref,
	) => {
		return (
			<button
				ref={ref}
				className={cn(
					"cs-btn inline-flex items-center justify-center gap-2 transition-all",
					{
						"text-sm px-3 py-1": size === "small",
						"px-4 py-2": size === "default",
						"text-lg px-6 py-3": size === "large",
						"active-btn": active,
						"cursor-not-allowed": loading,
					},
					className,
				)}
				disabled={disabled || loading}
				{...props}
			>
				{loading ? (
					<Loader2 className="h-4 w-4 animate-spin" />
				) : (
					<>
						{prefixIcon && (
							<span className="inline-flex items-center">{prefixIcon}</span>
						)}
						{children}
						{suffixIcon && (
							<span className="inline-flex items-center">{suffixIcon}</span>
						)}
					</>
				)}
			</button>
		);
	},
);

Button.displayName = "CS16Button";

export default Button;
