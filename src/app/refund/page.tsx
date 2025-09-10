export default function RefundPolicy() {
  return (
    <main className="min-h-screen" style={{ background: 'rgba(15, 23, 42, 0.95)' }}>
      {/* Spacer for fixed header - extra space for mobile menu */}
      <div className="h-40 lg:h-32"></div>
      
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl font-serif font-bold text-[#CEC28D] mb-8 drop-shadow-lg">100% Satisfaction Guarantee & Refund Policy</h1>
        
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl border border-white/20 p-8 space-y-8">
          <p className="text-white/70 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#CEC28D] mb-4">Our Guarantee</h2>
            <p className="text-white/90 mb-4">At Sac Maids, we stand behind our work with a 100% satisfaction guarantee. If you&apos;re not completely satisfied with our cleaning service, we will:</p>
            <ul className="list-disc pl-6 mb-4 text-white/80 space-y-2">
              <li>Return to your home within 24 hours to re-clean any areas you&apos;re not happy with</li>
              <li>Offer a full refund if you&apos;re still not satisfied after our re-cleaning service</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#CEC28D] mb-4">How It Works</h2>
            <ol className="list-decimal pl-6 mb-4 text-white/80 space-y-2">
              <li>If you&apos;re not satisfied with any aspect of our service, notify us within 24 hours of service completion</li>
              <li>We&apos;ll schedule a re-clean of the areas in question at no additional charge</li>
              <li>If you&apos;re still not satisfied after the re-clean, we&apos;ll process a full refund</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#CEC28D] mb-4">Refund Process</h2>
            <p className="text-white/90 mb-4">Our refund process is simple and hassle-free:</p>
            <ul className="list-disc pl-6 mb-4 text-white/80 space-y-2">
              <li>Contact us within 24 hours of service completion</li>
              <li>Explain which areas need attention</li>
              <li>We&apos;ll process your refund within 3-5 business days</li>
              <li>Refunds are issued to the original payment method</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#CEC28D] mb-4">Cancellations</h2>
            <p className="text-white/90 mb-4">We understand plans change. Our cancellation policy is:</p>
            <ul className="list-disc pl-6 mb-4 text-white/80 space-y-2">
              <li>Full refund for cancellations 24+ hours before scheduled service</li>
              <li>50% refund for cancellations 12-24 hours before service</li>
              <li>No refund for cancellations less than 12 hours before service</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#CEC28D] mb-4">Contact Us</h2>
            <p className="text-white/90">For refunds or to report service issues:</p>
            <p className="text-white/90">Email: support@sacmaids.com</p>
            <p className="text-white/90">Phone: (916) 680-5200</p>
          </section>
        </div>
      </div>
    </main>
  );
}