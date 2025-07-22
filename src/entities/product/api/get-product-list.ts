import { api } from "@shared/api";
import {
  GetProductListResponse,
  GetProductListResponseSchema,
} from "./get-product-list-response";

export const getProductList = async ({
  limit = 20,
  skip = 0,
}: {
  limit?: number;
  skip?: number;
}): Promise<GetProductListResponse> => {
  const response = await api
    .get("products", {
      searchParams: {
        limit,
        skip,
      },
    })
    .json();
  return GetProductListResponseSchema.parse(response);
};
