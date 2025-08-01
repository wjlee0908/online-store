import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { DetailSection } from "../ui/detail-section";

const meta = {
  component: DetailSection,
} satisfies Meta<typeof DetailSection>;

export default meta;

export const DetailSectionStory: StoryObj<typeof meta> = {
  args: {},
};
