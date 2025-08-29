import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { CursorProvider } from '@/components/cursor-context';
import { CursorToggle } from '@/components/ui/cursor-toggle';
import { DevKeyListener } from '@/components/ui/dev-key-listener';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Web Designer - Servicios de Desarrollo Web Profesional',
  description:
    'Creamos experiencias digitales memorables para marcas. Especialistas en desarrollo web, e-commerce y soluciones digitales personalizadas.',
  keywords:
    'desarrollo web, diseño web, e-commerce, landing pages, barcelona, españa',
  authors: [{ name: 'Web Designer' }],
  openGraph: {
    title: 'Web Designer - Servicios de Desarrollo Web Profesional',
    description: 'Creamos experiencias digitales memorables para marcas.',
    type: 'website',
    locale: 'es_ES',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CursorProvider hoverScale={1.5} enabled={true}>
            <DevKeyListener />
            <CustomCursor />
            {children}
          </CursorProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
