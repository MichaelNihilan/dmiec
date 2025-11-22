import React, { useEffect } from 'react'
import emailjs from '@emailjs/browser'
// Remove this line: import './App.css'
import Header from './components/Header.jsx'
import HomeSection from './components/HomeSection.jsx'
import CampusSection from './components/CampusSection.jsx'
import AchievementsSection from './components/AchievementsSection.jsx'
import AlumniSection from './components/AlumniSection.jsx'
import ProgramsSection from './components/ProgramsSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'
import useUniversityWebsite from './hooks/useUniversityWebsite.js'

function App() {
  const { currentSection, showSection } = useUniversityWebsite()

  useEffect(() => {
    emailjs.init('FqPkpZHNcHID3XXMn')
  }, [])

  return (
    <div className="bg-gradient-to-b from-blue-50 to-indigo-100 min-h-screen">
      <Header showSection={showSection} currentSection={currentSection} />
      
      <main className="py-20 px-3 min-h-screen">
        <div className="container mx-auto">
          <HomeSection isActive={currentSection === 'home'} />
          <CampusSection isActive={currentSection === 'campus'} />
          <AchievementsSection isActive={currentSection === 'achievements'} />
          <AlumniSection isActive={currentSection === 'alumni'} />
          <ProgramsSection isActive={currentSection === 'programs'} />
          <ContactSection isActive={currentSection === 'contact'} />
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
