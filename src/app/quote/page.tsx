import { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Get Your Quote | Santa Monica Maids',
  description: 'Get an instant, accurate quote for professional house cleaning services. Fast, easy, and no obligations. Serving Santa Monica, California.',
  keywords: [
    'house cleaning quote',
    'maid service pricing',
    'cleaning cost estimate',
    'free quote',
    'cleaning service quote',
    'house cleaning estimate',
    'maid service quote',
    'cleaning pricing'
  ],
  openGraph: {
    title: 'Get Your Quote | Santa Monica Maids',
    description: 'Get an instant quote for your professional home cleaning service. Choose your cleaning type, customize your needs, and let Santa Monica Maids take care of the rest.',
    url: 'https://santamonicamaids.com/quote',
    siteName: 'Santa Monica Maids',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Get a Cleaning Quote',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://santamonicamaids.com/quote',
  },
};

export default function QuotePage() {
  return (
    <main className="min-h-screen bg-[#0f172a]">
      <QuoteForm />
    </main>
  );
}