import { Label } from "@shared/ui/label";
import { Input } from "@shared/ui/input";
import { Button } from "@shared/ui/button";

export const LoginPage = () => {
  return (
    <div className="px-4 py-10">
      <Label htmlFor="username">아이디</Label>
      <Input name="username" />
      <Label htmlFor="password">비밀번호</Label>
      <Input name="password" type="password" />
      <Button>로그인</Button>
    </div>
  );
};
