import clsx from "clsx";

export const ContentWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={clsx("px-4", className)}>{children}</div>;
};
