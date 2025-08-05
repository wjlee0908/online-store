import { cn } from "@shared/lib/class-name";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

/**
 * An interactive component which expands/collapses a panel.
 */
export const Collapsible = ({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) => {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />;
};

export const CollapsibleContent = ({
  className,
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Content>) => {
  return (
    <CollapsiblePrimitive.Content
      data-slot="collapsible-content"
      className={cn(
        "overflow-hidden",
        "data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up",
        className
      )}
      {...props}
    />
  );
};

export const CollapsibleTrigger = CollapsiblePrimitive.Trigger;
