import React from 'react'

const HomeSection = ({ isActive }) => {
  return (
    <div id="home" className={`content-section ${isActive ? 'active' : ''}`}>
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-gray-800 mb-6">Welcome to Our University</h3>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
          DMI Engineering College has been a beacon of higher education for over 75 years. We pride ourselves on academic excellence, 
          innovative research, and preparing students for successful careers in an ever-changing world.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🎓</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">25,000+ Students</h4>
          <p className="text-gray-600">Diverse student body from around the world</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">👨‍🏫</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">500+ Faculty</h4>
          <p className="text-gray-600">World-renowned professors and researchers</p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🏆</span>
          </div>
          <h4 className="text-xl font-bold text-gray-800 mb-2">Top 5 Ranking</h4>
          <p className="text-gray-600">Nationally recognized for excellence</p>
        </div>
      </div>

      {/* About */}
      <div className="mb-12">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">About DMI Engineering College</h3>
        <p className="text-gray-700 mb-4">
          Founded in 1985, Excellence University has been at the forefront of higher education, research, and innovation. 
          Our commitment to academic excellence and student success has made us one of the premier institutions in the region.
        </p>
        <p className="text-gray-700 mb-6">
          With over 15,000 students and 800 faculty members, we offer a diverse range of undergraduate, graduate, 
          and doctoral programs across multiple disciplines.
        </p>
        
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-blue-600">1500</div>
            <div className="text-sm text-gray-600">Students</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-green-600">80+</div>
            <div className="text-sm text-gray-600">Faculty</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-purple-600">50+</div>
            <div className="text-sm text-gray-600">Programs</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="text-2xl font-bold text-orange-600">40+</div>
            <div className="text-sm text-gray-600">Years</div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h4 className="text-xl font-semibold mb-4">Our Mission</h4>
        <p className="text-gray-700 mb-4">
          To provide transformative education that empowers students to become innovative leaders and responsible global citizens.
        </p>
        <h4 className="text-xl font-semibold mb-4">Our Vision</h4>
        <p className="text-gray-700">
          To be recognized as a world-class university that advances knowledge, fosters creativity, and serves society 
          through excellence in teaching, research, and service.
        </p>
      </div>
    </div>
  )
}

export default HomeSection
