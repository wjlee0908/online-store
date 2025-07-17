import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { CategoryHeader } from "../ui/category-header";

const meta = {
  component: CategoryHeader,
} satisfies Meta<typeof CategoryHeader>;

export default meta;

export const CategoryHeaderStory: StoryObj<typeof meta> = {
  args: {
    title: "생활",
  },
};
