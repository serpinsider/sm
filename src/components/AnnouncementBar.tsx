'use client';

import { useState, useEffect } from 'react';


const AnnouncementBar = () => {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const messages = [
    'Save 10% on your first 3 bookings!',
    "Serving all of Sacramento!",
    "Ask about recurring plans!"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        setAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <>
      <div className="bg-[#968642] text-white px-4 py-2 fixed w-full top-0 border-b border-[#968642]/20 z-[60]">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto flex items-center justify-center h-8">
            <div className={`transition-opacity duration-500 ${animating ? 'opacity-0' : 'opacity-100'}`}>
              <span className="text-xs sm:text-sm font-medium text-white leading-none">
                {messages[currentMessageIndex]}
              </span>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default AnnouncementBar;
