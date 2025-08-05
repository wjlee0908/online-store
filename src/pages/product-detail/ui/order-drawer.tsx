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
import { OrderItemCard } from "./order-item-card";
import { OrderItem, hasSameOptions } from "../model/order-item";
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
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [openProductsCollapsible, setOpenProductsCollapsible] = useState(false);

  const totalPrice = orderItems.reduce(
    (acc, product) => acc + product.unitPrice * product.quantity,
    0
  );

  const handleSelectOption = (selectedValue: string) => {
    const newItem: OrderItem = {
      options: [
        {
          field: "default",
          value: selectedValue,
        },
      ],
      unitPrice: product.price,
      quantity: 1,
    };

    if (orderItems.some((item) => hasSameOptions(item, newItem))) {
      return;
    }

    setOrderItems((prev) => [...prev, newItem]);
    setSelectValue("");
    setOpenProductsCollapsible(true);
  };

  const handleDeleteProduct = async (targetItem: OrderItem) => {
    if (orderItems.length - 1 <= 0) {
      setOpenProductsCollapsible(false);

      await delay(COLLAPSIBLE_ANIMATION_DURATION_MS);
    }

    setOrderItems((prevItems) =>
      prevItems.filter((item) => !hasSameOptions(item, targetItem))
    );
  };

  const handleChangeCount = (targetItem: OrderItem, count: number) => {
    setOrderItems((prevItems) =>
      prevItems.map((item) =>
        hasSameOptions(item, targetItem) ? { ...item, quantity: count } : item
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

      <Collapsible open={openProductsCollapsible}>
        <CollapsibleContent>
          <ContentWrapper className="mb-5">
            {orderItems.map((product) => (
              <OrderItemCard
                key={product.options.map((option) => option.value).join("_")}
                title={product.options
                  .map((option) => option.value)
                  .join(" / ")}
                price={product.unitPrice * product.quantity}
                count={product.quantity}
                onChangeCount={(count) => handleChangeCount(product, count)}
                onClickDelete={async () => await handleDeleteProduct(product)}
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
