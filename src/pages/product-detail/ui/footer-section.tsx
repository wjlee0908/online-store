"use client";

import { Drawer } from "@widgets/drawer";
import { Footer } from "./footer";
import { PurchaseOptionDrawer } from "./purchase-option-drawer";

export const FooterSection = () => {
  return (
    <Drawer>
      <Footer />
      <PurchaseOptionDrawer />
    </Drawer>
  );
};
