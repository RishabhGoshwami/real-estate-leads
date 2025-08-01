import { useParams } from 'react-router-dom'
import React from 'react'

const ProjectDetails = () => {
  const { slug } = useParams()

  return (
    <div className="pt-24 px-4 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-blue-800 capitalize">{slug.replace(/-/g, ' ')}</h1>
      <p className="mt-4 text-gray-600">
        This is a placeholder for detailed project information of <strong>{slug}</strong>. You can fetch this data from a database or static object later.
      </p>
    </div>
  )
}

export default ProjectDetails
