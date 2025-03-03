import { cn } from "@/lib/utils";
import { ReactNode } from "react";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "border-input file:text-foreground placeholder:text-muted-foreground focus:placeholder:opacity-0 selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      )}
      {...props}
    />
  );
}

function InputWithEndAdornment({
  className,
  type,
  endAdornment,
  ...props
}: React.ComponentProps<"input"> & { endAdornment?: ReactNode }) {
  return (
    <div className={"relative"}>
      <input
        type={type}
        data-slot="input"
        className={cn(
          "peer pe-9", // ps-9
          "file:text-foreground placeholder:text-muted-foreground focus:placeholder:opacity-0 selection:bg-primary selection:text-primary-foreground flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive focus-visible:ring-[3px]",
          className
        )}
        {...props}
      />
      {/* <span className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-sm text-muted-foreground peer-disabled:opacity-50">
        €
      </span> */}
      {endAdornment && (
        <span className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
          {endAdornment}
        </span>
      )}
    </div>
  );
}
export { Input, InputWithEndAdornment };
