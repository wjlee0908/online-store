import { Label } from "@shared/ui/label";
import { Input } from "@shared/ui/input";
import { Button } from "@shared/ui/button";
import { Tabs, TabsContent } from "@shared/ui/tabs";
import { LoginTabsList, LoginTabsValue } from "./login-tabs-list";

const LoginLabel = (props: React.ComponentProps<typeof Label>) => {
  return <Label {...props} className="text-sm font-semibold" />;
};

const Field = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export const LoginPage = () => {
  return (
    <div className="px-4 py-10">
      <Tabs defaultValue={LoginTabsValue.LOGIN}>
        <LoginTabsList />
        <TabsContent
          className="pt-6 flex flex-col gap-5"
          value={LoginTabsValue.LOGIN}
        >
          <Field>
            <LoginLabel htmlFor="username">아이디</LoginLabel>
            <Input name="username" />
          </Field>
          <Field>
            <LoginLabel htmlFor="password">비밀번호</LoginLabel>
            <Input name="password" type="password" />
          </Field>
          <Button>로그인</Button>
        </TabsContent>
        <TabsContent className="pt-6" value={LoginTabsValue.GUEST}>
          <LoginLabel htmlFor="order-number">주문 번호</LoginLabel>
          <Input name="order-number" />
          <Button>조회</Button>
        </TabsContent>
      </Tabs>
    </div>
  );
};
