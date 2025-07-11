import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProductCard } from "./product-card";

const meta = {
  component: ProductCard,
} satisfies Meta<typeof ProductCard>;

export default meta;

export const ProductCardStory: StoryObj<typeof meta> = {};
