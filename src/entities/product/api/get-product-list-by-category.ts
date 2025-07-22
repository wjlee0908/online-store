import { api } from "@shared/api";
import {
  GetProductListResponse,
  GetProductListResponseSchema,
} from "./get-product-list-response";

export const getProductListByCategory = async ({
  categorySlug,

  limit = 20,
  skip = 0,
}: {
  categorySlug: string;

  limit?: number;
  skip?: number;
}): Promise<GetProductListResponse> => {
  const response = await api
    .get(`products/category/${categorySlug}`, {
      searchParams: {
        limit,
        skip,
      },
    })
    .json();
  return GetProductListResponseSchema.parse(response);
};
