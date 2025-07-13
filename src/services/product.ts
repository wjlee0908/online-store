import { api } from "@/lib/api";
import { GetProductResponseSchema } from "@/schemas/product";

export const getProducts = async ({
  limit = 20,
  skip = 0,
}: {
  limit?: number;
  skip?: number;
}) => {
  const response = await api
    .get(`/products`, {
      searchParams: {
        limit,
        skip,
      },
    })
    .json();
  return GetProductResponseSchema.parse(response);
};
