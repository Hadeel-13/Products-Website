import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ReactNode, forwardRef } from "react";
const layoutVariants = cva("", {
  variants: {
    variant: {
      page: "container flex flex-col gap-7 sm:gap-9 py-7 sm:py-9", // page
      section: "flex flex-col gap-6 sm:gap-9 ",
      article: "flex flex-col gap-7",
      products:
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 place-content-center sm:place-content-start place-items-center sm:place-items-stretch",
    },
  },
  defaultVariants: {
    variant: "page",
  },
});
export interface DivProps
  extends React.HTMLProps<HTMLDivElement>,
    VariantProps<typeof layoutVariants> {
  asChild?: boolean;
  className?: string;
  children?: ReactNode;
}
const Layout = forwardRef<HTMLDivElement, DivProps>(
  ({ className, variant, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        className={cn(layoutVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    );
  },
);
Layout.displayName = "Layout";

export { Layout };
