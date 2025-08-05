import { BottomNavigation } from "@/widgets/bottom-navigation";
import { Header } from "@widgets/header";

export const LoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header title="로그인" />
      <main>{children}</main>
      <BottomNavigation />
    </div>
  );
};
