import { BottomNavigation } from "@widgets/bottom-navigation";
import { CategoryHeader } from "./category-header";

export const ProductListLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <CategoryHeader title="의복" />
      {children}
      <BottomNavigation />
    </div>
  );
};
