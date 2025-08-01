import React from "react";
import { useParams } from "react-router-dom";

const allProjects = {
  'nirala-gateway': {
    title: "Nirala Gateway",
    location: "Greater Noida (New Launch)",
    video: "/promo.mp4",
    status: "New Launch",
    description:
      "Nirala Gateway is a Newly Launched luxury residential project in Greater Noida offering premium amenities and prime location.",
    overview: `NIRALA GATEWAY is a commercial development designed to create a vibrant urban environment by integrating retail, restaurants, offices, and studio apartments within a single dynamic structure. The project offers a unique, multi-functional space that caters to diverse needs including business, leisure, and modern living.

Strategically located on a prominent three-side open plot, the building will serve as an iconic landmark with excellent visibility and direct access from three major roads.`,
    components: [
      {
        title: "Retail Shops & Anchor Stores (Lower Ground to 2nd Floor)",
        purpose:
          "To host a wide range of retail outlets and anchors stores, catering to both everyday shopping and premium brands.",
        design:
          "Spacious, open-floor layouts for tenant flexibility. High visibility and direct access from adjoining roads to boost foot traffic.",
        features:
          "Large-scale anchor stores on the Lower Ground floor to serve as crowd pullers and establish a strong retail destination.",
      },
      {
        title: "Restaurants (3rd Floor)",
        purpose: "To offer fine dining options for a tranquil dining experience.",
        design:
          "Open, airy spaces with large windows to maximize natural light and offer scenic views. Green terraces provide an organic connections to nature.",
        features:
          "Landscaped outdoor seating areas for comfortable dining surrounded by greenery and urban vistas.",
      },
      {
        title: "Offices (5th to 8th Floors)",
        purpose:
          "To provide modern workspaces for professionals, startups, and established businesses.",
        design:
          "Contemporary office layouts with high-speed elevators, energy-efficient HVAC systems, and flexible unit configurations.",
        features: "132 Approx units to accommodate varied business needs.",
      },
      {
        title: "Studio Apartments (9th to 24th Floors)",
        purpose:
          "To deliver modern urban living for professionals, small families, and city dwellers.",
        design:
          "Smartly designed studios focusing on space optimization, natural lighting, and modern aesthetics.",
        features:
          "1. Private Gym: Fully equipped fitness area exclusively for residents. 2. In-house Restaurant: Providing convenience and a social space within the building.",
      },
    ],
    floorplan: "/floorplan.pdf",
  },
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = allProjects[slug];

  if (!project) {
    return <div className="p-10 text-red-600">Project not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-blue-900 mb-2">{project.title}</h1>
      <p className="text-lg text-gray-600 mb-4">{project.location}</p>

      {/* Video */}
      {project.video && (
        <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-[600px] object-cover"
          />
        </div>
      )}

      {/* Description */}
      <p className="text-lg text-gray-800 mb-6">{project.description}</p>

      {/* Overview */}
      {project.overview && (
        <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-3">Project Overview</h2>
          <p className="text-gray-700 whitespace-pre-line">{project.overview}</p>
        </div>
      )}

      {/* Components */}
      {project.components && (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-blue-800 mb-5">Project Components</h2>
          {project.components.map((comp, index) => (
            <div key={index} className="mb-6 border-b pb-4 border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{comp.title}</h3>
              <p><span className="font-semibold">Purpose:</span> {comp.purpose}</p>
              <p><span className="font-semibold">Design:</span> {comp.design}</p>
              <p><span className="font-semibold">Special Features:</span> {comp.features}</p>
            </div>
          ))}
        </div>
      )}

      
    </div>
  );
};

export default ProjectDetail;
