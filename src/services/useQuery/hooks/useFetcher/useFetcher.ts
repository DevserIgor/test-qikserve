import { UseQueryOptions, useQuery } from '@tanstack/react-query';
import { QueryKeyT, fetcher } from '../../util/fetcher/fetcher';

type useFetchParams<T, R> = {
  url: string | null;
  params?: object;
  config?: UseQueryOptions<T, Error, R, QueryKeyT>;
  errorMessage?: string;
};

export const useFetch = <T, R = T>({
  url,
  config,
  params,
  errorMessage
}: useFetchParams<T, R>) => {
  return useQuery<T, Error, R, QueryKeyT>(
    [url!, params],
    ({ queryKey }: { queryKey: QueryKeyT }) => fetcher({ queryKey }),
    {
      enabled: !!url,
      ...config,
      meta: {
        errorMessage
      }
    }
  );
};
