import { getProductList } from "../api/get-product-list";
import { createQueryKeys } from "@lukemorales/query-key-factory";
import { getProductListByCategory } from "../api/get-product-list-by-category";

const DEFAULT_LIMIT = 20;

export const productKey = createQueryKeys("products", {
  all: null,
  infinite: (options?: { limit?: number }) => {
    const limit = options?.limit ?? DEFAULT_LIMIT;

    return {
      queryKey: [{ limit }],
      queryFn: async (context) =>
        getProductList({
          skip: (context.pageParam as number) * limit,
          limit,
        }),

      contextQueries: {
        category: (categoryId) => ({
          queryKey: [{ categoryId }],
          queryFn: (context) =>
            getProductListByCategory({
              categoryId: context.queryKey[1] as string,
              limit,
              skip: (context.pageParam as number) * limit,
            }),
        }),
      },
    };
  },
});
