import React, { useState } from 'react'

const Header = ({ showSection, currentSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    // Prevent body scroll when menu is open
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : ''
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      <header className="bg-white shadow-lg">
        <div className="flex justify-between items-center py-1 relative">
          <div>
            <div className="flex items-center mx-auto logo-title">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mr-3">
                <img src="/images/DMI logo.png" className="w-full h-full object-contain" alt="DMI Logo" />
              </div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 text-center">
                DMI Engineering College
              </h1>

              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-3">
                <img src="/images/AICTE_LOGO.jpeg" className="w-full h-full object-contain" alt="AICTE Logo" />
              </div>

              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mr-3">
                <img src="/images/NAAC.jpeg" className="w-full h-full object-contain" alt="NAAC Logo" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className={`absolute right-4 md:hidden hamburger flex flex-col justify-center items-center w-8 h-8 transform -translate-y-11 z-50 ${isMobileMenuOpen ? 'active' : ''}`}
              onClick={toggleMobileMenu}
            >
              <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
              <span className="block w-6 h-0.5 bg-gray-800 mb-1"></span>
              <span className="block w-6 h-0.5 bg-gray-800"></span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-end space-x-2 transform -translate-y-0 z-50">
            <a href="https://maps.app.goo.gl/JRCfEmoSsTmdUXbh8" target="_blank" rel="noopener noreferrer">
              <button className="nav-button bg-gray-100 hover:bg-yellow-500 px-2 py-0.5 rounded-md text-xs font-medium text-gray-700 border border-gray-200 transition-all duration-300 transform hover:-translate-y-1">
                <span className="material-symbols-outlined" style={{ verticalAlign: 'middle', fontSize: '15px' }}>
                  location_searching
                </span> Location
              </button>
            </a>
            
            <button 
              className={`nav-button bg-gray-100 hover:bg-yellow-500 px-2 py-0.5 rounded-md text-xs font-medium text-gray-700 border border-gray-200 transition-all duration-300 transform hover:-translate-y-1 ${currentSection === 'home' ? 'bg-yellow-500' : ''}`}
              onClick={() => showSection('home')}
            >
              Home
            </button>
            
            <button 
              className={`nav-button bg-gray-100 hover:bg-yellow-500 px-2 py-0.5 rounded-md text-xs font-medium text-gray-700 border border-gray-200 transition-all duration-300 transform hover:-translate-y-1 ${currentSection === 'campus' ? 'bg-yellow-500' : ''}`}
              onClick={() => showSection('campus')}
            >
              Campus
            </button>
            
            <button 
              className={`nav-button bg-gray-100 hover:bg-yellow-500 px-2 py-0.5 rounded-md text-xs font-medium text-gray-700 border border-gray-200 transition-all duration-300 transform hover:-translate-y-1 ${currentSection === 'achievements' ? 'bg-yellow-500' : ''}`}
              onClick={() => showSection('achievements')}
            >
              Achievements
            </button>
            
            <button 
              className={`nav-button bg-gray-100 hover:bg-yellow-500 px-2 py-0.5 rounded-md text-xs font-medium text-gray-700 border border-gray-200 transition-all duration-300 transform hover:-translate-y-1 ${currentSection === 'alumni' ? 'bg-yellow-500' : ''}`}
              onClick={() => showSection('alumni')}
            >
              Alumni
            </button>
            
            <button 
              className={`nav-button bg-gray-100 hover:bg-yellow-500 px-2 py-0.5 rounded-md text-xs font-medium text-gray-700 border border-gray-200 transition-all duration-300 transform hover:-translate-y-1 ${currentSection === 'programs' ? 'bg-yellow-500' : ''}`}
              onClick={() => showSection('programs')}
            >
              Programs
            </button>
            
            <button 
              className={`nav-button bg-gray-100 hover:bg-yellow-500 px-2 py-0.5 rounded-md text-xs font-medium text-gray-700 border border-gray-200 transition-all duration-300 transform hover:-translate-y-1 ${currentSection === 'contact' ? 'bg-yellow-500' : ''}`}
              onClick={() => showSection('contact')}
            >
              Admission
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`mobile-overlay md:hidden fixed inset-0 bg-black bg-opacity-50 z-40 ${isMobileMenuOpen ? '' : 'hidden'}`}
        onClick={closeMobileMenu}
      ></div>

      {/* Mobile Menu */}
      <div className={`mobile-menu md:hidden fixed inset-y-0 left-0 w-64 bg-white shadow-xl z-50 ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Menu</h2>
            <button onClick={closeMobileMenu} className="text-gray-500 hover:text-gray-700">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <nav className="space-y-2">
            <a href="https://maps.app.goo.gl/JRCfEmoSsTmdUXbh8" target="_blank" rel="noopener noreferrer">
              <button className="nav-button bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-md text-sm font-medium text-gray-700 border border-gray-200 flex items-center w-full transition-colors duration-200">
                <span className="material-symbols-outlined mr-2" style={{ fontSize: '18px' }}>location_searching</span>
                Location
              </button>
            </a>

            <button 
              className="nav-button bg-gray-100 hover:bg-yellow-500 hover:text-white px-4 py-3 rounded-md text-sm font-medium text-gray-700 border border-gray-200 w-full text-left transition-all duration-300"
              onClick={() => {
                showSection('home')
                closeMobileMenu()
              }}
            >
              Home
            </button>

            <button 
              className="nav-button bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-md text-sm font-medium text-gray-700 border border-gray-200 w-full text-left transition-colors duration-200"
              onClick={() => {
                showSection('campus')
                closeMobileMenu()
              }}
            >
              Campus
            </button>

            <button 
              className="nav-button bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-md text-sm font-medium text-gray-700 border border-gray-200 w-full text-left transition-colors duration-200"
              onClick={() => {
                showSection('achievements')
                closeMobileMenu()
              }}
            >
              Achievements
            </button>

            <button 
              className="nav-button bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-md text-sm font-medium text-gray-700 border border-gray-200 w-full text-left transition-colors duration-200"
              onClick={() => {
                showSection('alumni')
                closeMobileMenu()
              }}
            >
              Alumni
            </button>

            <button 
              className="nav-button bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-md text-sm font-medium text-gray-700 border border-gray-200 w-full text-left transition-colors duration-200"
              onClick={() => {
                showSection('programs')
                closeMobileMenu()
              }}
            >
              Programs
            </button>

            <button 
              className="nav-button bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-md text-sm font-medium text-gray-700 border border-gray-200 w-full text-left transition-colors duration-200"
              onClick={() => {
                showSection('contact')
                closeMobileMenu()
              }}
            >
              Admission
            </button>
          </nav>
        </div>
      </div>
    </>
  )
}

export default Header
