import type { Metadata } from 'next';
import { Raleway, Lusitana } from 'next/font/google';
import './globals.css';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-sans',
});

const lusitana = Lusitana({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'BEA Global Partners | Strategic Advisory Excellence',
  description: 'Navigating the Complexity of Global Markets.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${raleway.variable} ${lusitana.variable}`}>
      <body className="font-sans bg-surface text-primary antialiased selection:bg-tertiary-container selection:text-on-tertiary-container" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
