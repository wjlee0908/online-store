import { getProducts } from "@/services/product";
import { createQueryKeys } from "@lukemorales/query-key-factory";

export const products = createQueryKeys("products", {
  all: null,
  list: {
    queryKey: null,
    queryFn: getProducts,
  },
});
