import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HeaderView } from "../ui/header-view";

const meta = {
  component: HeaderView,
} satisfies Meta<typeof HeaderView>;

export default meta;

export const HeaderViewStory: StoryObj<typeof meta> = {
  args: {
    title: "생활",
  },
};
