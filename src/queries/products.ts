import { getProductList } from "@/services/product";
import { createQueryKeys } from "@lukemorales/query-key-factory";

export const productKey = createQueryKeys("products", {
  all: null,
  list: {
    queryKey: null,
    queryFn: (context) =>
      getProductList({
        limit: 20,
        skip: (context.pageParam as number) * 20,
      }),
  },
});
