'use client';

import React from 'react';

interface CallOrTextBarProps {
  containerClass?: string;
  inline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Reusable component for displaying the CALL OR TEXT US AT bar
 * Used across the site to maintain consistent appearance
 */
const CallOrTextBar: React.FC<CallOrTextBarProps> = ({
  containerClass = "py-6 px-4 sm:px-6 max-w-4xl mx-auto",
  inline = false,
  size = 'md',
  className = ""
}) => {
  const phoneNumber = "(916) 680-5200";
  const phoneLink = "tel:+19166805200";

  // Determine container classes based on props
  const containerStyles = inline 
    ? `inline-flex ${containerClass} ${className}`
    : `w-full ${containerClass} ${className}`;

  // Size classes for responsive text
  const textSizeClasses = {
    sm: "text-[10px]",
    md: "text-[10px] sm:text-sm",
    lg: "text-xs md:text-base"
  };
  
  // Apply the chosen size
  const textSize = textSizeClasses[size];

  return (
    <div className="bg-[rgba(36,64,66,0.98)] backdrop-blur-sm w-full">
      <div className={`${containerStyles} call-text-cta flex items-center justify-center text-white flex-wrap gap-x-1`}>
        <svg className="w-4 h-4 text-white/90 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className={`text-white/90 mx-1 ${textSize}`}>CALL/TEXT</span>
        <a 
          href={phoneLink} 
          className={`font-bold text-white hover:text-white/80 transition-colors ${textSize}`}
        >
          {phoneNumber}
        </a>
        <span className={`text-white/50 mx-1 ${textSize}`}>OR</span>
        <a 
          href="/booking" 
          className={`font-semibold hover:text-white/80 transition-colors ${textSize}`}
        >
          BOOK ONLINE
        </a>
      </div>
    </div>
  );
};

export default CallOrTextBar;
