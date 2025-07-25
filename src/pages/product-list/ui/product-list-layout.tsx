import { BottomNavigation } from "@widgets/bottom-navigation";
import { CategoryHeader } from "@widgets/header";

export const ProductListLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      {children}
      <BottomNavigation />
    </div>
  );
};
