import { api } from "@/lib/api";
import {
  GetProductListResponse,
  GetProductListResponseSchema,
} from "@/schemas/product";

export const getProductList = async ({
  limit = 20,
  skip = 0,
}: {
  limit?: number;
  skip?: number;
}): Promise<GetProductListResponse> => {
  console.log("getProductList", limit, skip);
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
