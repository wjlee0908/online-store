import { productCategoryKey } from "@entities/product-category";
import { isArrayEqual } from "@shared/lib/array";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { DehydrateOptions, OmitKeyof } from "@tanstack/react-query";
import { PersistQueryClientOptions } from "@tanstack/react-query-persist-client";

/** localStorage에 저장할 쿼리의 키 목록 */
const localStorageQueryKeys = [productCategoryKey.all.queryKey];

// localStorage persister 설정 (클라이언트에서만)
export const localStoragePersister = createAsyncStoragePersister({
  storage: typeof window !== "undefined" ? window.localStorage : undefined,
});

export const persistOptions: OmitKeyof<
  PersistQueryClientOptions,
  "queryClient" | "persister"
> = {
  maxAge: 1000 * 60 * 60 * 24, // 24 hours
  buster: "v1", // 캐시 버전 관리
  dehydrateOptions: {
    shouldDehydrateQuery: (query) => {
      const queryKey = query.queryKey;

      // 카테고리 목록은 localStorage에 저장 (네비게이션용)
      if (
        Array.isArray(queryKey) &&
        localStorageQueryKeys.some((key) => isArrayEqual(queryKey, key))
      ) {
        return true;
      }

      return false;
    },
  },
};
