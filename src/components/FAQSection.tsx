'use client';

import { useState } from 'react';


export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "What are your Santa Monica cleaning rates?",
      answer: "Pricing varies based on your home's square footage, service frequency, and cleaning requirements. Routine maintenance begins at $89 for compact residences, with comprehensive deep cleans ranging $150-$300. Request your complimentary estimate online or by calling our team.",
    },
    {
      question: "Must I be present while you clean my home?",
      answer: "Absolutely not - most Santa Monica clients grant us property access and continue with their schedules. Our cleaning professionals undergo comprehensive background screenings and rigorous vetting for complete security and trust.",
    },
    {
      question: "What products and equipment do you provide?",
      answer: "We supply all required cleaning materials and professional-grade equipment. Our eco-conscious, non-toxic formulas ensure safety for children and pets throughout your Santa Monica home. Special product requests or allergy accommodations are always welcome.",
    },
    {
      question: "What's the duration for each cleaning appointment?",
      answer: "Service time depends on your property size and chosen package. Standard maintenance for 2-3 bedroom Santa Monica homes averages 2-3 hours, while thorough deep cleans require 4-6 hours. We'll confirm timing estimates during your booking process.",
    },
    {
      question: "How do routine and deep cleaning services differ?",
      answer: "Routine maintenance covers essential upkeep - dusting, vacuuming, mopping, plus bathroom and kitchen sanitization. Deep cleaning encompasses all standard tasks plus intensive detailing: baseboards, fixtures, appliance interiors, and comprehensive surface restoration throughout your Santa Monica residence.",
    },
    {
      question: "What's your rescheduling and cancellation policy?",
      answer: "Appointment changes are penalty-free with 24+ hours notice. Same-day modifications may incur fees. Reach our Santa Monica team at (310) 555-0123 or hello@santamonicamaids.com for any scheduling adjustments.",
    },
    {
      question: "How do you guarantee service quality and reliability?",
      answer: "Every Santa Monica cleaning professional completes extensive background verification and comprehensive skills training. We meticulously screen each team member to uphold our exceptional standards for dependability and expertise. Your property and possessions remain completely secure.",
    },
    {
      question: "What happens if I'm unsatisfied with the results?",
      answer: "Customer satisfaction drives everything we do. Contact us within 24 hours of any Santa Monica service, and we'll promptly return to address any concerns completely free of charge. We guarantee our work with complete confidence.",
    },
    {
      question: "Do you service condominiums and apartment complexes?",
      answer: "Certainly! We maintain all residential property types - condos, apartments, townhouses, and single-family homes throughout Santa Monica. Our flexible services accommodate every living space, from compact studios to expansive family residences.",
    },
    {
      question: "What's the optimal cleaning service frequency?",
      answer: "Santa Monica clients typically select weekly, bi-weekly, or monthly schedules based on household demands. Weekly suits active families perfectly, bi-weekly works for most lifestyles, while monthly serves well-maintained homes needing occasional professional attention.",
    },
    {
      question: "Which Santa Monica communities do you cover?",
      answer: "Our residential cleaning extends throughout Santa Monica, Venice, Brentwood, and Pacific Palisades. Contact our team to verify service availability in your specific neighborhood.",
    },
    {
      question: "Are single-visit cleaning appointments available?",
      answer: "Absolutely! We provide one-time services for special events, relocation cleanings, post-renovation cleanup, or whenever your Santa Monica home needs intensive attention. Recurring maintenance programs are also available for ongoing care.",
    }
  ];

  return (
    <section id="faq" className="py-20" style={{background: 'rgba(36, 64, 66, 0.95)'}}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#CEC28D] mb-4">
            Santa Monica Cleaning FAQ
          </h2>
                      <p className="text-sm sm:text-base text-white/70">
              Everything you need to know about our residential cleaning services.
            </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl border border-white/10">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-white/15 rounded-xl transition-colors"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <h3 className="text-base font-semibold text-white pr-4">
                  {faq.question}
                </h3>
                <svg
                  className={`w-5 h-5 text-white/70 transition-transform ${
                    openFAQ === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-6 pt-2">
                  <p className="text-sm text-white/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}