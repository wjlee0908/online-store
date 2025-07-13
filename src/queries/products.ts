import { getProducts } from "@/services/product";
import { createQueryKeys } from "@lukemorales/query-key-factory";

export const products = createQueryKeys("products", {
  all: null,
  list: {
    queryKey: null,
    queryFn: (context) =>
      getProducts({
        limit: 20,
        skip: (context.pageParam as number) * 20,
      }),
  },
});
