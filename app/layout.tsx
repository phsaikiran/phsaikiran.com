import './globals.css';
import clsx from 'clsx';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Sidebar from './sidebar';

const kaisei = localFont({
  src: '../public/fonts/kaisei-tokumin-latin-700-normal.woff2',
  weight: '700',
  variable: '--font-kaisei',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Sai Prudhivi',
    template: '%s | Sai Prudhivi',
  },
  description: 'Developer, ML Enthusiast, and dedicated CS professional.',
};

export default function RootLayout({children,}: { children: React.ReactNode; }) {
  return (
    <html
      lang="en"
      className={clsx(
        'text-black bg-white dark:text-white dark:bg-[#111010]',
        kaisei.variable
      )}
    >
    <body className="antialiased max-w-4xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mt-32 lg:mx-auto">
    <Sidebar/>
    <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
      {children}
    </main>
    </body>
    </html>
  );
}
