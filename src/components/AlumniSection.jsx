import React from 'react'

const AlumniSection = ({ isActive }) => {
  return (
    <div id="alumni" className={`content-section ${isActive ? 'active' : ''}`}>
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-gray-800 mb-6">👥 Our Alumni Network</h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Join a global community of 75,000+ successful graduates making their mark across industries worldwide.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">JS</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">John Smith</h4>
          <p className="text-blue-600 font-semibold mb-2">CEO, Tech Innovations Inc.</p>
          <p className="text-gray-600 text-sm">
            "Excellence University gave me the foundation to build a billion-dollar company. The network and education are unmatched."
          </p>
          <div className="mt-4 text-sm text-gray-500">Class of 2010 • Computer Science</div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">MJ</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">Maria Johnson</h4>
          <p className="text-green-600 font-semibold mb-2">Chief Medical Officer, Global Health</p>
          <p className="text-gray-600 text-sm">
            "The research opportunities and mentorship I received here shaped my career in medical innovation and global health initiatives."
          </p>
          <div className="mt-4 text-sm text-gray-500">Class of 2008 • Biomedical Engineering</div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
          <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-white text-2xl font-bold">DL</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">David Lee</h4>
          <p className="text-orange-600 font-semibold mb-2">Award-winning Architect</p>
          <p className="text-gray-600 text-sm">
            "The creative environment and world-class faculty helped me develop the vision that led to designing iconic buildings worldwide."
          </p>
          <div className="mt-4 text-sm text-gray-500">Class of 2012 • Architecture</div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-blue-600 to-purple-700 p-8 rounded-xl text-white text-center">
        <h4 className="text-2xl font-bold mb-4">Join Our Alumni Network</h4>
        <p className="text-lg mb-6 opacity-90">
          Connect with graduates worldwide, access career opportunities, and give back to future generations.
        </p>
        <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Register as Alumni
        </button>
      </div>
    </div>
  )
}

export default AlumniSection
