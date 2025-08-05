interface Option {
  field: string;
  value: string;
  additionalPrice?: number;
}

export interface ProductOrder {
  options: Option[];
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
