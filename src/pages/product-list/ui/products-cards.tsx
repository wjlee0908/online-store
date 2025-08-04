"use client";

import { ProductCard } from "./product-card";
import { PRODUCT_LIST_LIMIT } from "../config";
import { productKey, getProductListByCategory } from "@entities/product";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { useProductsByCategoryInfiniteQuery } from "@/entities/product";

export interface ProductCardsProps {
  categorySlug: string;
}

export default function ProductCards({ categorySlug }: ProductCardsProps) {
  const observerRef = useRef<HTMLDivElement>(null);

  const productListQuery = useProductsByCategoryInfiniteQuery({
    categorySlug,
  });

  const products = productListQuery.data;

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
