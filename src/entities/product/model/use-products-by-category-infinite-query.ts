import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { productKey } from "../config/query-key";
import { PRODUCT_LIST_LIMIT } from "@/pages/product-list/config";
import { getProductListByCategory } from "../api/get-product-list-by-category";
import { toProduct } from "../api/mapper";

export const useProductsByCategoryInfiniteQuery = ({
  categorySlug,
}: {
  categorySlug: string;
}) => {
  return useSuspenseInfiniteQuery({
    queryKey: productKey
      .infinite({ limit: PRODUCT_LIST_LIMIT })
      ._ctx.category(categorySlug).queryKey,
    queryFn: ({ pageParam = 0 }) =>
      getProductListByCategory({
        categorySlug: categorySlug,
        limit: PRODUCT_LIST_LIMIT,
        skip: pageParam * PRODUCT_LIST_LIMIT,
      }),

    select: (data) =>
      data.pages.flatMap((page) => page.products).map(toProduct),

    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.total > pages.length * PRODUCT_LIST_LIMIT
        ? pages.length + 1
        : undefined;
    },
  });
};
