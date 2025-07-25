"use client";

import { useProductCategories } from "@/entities/product-category/model/use-product-categories";
import { HeaderView } from "./header-view";

export function CategoryHeader({ categorySlug }: { categorySlug: string }) {
  const { getCategoryBySlug } = useProductCategories();

  const category = getCategoryBySlug(categorySlug);

  return <HeaderView title={category?.name ?? ""} />;
}
