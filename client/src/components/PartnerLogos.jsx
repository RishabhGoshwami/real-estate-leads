import React from 'react'

const logos = [
  '/logo1.png',
  '/logo2.png',
  '/logo3.png',
  '/logo4.png',
  '/logo5.png',
]

const PartnerLogos = () => {
  return (
    <section className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 items-center justify-items-center">
          {logos.map((src, index) => (
            <img key={index} src={src} alt={`partner-logo-${index}`} className="h-12 object-contain" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnerLogos
