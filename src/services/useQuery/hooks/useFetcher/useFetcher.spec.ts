import * as ReactQuery from '@tanstack/react-query';
import { useFetch } from './useFetcher';

describe('Use Fetcher', () => {
  beforeAll(() => {
    jest.spyOn(ReactQuery, 'useQuery').mockImplementation(
      jest.fn().mockReturnValue({
        data: {},
        isLoading: false,
        isSuccess: true,
      })
    );
  });

  it('should be called with the correct parameters', () => {
    const url = 'my url';
    const params = { myParam: 'param' };
    const errorMessage = 'my erro';
    useFetch({ url, params, errorMessage });

    expect(ReactQuery.useQuery).toHaveBeenCalledWith(
      [url, params],
      expect.any(Function),
      { enabled: true, meta: { errorMessage } }
    );
  });

  it('should be called with the correct parameters when url is null', () => {
    const url = null;
    const params = { myParam: 'param' };
    const errorMessage = 'my erro';
    useFetch({ url, params, errorMessage });

    expect(ReactQuery.useQuery).toHaveBeenCalledWith(
      [url, params],
      expect.any(Function),
      { enabled: false, meta: { errorMessage } }
    );
  });
});
