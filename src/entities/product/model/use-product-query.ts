import {
  UseSuspenseQueryOptions,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { productKey } from "../config/query-key";
import { getProduct } from "../api/get-product";
import { ProductDTO } from "../api/dto";

export const useProductQuery = ({ productId }: { productId: number }) => {
  const query = useSuspenseQuery<ProductDTO>({
    queryKey: productKey.detail(productId).queryKey,
    queryFn: () => getProduct({ productId }),
  });

  return {
    ...query,
    product: query.data,
  };
};
