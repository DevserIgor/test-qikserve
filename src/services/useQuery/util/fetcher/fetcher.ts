import { api } from '../../../api';

export type QueryKeyT = [string, object | undefined];
type FetcherParams = {
  queryKey: QueryKeyT;
};

export const fetcher = async <T>({ queryKey }: FetcherParams): Promise<T> => {
  const [url, params] = queryKey;
  return await api
    .get<T>(url, { params: { ...params } })
    .then((res) => res.data);
};
