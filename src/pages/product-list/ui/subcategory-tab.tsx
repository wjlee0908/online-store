import clsx from "clsx";

export interface SubcategoryTabProps {
  subcategories: string[];
  className?: string;
}

export function SubcategoryTab({
  subcategories,
  className,
}: SubcategoryTabProps) {
  return (
    <div className={clsx("flex gap-2 border-b border-gray-200", className)}>
      {subcategories.map((subcategory) => (
        <button
          key={subcategory}
          className="p-3 text-sm text-gray-400 cursor-pointer"
        >
          {subcategory}
        </button>
      ))}
    </div>
  );
}
