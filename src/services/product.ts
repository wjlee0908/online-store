import { api } from "@/lib/api";
import { GetProductResponseSchema } from "@/schemas/product";

export const getProducts = async () => {
  const response = await api.get("/products").json();
  return GetProductResponseSchema.parse(response);
};
