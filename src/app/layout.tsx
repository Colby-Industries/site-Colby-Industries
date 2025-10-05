import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://colby-industries.fr'),
  title: {
    default: 'Colby Industries — Performance énergétique industrielle',
    template: '%s | Colby Industries',
  },
  description:
    'Cabinet de conseil en performance énergétique industrielle : cartographie, IPMVP, ISO 50001, data & mesures, AMO.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: 'https://colby-industries.fr',
    siteName: 'Colby Industries',
    locale: 'fr_FR',
    title: 'Colby Industries — Performance énergétique industrielle',
    description: 'Conseil en efficacité énergétique industrielle et décarbonation pour sites industriels en France.',
    images: [
      {
        url: '/og-default.jpeg',
        width: 1200,
        height: 630,
        alt: 'Colby Industries',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Colby Industries — Performance énergétique industrielle',
    description: 'Conseil en efficacité énergétique industrielle et décarbonation pour sites industriels en France.',
    images: ['/og-default.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://plausible.io" />
        <script defer data-domain="colby-industries.fr" src="https://plausible.io/js/script.js" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Colby Industries',
              url: 'https://colby-industries.fr',
              logo: 'https://colby-industries.fr/icon1.png',
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
