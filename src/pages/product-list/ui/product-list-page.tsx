import { SubcategoryTab } from "@/components/subcategory-tab";
import { PRODUCT_LIST_LIMIT } from "@/lib/constants/product";
import { productKey } from "@/queries/products";
import { getProductList } from "@/services/product";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ProductsContainer from "./products-container";

export default async function ProductsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: productKey.list.queryKey,
    queryFn: ({ pageParam = 0 }) =>
      getProductList({
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
        <ProductsContainer />
      </HydrationBoundary>
    </main>
  );
}
