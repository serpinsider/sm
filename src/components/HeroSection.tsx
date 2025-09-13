'use client';

import StepWizard from './StepWizard';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useCallback } from 'react';

const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
  "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
  "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&h=80&fit=crop&crop=face&auto=format&q=80",
];

export default function HeroSection() {
  const [isFormExpanded, setIsFormExpanded] = useState(false);
  const [immediateTransition, setImmediateTransition] = useState(false);
  
  const handleFormExpand = useCallback((expanded: boolean, immediate: boolean = false) => {
    console.log("Form expansion status:", expanded, "Immediate:", immediate);
    setIsFormExpanded(expanded);
    setImmediateTransition(immediate);
    
    // Direct DOM manipulation for immediate effect
    const formContainer = document.getElementById('quote-form-container');
    if (formContainer) {
      if (expanded) {
        formContainer.classList.add('expand');
        console.log('Added expand class from handleFormExpand');
      } else {
        formContainer.classList.remove('expand');
        console.log('Removed expand class from handleFormExpand');
      }
    }
  }, []);

  return (
    <section className="relative pt-48 pb-32 lg:pt-64 lg:pb-48 overflow-hidden bg-gradient-to-br from-[#244042] to-[#1a2f31]">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        onError={(e) => console.error('Video failed to load:', e)}
        onLoadStart={() => console.log('Video loading started')}
        onCanPlay={() => console.log('Video can play')}
      >
        <source src="/hero-vid.mp4" type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        Your browser does not support the video tag.
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/60"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ease-out ${
          isFormExpanded 
            ? 'flex flex-col items-center justify-start pt-8' 
            : 'flex flex-col lg:flex-row gap-16 xl:gap-20 items-center'
        }`}>
          {/* Hero Content - Hide when form is expanded */}
          <div className={`flex-1 text-center lg:text-left transition-all duration-700 ease-out ${
            isFormExpanded 
              ? 'opacity-0 absolute invisible' 
              : 'opacity-100 relative visible'
          }`}>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#CEC28D] mb-6 drop-shadow-lg">
              Premium Santa Monica House Cleaners
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-100 mb-8 leading-relaxed drop-shadow-md">
              Schedule your cleaning appointment or receive a free estimate in under 60 seconds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link 
                href="#services"
                className="button-tertiary flex items-center justify-center h-12 px-8 font-semibold min-w-[160px]"
                scroll={true}
              >
                View Packages
              </Link>
              <button 
                onClick={() => handleFormExpand(true)}
                className="relative bg-white/15 hover:bg-white/25 border border-white/20 text-white transition-all duration-300 rounded-lg animate-glow flex items-center justify-center h-12 px-8 font-semibold min-w-[160px] gap-2"
                style={{
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.15)',
                }}
              >
                <span>Get Estimate</span>
                <svg 
                  className="w-4 h-4" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </button>
            </div>

            {/* Trust Badge */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-3">
              {/* Avatars */}
              <div className="flex">
                {avatars.map((avatar, index) => (
                  <Image
                    key={index}
                    src={avatar}
                    alt={`Customer ${index + 1}`}
                    width={32}
                    height={32}
                    className="w-8 h-8 rounded-full border border-white/20 object-cover -ml-1 first:ml-0"
                  />
                ))}
              </div>
              
              {/* Rating Container */}
              <div className="flex items-center gap-2">
                {/* Stars */}
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-[#968642]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                {/* Rating Text */}
                <div className="text-xs text-white drop-shadow-md whitespace-nowrap">
                  <span className="font-semibold">4.9/5</span> <span>(500+ customers)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step Wizard */}
          <div 
            id="quote-form-container"
            className={`quote-form-container 
              ${isFormExpanded 
                ? 'w-full lg:w-[800px] mx-auto expand' 
                : 'flex-shrink-0 lg:w-[500px] w-full'
              }`}
            style={{
              transition: immediateTransition ? "none" : "all 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
              transformOrigin: "center center"
            }}
          >
            <div 
              className="bg-white/20 backdrop-blur-md rounded-2xl shadow-xl border border-white/30 p-4 sm:p-8 relative w-full min-w-0 sm:min-w-[400px]"
            >
              <StepWizard onFormExpand={handleFormExpand} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}