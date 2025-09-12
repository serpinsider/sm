import { Metadata } from 'next';
import BookingEmbed from '@/components/BookingEmbed';

export const metadata: Metadata = {
  title: 'Book Your Cleaning - Santa Monica Maids',
  description: 'Schedule your professional cleaning service with Santa Monica Maids. Our easy booking system lets you customize your cleaning needs and find the perfect time slot for your schedule.',
  keywords: [
    'book cleaning service',
    'online cleaning booking',
    'schedule house cleaning',
    'maid service appointment',
    'instant cleaning quote',
    'book maid service online',
    'cleaning service booking',
    'same day cleaning booking',
  ],
  openGraph: {
    title: 'Book Your Cleaning - Santa Monica Maids',
    description: 'Book your professional home cleaning service in minutes. Choose your cleaning type, schedule your preferred date and time, and let Santa Monica Maids take care of the rest.',
    url: 'https://santamonicamaids.com/booking',
    siteName: 'Santa Monica Maids',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Book a Cleaning Service',
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
    canonical: 'https://santamonicamaids.com/booking',
  },
};

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-slate-900">
      <BookingEmbed />
    </main>
  );
}