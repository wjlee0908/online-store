import {
  UseSuspenseQueryOptions,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { productKey } from "../config/query-key";
import { getProduct } from "../api/get-product";
import { toProduct } from "../api/mapper";

export const useProductQuery = ({ productId }: { productId: number }) => {
  const query = useSuspenseQuery({
    queryKey: productKey.detail(productId).queryKey,
    queryFn: () => getProduct({ productId }),
    select: toProduct,
  });

  return {
    ...query,
    product: query.data,
  };
};
