interface Option {
  field: string;
  value: string;
  additionalPrice?: number;
}

export interface SelectedProduct {
  options: Option[];
  /** 개당 가격 */
  unitPrice: number;
  quantity: number;
}

export const hasSameOptions = (
  productA: SelectedProduct,
  productB: SelectedProduct
) => {
  return (
    productA.options.length === productB.options.length &&
    productA.options.every(
      (option, idx) =>
        option.field === productB.options[idx].field &&
        option.value === productB.options[idx].value
    )
  );
};
