import { SubcategoryTab } from "./subcategory-tab";
import { DEFAULT_CATEGORY_SLUG, PRODUCT_LIST_LIMIT } from "../config";
import { productKey, getProductListByCategory } from "@entities/product";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import ProductCards from "./products-cards";
import { PageProps } from "@shared/framework";

export const ProductListPage = async (props: PageProps) => {
  const searchParams = await props.searchParams;

  const categorySlug =
    typeof searchParams.categorySlug === "string"
      ? searchParams.categorySlug
      : DEFAULT_CATEGORY_SLUG;

  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: productKey
      .infinite({ limit: PRODUCT_LIST_LIMIT })
      ._ctx.category(categorySlug).queryKey,
    queryFn: ({ pageParam = 0 }) =>
      getProductListByCategory({
        categorySlug,
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
        <ProductCards categorySlug={categorySlug} />
      </HydrationBoundary>
    </main>
  );
};
