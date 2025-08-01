import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Navigation } from "../ui/navigation";

const meta = {
  component: Navigation,
} satisfies Meta<typeof Navigation>;

export default meta;

export const NavigationStory: StoryObj<typeof meta> = {
  args: {},
};
