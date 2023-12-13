import { Header } from '@/templates/layout';
import { ReactNode } from 'react';

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default HomeLayout;
