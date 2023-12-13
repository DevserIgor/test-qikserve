import { api } from '../../../api';
import { QueryKeyT, fetcher } from './fetcher';

jest.mock('../../../../services/api');

describe('Fetcher', () => {
  it('should call api with the correct parameters', async () => {
    (api.get as jest.Mock).mockImplementation(() =>
      Promise.resolve({ data: { result: 'abc' } })
    );

    const key: QueryKeyT = ['key1', { param: 'a' }];
    const result = await fetcher({ queryKey: key });

    expect(api.get).toHaveBeenCalledWith('key1', {
      params: {
        param: 'a',
      },
    });
    expect(result).toEqual({ result: 'abc' });
  });
});
