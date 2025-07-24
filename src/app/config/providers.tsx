"use client";

import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { localStoragePersister, getQueryClient } from "./get-query-client";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = getQueryClient();

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: localStoragePersister }}
    >
      {children}
    </PersistQueryClientProvider>
  );
};
