import z from "zod";

export const ProductCategorySchema = z.object({
  slug: z.string(),
  name: z.string(),
  url: z.string(),
});
