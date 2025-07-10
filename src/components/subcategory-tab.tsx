export interface SubcategoryTabProps {
  subcategories: string[];
}

export function SubcategoryTab({ subcategories }: SubcategoryTabProps) {
  return (
    <div className="flex gap-2 border-b border-gray-200">
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
