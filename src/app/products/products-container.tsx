"use client";

import { ProductCard } from "@/components/product-card";
import { PRODUCT_LIST_LIMIT } from "@/lib/constants/product";
import { productKey } from "@/queries/products";
import { getProductList } from "@/services/product";
import { useInfiniteQuery } from "@tanstack/react-query";

export default function ProductsContainer() {
  const { data } = useInfiniteQuery({
    queryKey: productKey.list.queryKey,
    queryFn: ({ pageParam = 0 }) =>
      getProductList({
        limit: PRODUCT_LIST_LIMIT,
        skip: pageParam * PRODUCT_LIST_LIMIT,
      }),
    initialPageParam: 0,
    getNextPageParam: (lastPage, pages) => {
      return lastPage.total > pages.length * PRODUCT_LIST_LIMIT
        ? pages.length + 1
        : undefined;
    },
  });

  const products = data?.pages.flatMap((page) => page.products);

  return (
    <div className="grid grid-cols-2 gap-4 px-4 pb-4">
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          productId={product.id}
          imageSrc={product.images[0]}
          name={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}
