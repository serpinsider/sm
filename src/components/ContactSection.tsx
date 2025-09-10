import StepWizard from './StepWizard';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20" style={{background: 'rgba(15, 23, 42, 0.9)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#CEC28D] mb-4">
            Ready to Get Started?
          </h2>
                      <p className="text-sm sm:text-base text-white/70 max-w-3xl mx-auto">
              Get your instant quote and book your cleaning service today.
            </p>
        </div>

        {/* Quote Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/10 p-8">
            <StepWizard />
          </div>
        </div>


      </div>
    </section>
  );
}