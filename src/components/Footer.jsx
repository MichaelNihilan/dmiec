import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center mr-3">
                <img src="/images/DMI logo.png" alt="DMI Logo" />
              </div>
              <span className="text-xl font-bold">DMI Engineering College</span>
            </div>
            <h3 className="mb-4">Kumarapuram Road, Aralvaimozhi, Kanyakumari Dist - 629 301, Tamilnadu</h3>
            <p className="text-gray-400">
              Shaping tomorrow's leaders through excellence in education, research, and service.
            </p>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Quick Links</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Academics</a></li>
              <li><a href="#" className="hover:text-white">Admissions</a></li>
              <li><a href="#" className="hover:text-white">Research</a></li>
            </ul>
          </div>

          <div>
            <h5 className="font-semibold mb-4">Student Resources</h5>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Student Portal</a></li>
              <li><a href="#" className="hover:text-white">Library</a></li>
              <li><a href="#" className="hover:text-white">Career Services</a></li>
              <li><a href="#" className="hover:text-white">Campus Life</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 DMI Engineering College. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
