import { Header } from "@/widgets/header";
import { Footer } from "./footer";

export const ProductDetailLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div>
      <Header />
      <main className="pb-17">{children}</main>
      <Footer />
    </div>
  );
};
