import { Header } from "@/widgets/header";

export const ProductDetailLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};
