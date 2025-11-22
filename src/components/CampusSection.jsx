import React from 'react'

const CampusSection = ({ isActive }) => {
  return (
    <div id="campus" className={`content-section py-16 ${isActive ? 'active' : ''}`}>
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Desktop Video Container (16:9) */}
            <div className="hidden md:block relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl video-container-desktop">
              <video 
                id="videoPlayerDesktop" 
                autoPlay 
                muted 
                loop 
                playsInline
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                controls
              >
                <source src="/images/videos/clg Campus.MP4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Mobile Video Container (9:16) */}
            <div className="md:hidden relative bg-gray-900 rounded-lg overflow-hidden shadow-2xl video-container-mobile">
              <video 
                id="videoPlayerMobile" 
                autoPlay 
                muted 
                loop 
                playsInline
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
                controls
              >
                <source src="/images/videos/clg Campus.MP4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CampusSection
