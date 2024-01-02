import { AppContext } from '@/providers/appContextProvider';
import { useContext, useMemo } from 'react';

export const useFormatPrice = (): ((value: number) => string) => {
  const { state } = useContext(AppContext);
  const { globalState } = state;
  const { ccy, currency } = globalState?.restaurant || {};

  const formatter = useMemo(() => {
    if (!ccy || !currency) {
      return new Intl.NumberFormat('default', {
        style: 'currency',
        currency: 'USD'
      });
    }

    return new Intl.NumberFormat(ccy, {
      style: 'currency',
      currency: ccy,
      currencyDisplay: 'symbol'
    });
  }, [ccy, currency]);

  const formatPrice = (value: number) => formatter.format(value);

  return formatPrice;
};
