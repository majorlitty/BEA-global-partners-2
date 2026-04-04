import type { Metadata } from 'next';
import { Inter, Noto_Serif } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

const notoSerif = Noto_Serif({
  subsets: ['latin'],
  style: ['normal', 'italic'],
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
    <html lang="en" className={`${inter.variable} ${notoSerif.variable}`}>
      <body className="font-sans bg-surface text-primary antialiased selection:bg-tertiary-container selection:text-on-tertiary-container" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
