import { api } from "@shared/api";
import {
  GetProductCategoryListResponse,
  GetProductCategoryListResponseSchema,
} from "./get-product-category-list-response";

export const getProductCategoryList =
  async (): Promise<GetProductCategoryListResponse> => {
    const response = await api.get("products/categories").json();
    return GetProductCategoryListResponseSchema.parse(response);
  };
