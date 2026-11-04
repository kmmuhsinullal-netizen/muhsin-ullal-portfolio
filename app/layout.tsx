import type { Metadata, Viewport } from 'next';
import './globals.css';

const siteUrl = 'https://muhsinullal.online';

export const metadata: Metadata = {
  title: 'Muhsin Ullal | Entrepreneur, Educator & Technology Advocate',
  description: 'Explore Muhsin Ullal’s work across entrepreneurship, education, career guidance, artificial intelligence, and technology-driven initiatives.',
  applicationName: 'Muhsin Ullal — Personal Portfolio',
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  alternates: siteUrl ? { canonical: '/' } : undefined,
  openGraph: {
    title: 'Muhsin Ullal | Entrepreneur, Educator & Technology Advocate',
    description: 'Building ideas, empowering people, and creating opportunities through education and technology.',
    type: 'website',
    images: [{ url: '/images/muhsin-ullal-hero.jpg', width: 1536, height: 1536, alt: 'Muhsin Ullal seated in an executive office' }],
  },
  twitter: { card: 'summary_large_image', title: 'Muhsin Ullal | Personal Portfolio', description: 'Building ideas. Empowering people. Shaping the future.', images: ['/images/muhsin-ullal-hero.jpg'] },
  icons: {\n    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],\n    shortcut: ['/favicon.svg'],\n    apple: [{ url: '/favicon.svg' }],\n  },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1, themeColor: '#090a0c' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
