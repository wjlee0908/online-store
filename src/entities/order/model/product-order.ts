import { ProductOption } from "@/entities/product/model/product-option";

/**
 * 상품 하나의 주문 정보
 */
export interface ProductOrder {
  /**
   * 선택한 옵션
   * - 옵션1=xxx, 옵션2=yyy...
   */
  options: ProductOption[];
  /** 개당 가격 */
  unitPrice: number;
  quantity: number;
}

export const hasSameOptions = (orderA: ProductOrder, orderB: ProductOrder) => {
  return (
    orderA.options.length === orderB.options.length &&
    orderA.options.every(
      (option, idx) =>
        option.field === orderB.options[idx].field &&
        option.value === orderB.options[idx].value
    )
  );
};
