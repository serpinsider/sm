'use client'

import { useEffect } from 'react'

export default function BookingEmbed() {
  useEffect(() => {
    // Load the external script
    const script = document.createElement('script')
    script.src = 'https://brooklynmaids.bookingkoala.com/resources/embed.js'
    script.defer = true
    document.body.appendChild(script)

    return () => {
      // Cleanup on unmount
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="w-full max-w-7xl mx-auto px-4 pt-48 pb-12">
      <iframe 
        src="https://brooklynmaids.bookingkoala.com/booknow?embed=true" 
        className="w-full border-none h-[1000px]"
        scrolling="no"
        title="Book Your Cleaning Service"
      />
    </div>
  )
}
