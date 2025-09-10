export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Get a Quote or Book Online",
      description: "Fill out our quick form or book directly online for instant scheduling.",
    },
    {
      number: "2", 
      title: "We Show Up and Clean",
      description: "Our professional team arrives and transforms your home to sparkling clean.",
    },
    {
      number: "3",
      title: "You Pay When We're Done",
      description: "Simple payment after you're completely satisfied with our service.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20" style={{background: 'rgba(15, 23, 42, 0.9)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#CEC28D] mb-4">
            How It Works
          </h2>
                      <p className="text-sm sm:text-base text-white/70 max-w-2xl mx-auto">
              Book your cleaning service in three easy steps.
            </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-[#968642] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                {step.number}
              </div>
              
              <h3 className="text-lg md:text-xl font-serif font-bold text-white mb-3">
                {step.title}
              </h3>
              
              <p className="text-sm sm:text-base text-white/80">
                {step.description}
              </p>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}