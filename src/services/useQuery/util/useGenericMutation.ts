import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

type UseGenericMutationType<OldDataT, BodyT, ResponseT> = {
  func: (data: BodyT) => Promise<AxiosResponse<ResponseT>>;
  onSuccess?: (
    data: AxiosResponse<ResponseT>,
    body: BodyT,
    context: unknown
  ) => Promise<unknown> | void;
  url: string;
  params?: object;
  errorMessage?: string;
  updater?: ((oldData: OldDataT, newData: BodyT) => OldDataT) | undefined;
};

export const useGenericMutation = <OldDataT, BodyT, ResponseT>({
  func,
  onSuccess,
  url,
  params,
  updater,
  errorMessage
}: UseGenericMutationType<OldDataT, BodyT, ResponseT>) => {
  const queryClient = useQueryClient();

  return useMutation<AxiosResponse<ResponseT>, AxiosError, BodyT>(func, {
    onMutate: async (data) => {
      await queryClient.cancelQueries([url!, params]);

      const previousData = queryClient.getQueryData([url!, params]);

      queryClient.setQueryData<OldDataT>([url!, params], (oldData) => {
        if (!updater) return oldData;

        return updater(oldData!, data);
      });

      return previousData;
    },
    onSuccess: onSuccess,
    onError: (err, _, context) => {
      queryClient.setQueryData([url!, params], context);
      if (errorMessage) toast.error(errorMessage);
    },
    onSettled: () => {
      queryClient.invalidateQueries([url!]);
    }
  });
};
