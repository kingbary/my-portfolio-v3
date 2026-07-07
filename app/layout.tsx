import type { Metadata } from 'next';
import { JetBrains_Mono, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Kingsley Akwa — Software Engineer',
  description:
    'Software engineer building fast, resilient web systems. TypeScript, Java, distributed systems, developer tooling.',
  openGraph: {
    title: 'Kingsley Akwa — Software Engineer',
    description: 'Building fast, resilient web systems.',
    url: 'https://kingsleyakwa.online',
    siteName: 'Kingsley Akwa',
    images: [
      {
        url: "https://kingsleyakwa.online/images/headshot.jpg",
        width: 1200,
        height: 630,
        alt: "Kingsley Akwa's headshot",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kingsley Akwa — Software Engineer',
    description: 'Building fast, resilient web systems.',
    images: ["https://kingsleyakwa.online/images/headshot.jpg"],
    site: "@kingsley_akwa",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
      <GoogleTagManager gtmId="GTM-KBJVNHNH" />
      <GoogleAnalytics gaId="G-FT31LXY8R2" />
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
