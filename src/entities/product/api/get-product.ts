import { api } from "@shared/api";
import { ProductDTO, ProductSchema } from "./dto";

export const getProduct = async ({
  productId,
}: {
  productId: string;
}): Promise<ProductDTO> => {
  const response = await api.get(`products/${productId}`).json();
  return ProductSchema.parse(response);
};
