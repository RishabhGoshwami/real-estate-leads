import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// Project data
const projects = {
  ongoing: [
    {
      slug: 'nirala-estate-phase-2',
      title: 'Nirala Estate Phase 2',
      location: 'Greater Noida West',
      image: '/property1.jpg',
      status: 'Ongoing',
    },
    {
      slug: 'nirala-aspire',
      title: 'Nirala Aspire',
      location: 'Noida Extension',
      image: '/property3.jpg',
      status: 'New Launch',
    },
  ],
  completed: [
    {
      slug: 'nirala-greenshire',
      title: 'Nirala Greenshire',
      location: 'Noida Sector 2',
      image: '/property6.jpg',
      status: 'Completed',
    },
  ],
  newLaunch: [
    {
      slug: 'nirala-gateway',
      title: 'Nirala Gateway',
      location: 'Greater Noida (Coming Soon)',
      image: '/property2.jpg', // ✅ Updated image
      status: 'New Launch',
    },
  ],
}

// Tabs
// Tabs (reordered to put New Launch first)
const tabs = [
  { key: 'newLaunch', label: 'New Launch' }, // ✅ Moved to first
  { key: 'ongoing', label: 'Ongoing' },
  { key: 'completed', label: 'Completed' },
];

const ProjectsTabs = () => {
  const [activeTab, setActiveTab] = useState('newLaunch')

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-2 rounded-md font-medium uppercase transition ${
                activeTab === tab.key
                  ? 'bg-blue-700 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.label} Projects
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects[activeTab].map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover rounded-t-lg"
              />
              <div className="px-4 pt-3">
                <p className="text-xs inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full mb-2">
                  {project.status}
                </p>
                <h3 className="text-md font-semibold text-blue-900 mb-1">
                  {project.title}
                </h3>
              </div>
              <div className="px-4 pb-4">
                <Link
                  to={`/projects/${project.slug}`}
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  READ MORE →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsTabs
