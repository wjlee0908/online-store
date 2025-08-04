import { ProductDTO } from "./dto";
import { Product } from "../model/product";

export const toProduct = (dto: ProductDTO): Product => {
  const KRW_EXCHANGE_RATE = 1380;

  return {
    ...dto,
    // TODO: get KRW price from server
    price: Math.round((dto.price * KRW_EXCHANGE_RATE) / 100) * 100,
  };
};
