import {
  defaultShouldDehydrateQuery,
  isServer,
  QueryClient,
} from "@tanstack/react-query";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { persistQueryClient } from "@tanstack/react-query-persist-client";
import { productCategoryKey } from "@/entities/product-category";
import util from "util";

const makeQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        gcTime: 1000 * 60 * 60 * 24, // 24 hours
      },
      dehydrate: {
        // SSR용: 페이지 로드에 필요한 모든 쿼리 (pending 포함)
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) ||
          query.state.status === "pending",
        shouldRedactErrors: (error) => {
          // Next.js가 서버 에러를 통해 동적 페이지를 감지하기 때문에 에러를 제거하지 않음
          return false;
        },
      },
    },
  });
};

let browserQueryClient: QueryClient | null = null;

// localStorage persister 설정 (클라이언트에서만)
export const localStoragePersister = createAsyncStoragePersister({
  storage: typeof window !== "undefined" ? window.localStorage : undefined,
});

export const getQueryClient = () => {
  if (isServer) {
    return makeQueryClient();
  }

  // Browser
  if (!browserQueryClient) {
    browserQueryClient = makeQueryClient();

    persistQueryClient({
      queryClient: browserQueryClient,
      persister: localStoragePersister,
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
      buster: "v1", // 캐시 버전 관리
      dehydrateOptions: {
        shouldDehydrateQuery: (query) => {
          const queryKey = query.queryKey;

          // 카테고리 목록은 localStorage에 저장 (네비게이션용)
          if (
            Array.isArray(queryKey) &&
            util.isDeepStrictEqual(queryKey, productCategoryKey.all.queryKey)
          ) {
            return true;
          }

          return false;
        },
      },
    });
  }
  return browserQueryClient;
};
