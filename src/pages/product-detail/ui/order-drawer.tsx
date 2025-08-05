import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@widgets/select";
import { DrawerContent, DrawerTitle } from "@widgets/drawer";
import { SelectGroup } from "@radix-ui/react-select";
import { cn, delay } from "@shared/lib";
import { Button } from "@widgets/button";
import { useState } from "react";
import { PriceDetailCollapsible } from "./price-detail-collapsible";
import { ProductOrderCard } from "./product-order-card";
import { ProductOrder, hasSameOptions } from "../model/product-order";
import {
  Collapsible,
  COLLAPSIBLE_ANIMATION_DURATION_MS,
  CollapsibleContent,
} from "@widgets/collapsible";
import { useProduct } from "../model/use-product";

const ContentWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={cn("w-full px-4", className)}>{children}</div>;
};

export const OrderDrawer = () => {
  const { product } = useProduct();

  const [selectValue, setSelectValue] = useState<string>("");
  const [productOrders, setProductOrders] = useState<ProductOrder[]>([]);
  const [openOrderCollapsible, setOpenOrderCollapsible] = useState(false);

  const totalPrice = productOrders.reduce(
    (acc, order) => acc + order.unitPrice * order.quantity,
    0
  );

  const handleSelectOption = (selectedValue: string) => {
    const newOrder: ProductOrder = {
      options: [
        {
          field: "default",
          value: selectedValue,
        },
      ],
      unitPrice: product.price,
      quantity: 1,
    };

    if (productOrders.some((order) => hasSameOptions(order, newOrder))) {
      return;
    }

    setProductOrders((prev) => [...prev, newOrder]);
    setSelectValue("");
    setOpenOrderCollapsible(true);
  };

  const handleDeleteOrder = async (targetOrder: ProductOrder) => {
    if (productOrders.length - 1 <= 0) {
      setOpenOrderCollapsible(false);

      await delay(COLLAPSIBLE_ANIMATION_DURATION_MS);
    }

    setProductOrders((prevOrders) =>
      prevOrders.filter((order) => !hasSameOptions(order, targetOrder))
    );
  };

  const handleChangeCount = (targetOrder: ProductOrder, count: number) => {
    setProductOrders((prevOrders) =>
      prevOrders.map((order) =>
        hasSameOptions(order, targetOrder)
          ? { ...order, quantity: count }
          : order
      )
    );
  };

  return (
    <DrawerContent className="pb-2">
      <DrawerTitle className="text-lg font-semibold px-4 my-5">
        옵션 선택
      </DrawerTitle>

      <ContentWrapper className="mb-6">
        <Select value={selectValue} onValueChange={handleSelectOption}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="선택" />
          </SelectTrigger>
          <SelectContent className="z-overlay-select">
            <SelectGroup>
              <SelectItem value={product.title}>{product.title}</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </ContentWrapper>

      <Collapsible open={openOrderCollapsible}>
        <CollapsibleContent>
          <ContentWrapper className="mb-5">
            {productOrders.map((order) => (
              <ProductOrderCard
                key={order.options.map((option) => option.value).join("_")}
                title={order.options.map((option) => option.value).join(" / ")}
                price={order.unitPrice}
                count={order.quantity}
                onChangeCount={(count) => handleChangeCount(order, count)}
                onClickDelete={async () => await handleDeleteOrder(order)}
              />
            ))}
          </ContentWrapper>

          <ContentWrapper className="mb-3">
            <PriceDetailCollapsible
              className="mb-3"
              totalPrice={totalPrice}
              totalDiscount={0}
              maxDiscountedPrice={totalPrice}
            />
          </ContentWrapper>
        </CollapsibleContent>
      </Collapsible>

      <ContentWrapper className="flex gap-2 py-3">
        <Button variant="outline" size="xl" className="flex-1">
          장바구니
        </Button>
        <Button size="xl" className="flex-1">
          바로 구매
        </Button>
      </ContentWrapper>
    </DrawerContent>
  );
};
