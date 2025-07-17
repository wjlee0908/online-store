import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SortDropdown } from "../ui/sort-dropdown";

const meta = {
  component: SortDropdown,
} satisfies Meta<typeof SortDropdown>;

export default meta;

export const SortDropdownStory: StoryObj<typeof meta> = {
  args: {},
};
