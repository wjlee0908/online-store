import { api } from "@shared/api";
import {
  GetProductListResponse,
  GetProductListResponseSchema,
} from "../model/get-product-list-response-schema";

export const getProductListByCategory = async ({
  categoryId,

  limit = 20,
  skip = 0,
}: {
  categoryId: string;

  limit?: number;
  skip?: number;
}): Promise<GetProductListResponse> => {
  const response = await api
    .get(`products/category/${categoryId}`, {
      searchParams: {
        limit,
        skip,
      },
    })
    .json();
  return GetProductListResponseSchema.parse(response);
};
