import { useQuery } from "@tanstack/react-query";
import { getProductCategoryList } from "../api/get-product-category-list";
import { productCategoryKey } from "../config/query-key";
import { toProductCategory } from "../api/mapper";

export const useProductCategories = () => {
  const { data, ...query } = useQuery({
    queryKey: productCategoryKey.all.queryKey,
    queryFn: getProductCategoryList,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
  });

  const productCategories = data?.map(toProductCategory);

  const getCategoryBySlug = (slug: string) => {
    return productCategories?.find((category) => category.slug === slug);
  };

  return {
    productCategories,
    getCategoryBySlug,
    productCategoryListQuery: query,
  };
};
