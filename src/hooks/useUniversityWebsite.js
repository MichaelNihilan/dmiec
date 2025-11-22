import { useState, useEffect, useCallback } from 'react'

const useUniversityWebsite = () => {
  const [currentSection, setCurrentSection] = useState('home')

  const showSection = useCallback((sectionId) => {
    setCurrentSection(sectionId)
    
    // Scroll to top smoothly
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        const mobileMenu = document.querySelector('.mobile-menu')
        const overlay = document.querySelector('.mobile-overlay')
        const hamburger = document.querySelector('.hamburger')
        
        if (mobileMenu) mobileMenu.classList.remove('open')
        if (overlay) overlay.classList.add('hidden')
        if (hamburger) hamburger.classList.remove('active')
        document.body.style.overflow = ''
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return {
    currentSection,
    showSection
  }
}

export default useUniversityWebsite
