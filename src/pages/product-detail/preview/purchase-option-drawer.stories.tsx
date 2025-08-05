import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { OrderDrawer } from "../ui/order-drawer";
import { Drawer } from "@widgets/drawer";

const meta = {
  component: OrderDrawer,
} satisfies Meta<typeof OrderDrawer>;

export default meta;

export const PurchaseOptionDrawerStory: StoryObj<typeof meta> = {
  args: {},
  render: () => {
    return (
      <Drawer open>
        <OrderDrawer />
      </Drawer>
    );
  },
};
