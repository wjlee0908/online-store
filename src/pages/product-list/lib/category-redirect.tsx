"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { DEFAULT_CATEGORY_SLUG } from "../config";
import { ROUTES } from "@shared/config";

export const CategoryRedirect = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const categorySlug = searchParams?.get("category");

  useEffect(() => {
    if (!categorySlug) {
      router.replace(`${ROUTES.PRODUCTS}?category=${DEFAULT_CATEGORY_SLUG}`);
    }
  }, [categorySlug]);

  return null;
};
