import Link from 'next/link';

type CleaningArea = 'Kitchen' | 'Bathrooms' | 'Bedrooms' | 'Common Areas';

const cleaningTasks: Record<CleaningArea, Array<{
  task: string;
  routine: boolean;
  deep: boolean;
  moveInOut: boolean | string;
}>> = {
  Kitchen: [
    { task: 'Remove cobwebs', routine: true, deep: true, moveInOut: true },
    { task: 'Dust light fixtures', routine: true, deep: true, moveInOut: true },
    { task: 'Dust windowsills & window frames', routine: true, deep: true, moveInOut: true },
    { task: 'Dust & tidy decor & personal items', routine: true, deep: true, moveInOut: true },
    { task: 'Dust ceiling fans', routine: true, deep: true, moveInOut: true },
    { task: 'Dust furniture, lamps & lampshades', routine: true, deep: true, moveInOut: true },
    { task: 'Tidy area(s), fold blankets, arrange pillows, etc.', routine: true, deep: true, moveInOut: true },
    { task: 'Clean all mirrors', routine: true, deep: true, moveInOut: true },
    { task: 'Clean all light switches & doorknobs', routine: true, deep: true, moveInOut: true },
    { task: 'Vacuum / sweep / mop floors', routine: true, deep: true, moveInOut: true },
    { task: 'Empty garbage and replace the bag', routine: true, deep: true, moveInOut: true },
    { task: 'Wipe down doors and door frames', routine: false, deep: true, moveInOut: true },
    { task: 'Wipe down windowsills and window frames', routine: false, deep: true, moveInOut: true },
    { task: 'Wipe down baseboards', routine: false, deep: true, moveInOut: true },
    { task: 'Clean inside cabinets & drawers', routine: false, deep: false, moveInOut: true },
  ],
  Bathrooms: [
    { task: 'Remove cobwebs', routine: true, deep: true, moveInOut: true },
    { task: 'Dust light fixtures and shelves', routine: true, deep: true, moveInOut: true },
    { task: 'Dust doors, windowsills & window frames', routine: true, deep: true, moveInOut: true },
    { task: 'Dust & tidy personal items & hand towels', routine: true, deep: true, moveInOut: true },
    { task: 'Clean & dry shower/tub', routine: true, deep: true, moveInOut: true },
    { task: 'Clean & dry sink, countertops, & soap dish', routine: true, deep: true, moveInOut: true },
    { task: 'Clean all mirrors & glass', routine: true, deep: true, moveInOut: true },
    { task: 'Polish towel racks, toilet paper holder', routine: true, deep: true, moveInOut: true },
    { task: 'Clean inside, outside & around toilet', routine: true, deep: true, moveInOut: true },
    { task: 'Clean all light switches & doorknobs', routine: true, deep: true, moveInOut: true },
    { task: 'Wipe down & disinfect cabinets', routine: true, deep: true, moveInOut: true },
    { task: 'Vacuum / sweep / mop floors', routine: true, deep: true, moveInOut: true },
    { task: 'Empty garbage and replace bag', routine: true, deep: true, moveInOut: true },
    { task: 'Wipe down doors & door frames', routine: false, deep: true, moveInOut: true },
    { task: 'Scrub tile grout in shower', routine: false, deep: true, moveInOut: true },
    { task: 'Dust & wipe down baseboards', routine: false, deep: true, moveInOut: true },
    { task: 'Wipe down windowsills & window frames', routine: false, deep: true, moveInOut: true },
    { task: 'Wipe down inside of linen closet & shelves', routine: false, deep: false, moveInOut: true },
    { task: 'Wipe down inside all cabinets & drawers', routine: false, deep: false, moveInOut: true },
  ],
  Bedrooms: [
    { task: 'Remove cobwebs', routine: true, deep: true, moveInOut: true },
    { task: 'Dust light fixtures', routine: true, deep: true, moveInOut: true },
    { task: 'Dust windowsills & window frames', routine: true, deep: true, moveInOut: true },
    { task: 'Dust & tidy decor & personal items', routine: true, deep: true, moveInOut: true },
    { task: 'Dust ceiling fans', routine: true, deep: true, moveInOut: true },
    { task: 'Dust furniture, lamps & lampshades', routine: true, deep: true, moveInOut: true },
    { task: 'Tidy area(s), fold blankets, arrange pillows, etc.', routine: true, deep: true, moveInOut: true },
    { task: 'Clean all mirrors', routine: true, deep: true, moveInOut: true },
    { task: 'Clean all light switches & doorknobs', routine: true, deep: true, moveInOut: true },
    { task: 'Make bed(s) & change sheets (if left out on edge of bed)', routine: true, deep: true, moveInOut: true },
    { task: 'Vacuum / sweep / mop floors', routine: true, deep: true, moveInOut: true },
    { task: 'Empty garbage and replace the bag', routine: true, deep: true, moveInOut: true },
    { task: 'Wipe down doors and door frames', routine: false, deep: true, moveInOut: true },
    { task: 'Wipe down windowsills and window frames', routine: false, deep: true, moveInOut: true },
    { task: 'Wipe down baseboards', routine: false, deep: true, moveInOut: true },
    { task: 'Clean inside closets & wipe down shelves', routine: false, deep: false, moveInOut: true },
  ],
  'Common Areas': [
    { task: 'Remove cobwebs', routine: true, deep: true, moveInOut: true },
    { task: 'Dust light fixtures', routine: true, deep: true, moveInOut: true },
    { task: 'Dust windowsills & window frames', routine: true, deep: true, moveInOut: true },
    { task: 'Dust & tidy decor & personal items', routine: true, deep: true, moveInOut: true },
    { task: 'Dust ceiling fans', routine: true, deep: true, moveInOut: true },
    { task: 'Dust furniture, lamps & lampshades', routine: true, deep: true, moveInOut: true },
    { task: 'Tidy area(s), fold blankets, arrange pillows, etc.', routine: true, deep: true, moveInOut: true },
    { task: 'Clean all mirrors', routine: true, deep: true, moveInOut: true },
    { task: 'Clean all light switches & doorknobs', routine: true, deep: true, moveInOut: true },
    { task: 'Vacuum / sweep / mop floors', routine: true, deep: true, moveInOut: true },
    { task: 'Empty garbage and replace the bag', routine: true, deep: true, moveInOut: true },
    { task: 'Wipe down doors and door frames', routine: false, deep: true, moveInOut: true },
    { task: 'Wipe down windowsills and window frames', routine: false, deep: true, moveInOut: true },
    { task: 'Wipe down baseboards', routine: false, deep: true, moveInOut: true },
    { task: 'Clean inside cabinets & drawers', routine: false, deep: false, moveInOut: true },
  ]
};

// Calculate task counts
const getAllTasks = () => {
  return Object.values(cleaningTasks).flat();
};

const getTaskCounts = () => {
  const allTasks = getAllTasks();
  
  const routineTasks = allTasks.filter(task => task.routine).length;
  const deepTasks = allTasks.filter(task => task.deep).length;
  const moveInOutTasks = allTasks.filter(task => task.moveInOut === true).length;
  
  return {
    routine: routineTasks,
    deep: deepTasks,
    moveInOut: moveInOutTasks
  };
};

const taskCounts = getTaskCounts();

export default function ServicesSection() {

  const services = [
    {
      id: 'standard',
      title: "Standard Clean",
      description: "Weekly or bi-weekly maintenance for busy households.",
      features: [
        `${taskCounts.routine} detailed tasks`,
        "Core living spaces included",
        "Flexible scheduling options"
      ],
      price: "$92.00",
      priceNote: "/visit",
      buttonText: "Book now",
      badgeText: "",
      badgeColor: ""
    },
    {
      id: 'deep',
      title: "Deep Clean", 
      description: "Comprehensive service with meticulous attention to detail.",
      features: [
        `${taskCounts.deep} thorough tasks`,
        "Baseboards & trim included",
        "Extended service duration"
      ],
      price: "$318.00",
      priceNote: "/visit",
      buttonText: "Book now",
      badgeText: "Popular", 
      badgeColor: "bg-sm-button-light"
    },
    {
      id: 'moveout',
      title: "Move Out Clean",
      description: "Total property refresh including interior storage spaces.",
      features: [
        `${taskCounts.moveInOut} comprehensive tasks`,
        "Cabinet & drawer interiors",
        "Full property restoration"
      ],
      price: "$140.00",
      priceNote: "/visit", 
      buttonText: "Book now",
      badgeText: "",
      badgeColor: ""
    }
  ];



  return (
    <>
      <section id="services" className="py-20" style={{background: 'rgba(36, 64, 66, 0.9)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#CEC28D] mb-4">
              Our Services
            </h2>
            <p className="text-sm sm:text-base text-white/70 max-w-3xl mx-auto">
              Select the ideal residential cleaning solution tailored for your lifestyle.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service) => (
              <div key={service.id} className="bg-[rgba(36,64,66,0.95)] backdrop-blur-md rounded-xl shadow-xl border border-white/10 p-8 hover:bg-[rgba(36,64,66,0.98)] hover:shadow-2xl hover:shadow-black/30 transition-all relative flex flex-col h-full">

                
                <div className="text-center mb-6 flex-grow pt-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold text-[#CEC28D] mb-6 drop-shadow-lg">
                    {service.title}
                  </h3>
                  <p className="text-white/90 text-sm leading-relaxed drop-shadow-md mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm sm:text-base text-white/90">
                      <svg className="w-3.5 h-3.5 text-sm-button-light mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="mt-auto">

                  <div className="space-y-3">
                    <Link
                      href="#what-we-clean"
                      className="button-tertiary w-full"
                    >
                      View Details
                    </Link>
                    <Link
                      href="/quote"
                      className="button-quaternary w-full"
                    >
                      Get Pricing
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>
    </>
  );
}