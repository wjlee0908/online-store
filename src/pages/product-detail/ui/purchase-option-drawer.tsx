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
import { SelectedProductCard } from "./selected-product-card";
import { SelectedProduct, hasSameOptions } from "../model/selected-product";
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

export const PurchaseOptionDrawer = () => {
  const { product } = useProduct();

  const [selectValue, setSelectValue] = useState<string>("");
  const [selectedProducts, setSelectedProducts] = useState<SelectedProduct[]>(
    []
  );
  const [openProductsCollapsible, setOpenProductsCollapsible] = useState(false);

  const totalPrice = selectedProducts.reduce(
    (acc, product) => acc + product.unitPrice * product.quantity,
    0
  );

  const handleSelectOption = (selectedValue: string) => {
    const newProduct: SelectedProduct = {
      options: [
        {
          field: "default",
          value: selectedValue,
        },
      ],
      unitPrice: product.price,
      quantity: 1,
    };

    if (selectedProducts.some((p) => hasSameOptions(p, newProduct))) {
      return;
    }

    setSelectedProducts((prev) => [...prev, newProduct]);
    setSelectValue("");
    setOpenProductsCollapsible(true);
  };

  const handleDeleteProduct = async (product: SelectedProduct) => {
    if (selectedProducts.length - 1 <= 0) {
      setOpenProductsCollapsible(false);

      await delay(COLLAPSIBLE_ANIMATION_DURATION_MS);
    }

    setSelectedProducts((prevProducts) =>
      prevProducts.filter((p) => !hasSameOptions(p, product))
    );
  };

  const handleChangeCount = (product: SelectedProduct, count: number) => {
    setSelectedProducts((prevProducts) =>
      prevProducts.map((p) =>
        hasSameOptions(p, product) ? { ...p, quantity: count } : p
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
            {selectedProducts.map((product) => (
              <SelectedProductCard
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
