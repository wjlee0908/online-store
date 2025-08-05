"use client";

import { Drawer } from "@widgets/drawer";
import { Footer } from "./footer";
import { OrderDrawer } from "./order-drawer";

export const FooterSection = () => {
  return (
    <Drawer>
      <Footer />
      <OrderDrawer />
    </Drawer>
  );
};
