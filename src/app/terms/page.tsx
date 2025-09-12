export default function TermsOfService() {
  return (
    <main className="min-h-screen" style={{ background: 'rgba(36, 64, 66, 0.95)' }}>
      {/* Spacer for fixed header - extra space for mobile menu */}
      <div className="h-40 lg:h-32"></div>
      
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl font-serif font-bold text-[#CEC28D] mb-8 drop-shadow-lg">Terms of Service</h1>
        
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl border border-white/20 p-8 space-y-8">
          <p className="text-white/70 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#CEC28D] mb-4">Service Agreement</h2>
            <p className="text-white/90 mb-4">By booking our services, you agree to:</p>
            <ul className="list-disc pl-6 mb-4 text-white/80 space-y-2">
              <li>Provide accurate information about your cleaning needs</li>
              <li>Grant access to your property at the scheduled time</li>
              <li>Pay for services as agreed</li>
              <li>Communicate any special requirements or concerns</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#CEC28D] mb-4">Our Commitment</h2>
            <p className="text-white/90 mb-4">We commit to:</p>
            <ul className="list-disc pl-6 mb-4 text-white/80 space-y-2">
              <li>Arrive within the scheduled time window</li>
              <li>Provide professional cleaning services</li>
              <li>Use quality cleaning products and equipment</li>
              <li>Respect your property and privacy</li>
              <li>Carry appropriate insurance coverage</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#CEC28D] mb-4">Service Limitations</h2>
            <p className="text-white/90 mb-4">Our services do not include:</p>
            <ul className="list-disc pl-6 mb-4 text-white/80 space-y-2">
              <li>Moving heavy furniture</li>
              <li>Cleaning biohazardous materials</li>
              <li>Exterior window cleaning</li>
              <li>Pest control services</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#CEC28D] mb-4">Liability</h2>
            <p className="text-white/90 mb-4">While we take utmost care:</p>
            <ul className="list-disc pl-6 mb-4 text-white/80 space-y-2">
              <li>Report any damages within 24 hours of service</li>
              <li>We&apos;re insured for accidental damages</li>
              <li>We&apos;re not liable for pre-existing conditions</li>
              <li>Claims must be reported promptly for investigation</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#CEC28D] mb-4">Service Area</h2>
            <p className="text-white/90 mb-4">We currently serve:</p>
            <ul className="list-disc pl-6 mb-4 text-white/80 space-y-2">
              <li>Santa Monica</li>
              <li>Roseville</li>
              <li>Elk Grove</li>
              <li>Folsom</li>
              <li>Davis</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#CEC28D] mb-4">Contact Us</h2>
            <p className="text-white/90">For questions about these terms:</p>
            <p className="text-white/90">Email: support@smmaids.com</p>
            <p className="text-white/90">Phone: (310) 555-0123</p>
          </section>
        </div>
      </div>
    </main>
  );
}