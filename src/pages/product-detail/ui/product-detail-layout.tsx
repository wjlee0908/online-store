import { Header } from "@/widgets/header";

export const ProductDetailLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <Header />
      <main className="pb-17">{children}</main>
    </div>
  );
};
