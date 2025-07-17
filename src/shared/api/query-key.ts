import { productKey } from "@/entities/product/config";
import { mergeQueryKeys } from "@lukemorales/query-key-factory";

export const queryKeys = mergeQueryKeys(productKey);
