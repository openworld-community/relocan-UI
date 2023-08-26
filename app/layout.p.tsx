import './globals.css';
import type { Metadata } from 'next';
import { PT_Sans } from 'next/font/google';

import GlobalStyles from '@/app/components/globalstyles';
import StyledProvider from './providers/StyledProvider';

const inter = PT_Sans({ weight: ['700', '400'], subsets: ['cyrillic'] });

export const metadata: Metadata = {
  title: 're:locan',
  description: 'Сервис для релокации и эмиграции',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <StyledProvider>
          <GlobalStyles />
            {children}
        </StyledProvider>
      </body>
    </html>
  );
}
