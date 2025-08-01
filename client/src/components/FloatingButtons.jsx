import React from 'react'
import { FaWhatsapp, FaPhone } from 'react-icons/fa'

const FloatingButtons = () => {
  return (
    <div className="fixed right-4 bottom-4 z-50 flex flex-col items-end space-y-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+919990989295" // replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300"
      >
        <FaWhatsapp size={24} />
      </a>

      {/* Call Button */}
      <a
        href="tel:+919990989295" // replace with your number
        className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded-full shadow-lg transition duration-300"
      >
        <FaPhone size={24} />
      </a>
    </div>
  )
}

export default FloatingButtons
