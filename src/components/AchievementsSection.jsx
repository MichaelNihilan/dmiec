import React, { useEffect, useState, useCallback } from 'react'

const AchievementsSection = ({ isActive }) => {
  const [currentSlide1, setCurrentSlide1] = useState(0)
  const [currentSlide2, setCurrentSlide2] = useState(0)

  const achievementImages1 = [
    "/images/Achievements/set1/ach1.jpg",
    "/images/Achievements/set1/ach2.jpg"
  ]

  const achievementImages2 = [
    "/images/Achievements/set2/ach1.jpg",
    "/images/Achievements/set2/ach2.jpg",
    "/images/Achievements/set2/ach3.jpg",
    "/images/Achievements/set2/ach4.jpg",
    "/images/Achievements/set2/ach5.jpg",
    "/images/Achievements/set2/ach6.png"
  ]

  const nextSlide1 = useCallback(() => {
    setCurrentSlide1((prev) => (prev + 1) % achievementImages1.length)
  }, [achievementImages1.length])

  const nextSlide2 = useCallback(() => {
    setCurrentSlide2((prev) => (prev + 1) % achievementImages2.length)
  }, [achievementImages2.length])

  useEffect(() => {
    if (!isActive) return

    const interval1 = setInterval(nextSlide1, 4000)
    const interval2 = setInterval(nextSlide2, 4000)

    return () => {
      clearInterval(interval1)
      clearInterval(interval2)
    }
  }, [isActive, nextSlide1, nextSlide2])

  return (
    <div id="achievements" className={`content-section ${isActive ? 'active' : ''}`}>
      <section>
        <div className="text-center mb-8">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            🏆 Our Achievements
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrating excellence in education, research, and student success.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* 16:9 Poster Slide */}
            <div className="lg:col-span-2 slide-container">
              <div id="achievement-slides-container1" className="poster-16-9 poster-content relative">
                {achievementImages1.map((src, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                      index === currentSlide1 ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img 
                      src={src} 
                      alt={`Achievement ${index + 1}`} 
                      className="w-full h-full object-cover rounded-2xl" 
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* 3:4 Poster Slide */}
            <div className="lg:col-span-1 slide-container">
              <div className="max-w-xs mx-auto lg:max-w-none">
                <div id="achievement-slides-container2" className="poster-3-4 poster-content relative">
                  {achievementImages2.map((src, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                        index === currentSlide2 ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img 
                        src={src} 
                        alt={`Achievement ${index + 1}`} 
                        className="w-full h-full object-cover rounded-2xl" 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AchievementsSection
