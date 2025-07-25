"use client";

import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { getQueryClient } from "./get-query-client";
import {
  localStoragePersister,
  persistOptions,
} from "./local-storage-persister";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = getQueryClient();

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: localStoragePersister, ...persistOptions }}
    >
      {children}
    </PersistQueryClientProvider>
  );
};
