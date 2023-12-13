'use client';
import { queryClient } from '@/services';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import { SetupProvider } from './setupProvider';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SetupProvider>{children}</SetupProvider>
        <ToastContainer />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
};
