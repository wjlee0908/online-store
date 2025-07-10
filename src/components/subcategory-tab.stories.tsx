import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SubcategoryTab } from "./subcategory-tab";

const meta = {
  component: SubcategoryTab,
} satisfies Meta<typeof SubcategoryTab>;

export default meta;

export const SubcategoryTabStory: StoryObj<typeof meta> = {
  args: {
    subcategories: ["남성", "여성", "아동", "패션잡화"],
  },
};
