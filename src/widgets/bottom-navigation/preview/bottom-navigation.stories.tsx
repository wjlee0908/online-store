import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { BottomNavigation } from "../ui/bottom-navigation";

const meta = {
  component: BottomNavigation,
} satisfies Meta<typeof BottomNavigation>;

export default meta;

export const BottomNavigationStory: StoryObj<typeof meta> = {
  args: {},
};
