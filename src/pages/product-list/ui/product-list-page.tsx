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
import { CategoryHeader, CategoryHeaderSkeleton } from "@/widgets/header";
import { Suspense } from "react";
import { ProductListLoading } from "./product-list-loading";
import { CategoryRedirect } from "../lib/category-redirect";

export const ProductListPage = async (props: PageProps) => {
  const searchParams = await props.searchParams;

  const categorySlug =
    typeof searchParams.category === "string"
      ? searchParams.category
      : DEFAULT_CATEGORY_SLUG;

  const queryClient = new QueryClient();

  if (!categorySlug) {
    return <ProductListLoading />;
  }

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
    <>
      <CategoryRedirect />

      <Suspense fallback={<CategoryHeaderSkeleton />}>
        <CategoryHeader categorySlug={categorySlug} />
      </Suspense>
      <main>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ProductCards categorySlug={categorySlug} />
        </HydrationBoundary>
      </main>
    </>
  );
};
