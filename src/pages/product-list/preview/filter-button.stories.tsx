import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FilterButton } from "../ui/filter-button";

const meta = {
  component: FilterButton,
} satisfies Meta<typeof FilterButton>;

export default meta;

export const CategoryHeaderStory: StoryObj<typeof meta> = {};
