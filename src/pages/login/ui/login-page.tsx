import { Input } from "@shared/ui/input";

export const LoginPage = () => {
  return (
    <div className="px-4 py-10">
      <Input name="id" />
      <Input type="password" name="password" />
    </div>
  );
};
