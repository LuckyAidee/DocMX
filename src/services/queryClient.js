import { QueryClient } from '@tanstack/react-query';

// Shared QueryClient singleton used across the app so we can invalidate
// or refetch queries from non-hook code (e.g., AuthContext, service handlers).
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
      staleTime: 1000 * 30,
    },
  },
});

export default queryClient;
