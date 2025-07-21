import { api } from "@shared/api";
import {
  GetProductCategoryListResponse,
  GetProductCategoryListResponseSchema,
} from "../model/get-product-category-list-schema";

export const getProductCategoryList =
  async (): Promise<GetProductCategoryListResponse> => {
    const response = await api.get("products/categories").json();
    return GetProductCategoryListResponseSchema.parse(response);
  };
