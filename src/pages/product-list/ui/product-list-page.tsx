import { SubcategoryTab } from "./subcategory-tab";
import { PRODUCT_LIST_LIMIT } from "../config";
import { productKey, getProductListByCategory } from "@entities/product";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ProductCards from "./products-cards";

export const ProductListPage = async () => {
  const queryClient = new QueryClient();

  const categoryId = "beauty";

  await queryClient.prefetchInfiniteQuery({
    queryKey: productKey
      .infinite({ limit: PRODUCT_LIST_LIMIT })
      ._ctx.category("beauty").queryKey,
    queryFn: ({ pageParam = 0 }) =>
      getProductListByCategory({
        categoryId,
        limit: PRODUCT_LIST_LIMIT,
        skip: pageParam * PRODUCT_LIST_LIMIT,
      }),
    initialPageParam: 0,
  });

  return (
    <main>
      <SubcategoryTab
        className="mb-4"
        subcategories={["남성", "여성", "아동", "패션잡화"]}
      />
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProductCards categoryId={categoryId} />
      </HydrationBoundary>
    </main>
  );
};
