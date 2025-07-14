import { productKey } from "@/queries/products";
import { mergeQueryKeys } from "@lukemorales/query-key-factory";

export const queries = mergeQueryKeys(productKey);
