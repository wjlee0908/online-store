"use client";

import { ProductCard } from "./product-card";
import { PRODUCT_LIST_LIMIT } from "../config";
import { productKey, getProductListByCategory } from "@entities/product";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";

export interface ProductCardsProps {
  categorySlug: string;
}

export default function ProductCards({ categorySlug }: ProductCardsProps) {
  const observerRef = useRef<HTMLDivElement>(null);

  const productListQuery = useInfiniteQuery({
    queryKey: productKey
      .infinite({ limit: PRODUCT_LIST_LIMIT })
      ._ctx.category(categorySlug).queryKey,
    queryFn: ({ pageParam = 0 }) =>
      getProductListByCategory({
        categorySlug: categorySlug,
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

  const products = productListQuery.data?.pages.flatMap(
    (page) => page.products
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (
          entry.isIntersecting &&
          productListQuery.hasNextPage &&
          !productListQuery.isFetchingNextPage
        ) {
          productListQuery.fetchNextPage();
        }
      },
      {
        rootMargin: "400px",
        threshold: 0.1,
      }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [
    productListQuery.fetchNextPage,
    productListQuery.hasNextPage,
    productListQuery.isFetchingNextPage,
  ]);

  return (
    <div className="grid grid-cols-2 gap-4 px-4 pb-4">
      {products?.map((product) => (
        <ProductCard
          key={product.id}
          productId={product.id}
          imageSrc={product.thumbnail}
          name={product.title}
          price={product.price}
        />
      ))}

      {/* Intersection Observer target */}
      <div
        ref={observerRef}
        className="col-span-2 h-4 flex items-center justify-center"
      >
        {productListQuery.isFetchingNextPage && (
          <span className="loading loading-spinner loading-md"></span>
        )}
      </div>
    </div>
  );
}
