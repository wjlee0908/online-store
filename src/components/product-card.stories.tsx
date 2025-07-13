import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProductCard } from "./product-card";

const meta = {
  component: ProductCard,
} satisfies Meta<typeof ProductCard>;

export default meta;

export const ProductCardStory: StoryObj<typeof meta> = {
  args: {
    imageSrc: "https://dummyimage.com/200x200.png",
    name: "알루미늄 하드 캐리어 60L",
    price: 990_000,
    productId: 1,
  },
};
