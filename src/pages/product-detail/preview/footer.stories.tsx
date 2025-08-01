import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Footer } from "../ui/footer";

const meta = {
  component: Footer,
} satisfies Meta<typeof Footer>;

export default meta;

export const FooterStory: StoryObj<typeof meta> = {
  args: {},
};
