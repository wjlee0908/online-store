import { z } from "zod";

// 리뷰 스키마
const ReviewSchema = z.object({
  rating: z.number().min(1).max(5),
  comment: z.string(),
  date: z.iso.datetime(),
  reviewerName: z.string(),
  reviewerEmail: z.email(),
});

// 차원 정보 스키마
const DimensionsSchema = z.object({
  width: z.number(),
  height: z.number(),
  depth: z.number(),
});

// 메타 정보 스키마
const MetaSchema = z.object({
  createdAt: z.iso.datetime(),
  updatedAt: z.iso.datetime(),
  barcode: z.string(),
  qrCode: z.string(),
});

// 상품 스키마
const ProductSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  category: z.string(),
  price: z.number(),
  discountPercentage: z.number(),
  rating: z.number(),
  stock: z.number(),
  tags: z.array(z.string()),
  brand: z.string().optional(),
  sku: z.string(),
  weight: z.number(),
  dimensions: DimensionsSchema,
  warrantyInformation: z.string(),
  shippingInformation: z.string(),
  availabilityStatus: z.string(),
  reviews: z.array(ReviewSchema),
  returnPolicy: z.string(),
  minimumOrderQuantity: z.number(),
  meta: MetaSchema,
  thumbnail: z.string(),
  images: z.array(z.string()),
});

// 상품 목록 응답 스키마
export const GetProductListResponseSchema = z.object({
  products: z.array(ProductSchema),
  total: z.number(),
  skip: z.number(),
  limit: z.number(),
});

export type GetProductListResponse = z.infer<
  typeof GetProductListResponseSchema
>;
export type Product = z.infer<typeof ProductSchema>;
export type Review = z.infer<typeof ReviewSchema>;
