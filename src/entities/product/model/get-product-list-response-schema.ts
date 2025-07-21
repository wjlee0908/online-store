import z from "zod";
import { ProductSchema } from "./product-schema";

/** 상품 목록 API 응답 스키마 */
export const GetProductListResponseSchema = z.object({
  products: z.array(ProductSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});

export type GetProductListResponse = z.infer<
  typeof GetProductListResponseSchema
>;
