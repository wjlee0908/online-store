import { cn } from "@/shared/lib";

export const ContentWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("px-4", className)}>{children}</div>;
};
