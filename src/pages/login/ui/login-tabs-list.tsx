import { Tabs, TabsList, TabsTrigger } from "@shared/ui/tabs";

export enum LoginTabsValue {
  /** 회원 로그인 */
  LOGIN = "login",

  /** 비회원 주문조회 */
  GUEST = "guest",
}

export const LoginTabsList = () => {
  return (
    <TabsList className="w-full">
      <TabsTrigger value={LoginTabsValue.LOGIN}>회원 로그인</TabsTrigger>
      <TabsTrigger value={LoginTabsValue.GUEST}>비회원 주문 조회</TabsTrigger>
    </TabsList>
  );
};
