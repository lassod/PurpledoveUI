import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva("flex w-auto items-center mx-auto justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
	variants: {
		variant: {
			default: "bg-[#A700AF] text-primary-foreground border border-[#A700AF] hover:bg-white hover:text-black hover:border-gray-200",
			secondary: "bg-white text-[#A700AF] border border-white hover:bg-transparent hover:text-white",
			outline: "bg-white text-black border border-gray-200 shadow-sm hover:bg-[#A700AF] hover:border-[#A700AF] hover:text-white",
			destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
			ghost: "bg-transparent text-[#A700AF] font-medium hover:bg-[#A700AF] hover:text-white",
			link: "text-primary underline-offset-4 hover:underline",
		},
		size: {
			default: "h-10 px-9 py-4 rounded-full",
			sm: "h-9 rounded-md px-3",
			lg: "h-11 rounded-md px-8",
			icon: "h-10 w-10",
		},
	},
	defaultVariants: {
		variant: "default",
		size: "default",
	},
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : "button";
	return <Comp className={cn("bg-[#0017A0]", buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
});
Button.displayName = "Button";

export { Button, buttonVariants };
