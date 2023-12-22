'use client';
import { queryClient } from '@/services';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import { AppContextProvider } from './appContextProvider';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AppContextProvider>{children}</AppContextProvider>
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};
