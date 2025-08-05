"use client";

import { Drawer } from "@/shared/ui/drawer";
import { Footer } from "./footer";
import { ProductOrderDrawer } from "./product-order-drawer";

export const FooterSection = () => {
  return (
    <Drawer>
      <Footer />
      <ProductOrderDrawer />
    </Drawer>
  );
};
