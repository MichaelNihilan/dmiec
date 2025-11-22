import React from 'react'

const MobileMenu = ({ showSection }) => {
  const closeMobileMenu = () => {
    const mobileMenu = document.querySelector('.mobile-menu')
    const overlay = document.querySelector('.mobile-overlay')
    const hamburger = document.querySelector('.hamburger')

    if (mobileMenu) mobileMenu.classList.remove('open')
    if (overlay) overlay.classList.add('hidden')
    if (hamburger) hamburger.classList.remove('active')
    document.body.style.overflow = ''
  }

  const handleNavClick = (section) => {
    showSection(section)
    closeMobileMenu()
  }

  return (
    <div className="mobile-menu md:hidden fixed inset-y-0 left-0 w-64 bg-white shadow-xl z-50">
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
            onClick={() => handleNavClick('home')}
          >
            Home
          </button>

          <button 
            className="nav-button bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-md text-sm font-medium text-gray-700 border border-gray-200 w-full text-left transition-colors duration-200"
            onClick={() => handleNavClick('campus')}
          >
            Campus
          </button>

          <button 
            className="nav-button bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-md text-sm font-medium text-gray-700 border border-gray-200 w-full text-left transition-colors duration-200"
            onClick={() => handleNavClick('achievements')}
          >
            Achievements
          </button>

          <button 
            className="nav-button bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-md text-sm font-medium text-gray-700 border border-gray-200 w-full text-left transition-colors duration-200"
            onClick={() => handleNavClick('alumni')}
          >
            Alumni
          </button>

          <button 
            className="nav-button bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-md text-sm font-medium text-gray-700 border border-gray-200 w-full text-left transition-colors duration-200"
            onClick={() => handleNavClick('programs')}
          >
            Programs
          </button>

          <button 
            className="nav-button bg-gray-100 hover:bg-gray-200 px-4 py-3 rounded-md text-sm font-medium text-gray-700 border border-gray-200 w-full text-left transition-colors duration-200"
            onClick={() => handleNavClick('contact')}
          >
            Admission
          </button>
        </nav>
      </div>
    </div>
  )
}

export default MobileMenu
