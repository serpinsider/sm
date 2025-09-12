'use client';

import StepWizard from './StepWizard';

const serviceAreas = [
  'Santa Monica', 'Venice', 'Brentwood', 'Pacific Palisades', 'Marina del Rey'
];

export default function AreasWeServeSection() {

  return (
    <section id="areas" className="py-20" style={{background: 'rgba(15, 23, 42, 0.95)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#CEC28D] mb-4">
            Santa Monica Service Locations
          </h2>
                      <p className="text-sm sm:text-base text-white/70 max-w-3xl mx-auto mb-8">
              Expert residential cleaning available across the greater Santa Monica and Westside areas.
            </p>
          
          {/* Service Areas Summary */}
          <div className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {serviceAreas.map((area) => (
                <div
                  key={area}
                  className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-4 text-center hover:bg-white/10 transition-all group"
                >
                  <div className="text-white font-medium text-sm group-hover:text-white transition-colors">
                    {area}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quote Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-xl border border-white/30 p-8">
            <StepWizard />
          </div>
        </div>
      </div>
    </section>
  );
}