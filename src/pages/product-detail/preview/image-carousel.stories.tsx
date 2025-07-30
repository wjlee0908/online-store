import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ImageCarousel } from "../ui/image-carousel";

const meta = {
  component: ImageCarousel,
} satisfies Meta<typeof ImageCarousel>;

export default meta;

export const ImageCarouselStory: StoryObj<typeof meta> = {
  args: {
    images: Array.from({ length: 5 }).map((_, index) => ({
      src: "https://dummyimage.com/960x960.png",
      alt: `Image ${index}`,
    })),
  },
};
