import React, { useState } from 'react'
import { Link } from 'react-router-dom'

// ✅ Import optimized images
import property1 from '../assets/property1.jpg?w=800&format=webp'
import property3 from '../assets/property3.jpg?w=800&format=webp'
import property6 from '../assets/property6.jpg?w=800&format=webp'
import property2 from '../assets/property2.jpg?w=800&format=webp'

// Project data with more descriptive alt text
const projects = {
  ongoing: [
    {
      slug: 'nirala-estate-phase-2',
      title: 'Nirala Estate Phase 2',
      location: 'Greater Noida West',
      image: property1,
      alt: 'Exterior shot of the Nirala Estate Phase 2 apartment complex.',
      status: 'Ongoing',
    },
    {
      slug: 'nirala-aspire',
      title: 'Nirala Aspire',
      location: 'Noida Extension',
      image: property3,
      alt: 'Aerial view of Nirala Aspire project showcasing the layout and amenities.',
      status: 'New Launch',
    },
  ],
  completed: [
    {
      slug: 'nirala-greenshire',
      title: 'Nirala Greenshire',
      location: 'Noida Sector 2',
      image: property6,
      alt: 'Image of Nirala Greenshire with lush green surroundings.',
      status: 'Completed',
    },
  ],
  newLaunch: [
    {
      slug: 'nirala-gateway',
      title: 'Nirala Gateway',
      location: 'Greater Noida (Coming Soon)',
      image: property2,
      alt: 'Artist’s rendering of the upcoming Nirala Gateway commercial property.',
      status: 'New Launch',
    },
  ],
}

// Tabs
const tabs = [
  { key: 'newLaunch', label: 'New Launch' },
  { key: 'ongoing', label: 'Ongoing' },
  { key: 'completed', label: 'Completed' },
]

const ProjectsTabs = () => {
  const [activeTab, setActiveTab] = useState('newLaunch')

  return (
    <section className="py-12 bg-white" aria-labelledby="projects-heading">
      <div className="max-w-7xl mx-auto px-4">
        <h2 id="projects-heading" className="text-3xl font-bold text-center mb-10">
          Nirala World Projects
        </h2>

        {/* Tabs with accessibility improvements */}
        <div role="tablist" className="flex justify-center space-x-4 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              role="tab"
              aria-controls={`panel-${tab.key}`}
              aria-selected={activeTab === tab.key}
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
          {projects[activeTab].map((project) => (
            <Link
              to={`/projects/${project.slug}`}
              key={project.slug}
              className="block bg-white rounded-lg shadow-md hover:shadow-xl transition"
              aria-labelledby={`project-title-${project.slug}`}
              id={`panel-${activeTab}`}
              role="tabpanel"
            >
              <img
                src={project.image}
                alt={project.alt}
                className="w-full h-52 object-cover rounded-t-lg"
                loading="lazy"
              />
              <div className="px-4 pt-3">
                <p className="text-xs inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full mb-2">
                  {project.status}
                </p>
                <h3 id={`project-title-${project.slug}`} className="text-md font-semibold text-blue-900 mb-1">
                  {project.title}
                </h3>
              </div>
              <div className="px-4 pb-4">
                <span
                  className="text-blue-600 text-sm font-medium hover:underline"
                >
                  READ MORE →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsTabs;
