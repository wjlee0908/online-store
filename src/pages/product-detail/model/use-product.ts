"use client";

import { useProductQuery } from "@entities/product";
import { useParams } from "next/navigation";

export const useProduct = () => {
  const params = useParams();

  const productId = params?.id ? Number(params.id) : null;

  const { product } = useProductQuery({ productId: productId ?? -1 });

  return { product };
};
