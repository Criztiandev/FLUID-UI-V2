import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, FC } from "react";

const buttonVariants = cva(
  "cursor-pointer select-none text-sm text-black font-medium inline-flex justify-center items-center rounded-base whitespace-nowrap focus:ring-2 focus:ring-orange-500/50 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary hover:bg-primary/90 text-secondary",
        outlined: "border border-gray-300 hover:bg-primary/20",
        ghost: "text-black hover:bg-primary/20",
        link: "underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        icon: "size-10", // Assuming you want a square button for icons
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button: FC<ButtonProps> = ({ children, variant, size, ...props }) => {
  return (
    <button {...props} className={cn(buttonVariants({ variant, size }))}>
      {children}
    </button>
  );
};

export default Button;
