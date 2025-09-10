
import HeroSection from '@/components/HeroSection';
import CallOrTextBar from '@/components/CallOrTextBar';
import QuoteBar from '@/components/QuoteBar';
import ServicesSection from '@/components/ServicesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import WhatWeCleanSection from '@/components/WhatWeCleanSection';
import AreasWeServeSection from '@/components/AreasWeServeSection';
import ReviewsSection from '@/components/ReviewsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import ContactInfoSection from '@/components/ContactInfoSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <QuoteBar />
      <ServicesSection />
      <CallOrTextBar />
      <WhatWeCleanSection />
      <QuoteBar />
      <HowItWorksSection />
      <CallOrTextBar />
      <AreasWeServeSection />
      <QuoteBar />
      <ReviewsSection />
      <CallOrTextBar />
      <FAQSection />
      <QuoteBar />
      <ContactSection />
      <ContactInfoSection />
    </main>
  );
}
