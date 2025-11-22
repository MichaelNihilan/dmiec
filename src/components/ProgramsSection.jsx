import React from 'react'

const ProgramsSection = ({ isActive }) => {
  const programs = [
    {
      icon: '💻',
      bgColor: 'bg-blue-100',
      title: 'Computer Science & Engineering',
      description: 'Cutting-edge programs in AI, machine learning, cybersecurity, and software development.',
      features: ["Bachelor's, Master's, PhD programs", 'Industry partnerships', 'Research opportunities']
    },
    {
      icon: '🏥',
      bgColor: 'bg-green-100',
      title: 'Medicine & Health Sciences',
      description: 'Comprehensive medical education with state-of-the-art facilities and clinical training.',
      features: ['MD, Nursing, Public Health', 'Teaching hospital partnerships', 'Global health initiatives']
    },
    {
      icon: '💼',
      bgColor: 'bg-purple-100',
      title: 'Business Administration',
      description: 'World-class MBA and business programs with global perspective and industry connections.',
      features: ['MBA, Executive programs', 'International exchanges', 'Entrepreneurship focus']
    },
    {
      icon: '🎨',
      bgColor: 'bg-orange-100',
      title: 'Arts & Design',
      description: 'Creative programs fostering innovation in visual arts, design, and digital media.',
      features: ['Fine Arts, Graphic Design', 'Digital media studios', 'Gallery exhibitions']
    },
    {
      icon: '⚖️',
      bgColor: 'bg-red-100',
      title: 'Law & Legal Studies',
      description: 'Prestigious law school with emphasis on justice, ethics, and global legal practice.',
      features: ['JD, LLM programs', 'Moot court competitions', 'Legal clinics']
    },
    {
      icon: '🔬',
      bgColor: 'bg-teal-100',
      title: 'Sciences & Research',
      description: 'Advanced research programs in physics, chemistry, biology, and environmental sciences.',
      features: ['Research-focused degrees', 'Modern laboratories', 'Publication opportunities']
    }
  ]

  return (
    <div id="programs" className={`content-section ${isActive ? 'active' : ''}`}>
      <div className="text-center mb-12">
        <h3 className="text-4xl font-bold text-gray-800 mb-6">📚 Academic Programs</h3>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Discover our comprehensive range of undergraduate, graduate, and doctoral programs designed for the future.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className={`w-16 h-16 ${program.bgColor} rounded-lg flex items-center justify-center mb-4`}>
              <span className="text-3xl">{program.icon}</span>
            </div>
            <h4 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h4>
            <p className="text-gray-600 mb-4">{program.description}</p>
            <ul className="text-sm text-gray-500 space-y-1">
              {program.features.map((feature, idx) => (
                <li key={idx}>• {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProgramsSection
