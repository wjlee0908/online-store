interface Option {
  field: string;
  value: string;
  additionalPrice?: number;
}

export interface OrderItem {
  options: Option[];
  /** 개당 가격 */
  unitPrice: number;
  quantity: number;
}

export const hasSameOptions = (itemA: OrderItem, itemB: OrderItem) => {
  return (
    itemA.options.length === itemB.options.length &&
    itemA.options.every(
      (option, idx) =>
        option.field === itemB.options[idx].field &&
        option.value === itemB.options[idx].value
    )
  );
};
