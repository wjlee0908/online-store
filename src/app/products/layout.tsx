import { CategoryHeader } from "@/components/category-header";

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <CategoryHeader title="의복" />
      {children}
    </div>
  );
}
