import z from "zod";
import { ProductCategorySchema } from "./product-category-schema";

export const GetProductCategoryListResponseSchema = z.array(
  ProductCategorySchema
);

export type GetProductCategoryListResponse = z.infer<
  typeof GetProductCategoryListResponseSchema
>;
