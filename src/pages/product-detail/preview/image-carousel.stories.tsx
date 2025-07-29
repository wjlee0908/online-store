import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ImageCarousel } from "../ui/image-carousel";

const meta = {
  component: ImageCarousel,
} satisfies Meta<typeof ImageCarousel>;

export default meta;

export const ImageCarouselStory: StoryObj<typeof meta> = {};
