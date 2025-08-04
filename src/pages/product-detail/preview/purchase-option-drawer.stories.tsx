import { Meta, StoryObj } from "@storybook/nextjs-vite";
import { PurchaseOptionDrawer } from "../ui/purchase-option-drawer";
import { Drawer } from "@widgets/drawer";

const meta = {
  component: PurchaseOptionDrawer,
} satisfies Meta<typeof PurchaseOptionDrawer>;

export default meta;

export const PurchaseOptionDrawerStory: StoryObj<typeof meta> = {
  args: {},
  render: () => {
    return (
      <Drawer open>
        <PurchaseOptionDrawer />
      </Drawer>
    );
  },
};
