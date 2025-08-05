import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ProductOrderDrawer } from "../ui/product-order-drawer";
import { Drawer } from "@/shared/ui/drawer";

const meta = {
  component: ProductOrderDrawer,
} satisfies Meta<typeof ProductOrderDrawer>;

export default meta;

export const PurchaseOptionDrawerStory: StoryObj<typeof meta> = {
  args: {},
  render: () => {
    return (
      <Drawer open>
        <ProductOrderDrawer />
      </Drawer>
    );
  },
};
