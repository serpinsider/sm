export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen" style={{ background: 'rgba(15, 23, 42, 0.95)' }}>
      {/* Spacer for fixed header - extra space for mobile menu */}
      <div className="h-40 lg:h-32"></div>
      
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
        <h1 className="text-4xl font-serif font-bold text-[#CEC28D] mb-8 drop-shadow-lg">Privacy Policy</h1>
        
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl border border-white/20 p-8 space-y-8">
          <p className="text-white/70 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#CEC28D] mb-4">Information We Collect</h2>
            <p className="text-white/90 mb-4">We collect information you provide directly to us when you:</p>
            <ul className="list-disc pl-6 mb-4 text-white/80 space-y-2">
              <li>Request a quote</li>
              <li>Book a service</li>
              <li>Contact us</li>
              <li>Sign up for our newsletter</li>
            </ul>
            <p className="text-white/90 mb-4">This information may include:</p>
            <ul className="list-disc pl-6 mb-4 text-white/80 space-y-2">
              <li>Name and contact information</li>
              <li>Service address and access instructions</li>
              <li>Payment information</li>
              <li>Communication preferences</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#CEC28D] mb-4">How We Use Your Information</h2>
            <p className="text-white/90 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 mb-4 text-white/80 space-y-2">
              <li>Provide and improve our services</li>
              <li>Process your payments</li>
              <li>Send you service updates and reminders</li>
              <li>Respond to your requests and questions</li>
              <li>Send marketing communications (with your consent)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#CEC28D] mb-4">Information Sharing</h2>
            <p className="text-white/90 mb-4">We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-6 mb-4 text-white/80 space-y-2">
              <li>Service providers who assist in our operations</li>
              <li>Professional cleaners who perform your requested services</li>
              <li>Law enforcement when required by law</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#CEC28D] mb-4">Your Rights</h2>
            <p className="text-white/90 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 mb-4 text-white/80 space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-[#CEC28D] mb-4">Contact Us</h2>
            <p className="text-white/90">If you have questions about our privacy practices, please contact us at:</p>
            <p className="text-white/90">Email: privacy@santamonicamaids.com</p>
            <p className="text-white/90">Phone: (310) 555-0123</p>
          </section>
        </div>
      </div>
    </main>
  );
}