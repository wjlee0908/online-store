import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LoginTabsList, LoginTabsValue } from "../ui/login-tabs-list";
import { Tabs } from "@/shared/ui/tabs";

const meta = {
  component: LoginTabsList,
} satisfies Meta<typeof LoginTabsList>;

export default meta;

export const LoginTabsListStory: StoryObj<typeof meta> = {
  args: {},
  render: (args) => {
    return (
      <Tabs defaultValue={LoginTabsValue.LOGIN}>
        <LoginTabsList {...args} />
      </Tabs>
    );
  },
};
