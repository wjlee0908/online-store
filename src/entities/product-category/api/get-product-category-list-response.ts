import z from "zod";
import { ProductCategorySchema } from "./dto";

export const GetProductCategoryListResponseSchema = z.array(
  ProductCategorySchema
);

export type GetProductCategoryListResponse = z.infer<
  typeof GetProductCategoryListResponseSchema
>;
