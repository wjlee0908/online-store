import { api } from "@/shared/api/ky";
import { GetProductListResponse, GetProductListResponseSchema } from "../model";

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
