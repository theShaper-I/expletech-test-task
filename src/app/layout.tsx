import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/assets/scss/global.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <div className='flex h-full min-h-screen flex-col flex-wrap overflow-x-clip'>
          <div className='w-full flex-1'>{children}</div>
        </div>
      </body>
    </html>
  );
}
