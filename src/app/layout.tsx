import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { AppProvider } from '@/providers/appProvider';
import { Header } from './components/layout';
import HeroBanner from './components/layout/HeroBanner/HerroBanner';
import Search from '@/templates/menus/components/search/Search';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

export const metadata: Metadata = {
  title: 'Burgers',
  description: 'burgers'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <AppProvider>
          <Header />
          <HeroBanner />
          <Search />
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
