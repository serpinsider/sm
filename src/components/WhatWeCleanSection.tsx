'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import StepWizard from './StepWizard';


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

const areas: CleaningArea[] = ['Bedrooms', 'Bathrooms', 'Common Areas', 'Kitchen'];

export default function WhatWeCleanSection() {
  const [activeTab, setActiveTab] = useState<CleaningArea>('Bedrooms');

  const addons = [
    { key: 'deepCleaning', label: 'Deep Clean', description: 'Thorough detailed cleaning', image: '/icons/addons/deep-cleaning.png', tooltip: "If your rooms, bathrooms and common areas need more care, select this option. We also wipe down doorframes, windows and baseboards in this package." },
    { key: 'moveInOut', label: 'Move In/Out Clean', description: 'Complete reset cleaning', image: '/icons/addons/move-in-out.png', tooltip: "If you&apos;re moving in/out of a place, we clean it from top to bottom, including door frames, windows, baseboards and inside all cabinets, resetting the place completely." },
    { key: 'organization', label: 'Organization', description: '30 minutes organizing', image: '/icons/addons/organization.png', tooltip: "30 minutes of organizing, moving, doing anything you want us to do, weight limits may apply." },
    { key: 'insideFridge', label: 'Fridge Cleaning', description: 'Inside fridge deep clean', image: '/icons/addons/inside-fridge.png', tooltip: "We clean inside your fridge and make it spotless again." },
    { key: 'insideOven', label: 'Oven Cleaning', description: 'Inside & outside oven', image: '/icons/addons/inside-oven.png', tooltip: "We clean the top and inside your oven." },
    { key: 'insideCabinets', label: 'Inside Cabinets', description: 'Cabinet interior cleaning', image: '/icons/addons/cabinets.png', tooltip: "We clean the insides of your cabinets for an hour, this is included in Move Out Cleans." },
    { key: 'interiorWindows', label: 'Inside Windows', description: 'Interior window cleaning', image: '/icons/addons/blinds.png', tooltip: "We wipe your windows on the inside, this is typically just 2 windows per addon." },
    { key: 'laundry', label: 'Laundry', description: '1-2 loads of laundry', image: '/icons/addons/laundry.png', tooltip: "We do one or two loads of laundry depending on how long we&apos;re able to stay at your place while cleaning." },
    { key: 'dishes', label: 'Dishes', description: 'Complete dish washing', image: '/icons/addons/dishes.png', tooltip: "We do all your dishes." },
    { key: 'stairs', label: 'Stairs', description: 'Thorough stair cleaning', image: '/icons/addons/stairs.png', tooltip: "We clean your stairs thoroughly." },
    { key: 'basementCleaning', label: 'Basement Cleaning', description: 'Full basement service', image: '/icons/addons/basement-cleaning.png', tooltip: "We clean your basement." },
    { key: 'petCleaning', label: 'Pet Cleaning', description: 'Pet hair removal', image: '/icons/addons/pet-cleaning.png', tooltip: "We do not charge this if your pet does not shed, select this if your pet sheds or need cleaning more than regular mess." }
  ];

  return (
    <section id="what-we-clean" className="py-20" style={{background: 'rgba(36, 64, 66, 0.95)'}}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#CEC28D] mb-4">
              What We Clean
          </h2>
                      <p className="text-sm sm:text-base text-white/70 max-w-3xl mx-auto">
              Discover exactly what&apos;s covered in every Santa Monica cleaning appointment.
            </p>
        </div>

        <div className="mb-8 flex justify-center">
          <div className="inline-flex border-b border-primary-button-bg">
            {areas.map((area) => (
              <button
                key={area}
                className={`px-2 md:px-4 py-2 text-sm md:text-base font-semibold ${
                  activeTab === area
                    ? 'text-white border-b-2 border-primary-button-bg'
                    : 'text-white/60 hover:text-white/80'
                }`}
                onClick={() => setActiveTab(area)}
              >
                {area}  
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto bg-[rgba(36,64,66,0.95)] backdrop-blur-md rounded-lg shadow-xl mb-20">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-2 sm:p-3 bg-[rgba(36,64,66,0.98)] border border-white/10 text-white w-2/5 text-left text-xs sm:text-sm">Cleaning Tasks</th>
                <th className="p-2 sm:p-3 bg-[rgba(36,64,66,0.98)] border border-white/10 text-white text-center text-xs sm:text-sm">Standard</th>
                <th className="p-2 sm:p-3 bg-[rgba(36,64,66,0.98)] border border-white/10 text-white text-center text-xs sm:text-sm">Deep</th>
                <th className="p-2 sm:p-3 bg-[rgba(36,64,66,0.98)] border border-white/10 text-white text-center text-xs sm:text-sm">Move-In</th>
              </tr>
            </thead>
            <tbody>
              {cleaningTasks[activeTab].map((task, index) => (
                <tr key={index} className={index % 2 === 0 
                  ? 'bg-white/[0.03]' 
                  : 'bg-white/[0.06]'
                }>
                  <td className="p-2 sm:p-3 border border-white/10 text-white text-xs sm:text-sm">{task.task}</td>
                  <td className="p-2 sm:p-3 border border-white/10 text-center">
                    {task.routine ? <span className="text-forest-green text-base sm:text-lg">✓</span> : <span className="text-red-400 text-base sm:text-lg">✗</span>}
                  </td>
                  <td className="p-2 sm:p-3 border border-white/10 text-center">
                    {task.deep ? <span className="text-forest-green text-base sm:text-lg">✓</span> : <span className="text-red-400 text-base sm:text-lg">✗</span>}
                  </td>
                  <td className="p-2 sm:p-3 border border-white/10 text-center">
                    {task.moveInOut === true ? <span className="text-forest-green text-base sm:text-lg">✓</span> : 
                     task.moveInOut === false ? <span className="text-red-400 text-base sm:text-lg">✗</span> : 
                     <span className="text-white/60 text-xs sm:text-sm">N/A</span>}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="max-w-5xl mx-auto mb-24">
          <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-4 text-center">
            Premium Add-On Options
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {addons.map(({ key, label, description, image }) => (
              <div 
                key={key}
                                  className="relative group bg-white/[0.06] backdrop-blur-md rounded-lg p-4 hover:bg-white/[0.09] transition-all text-center border border-white/10"
              >

                <div className="w-12 h-12 mx-auto mb-3">
                  <Image
                    src={image}
                    alt={label}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="text-sm font-semibold text-white mb-1">{label}</h4>
                <p className="text-xs text-white/80">{description}</p>

              </div>
            ))}
          </div>
        </div>

        {/* Ready to Book CTA */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#CEC28D] mb-4">
              Schedule Your Service
            </h2>
            <p className="text-white/70">
              Receive your personalized estimate and book your Santa Monica cleaning appointment.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8">
            <StepWizard />
          </div>
        </div>
      </div>
    </section>
  );
}