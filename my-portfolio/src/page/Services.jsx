import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Graphic Design",
    description: "Logos, branding, mockups & stunning visuals that make businesses stand out.",
    icon: "🎨",
    subServices: [
      "Logo Design",
      "Business Card Design",
      "Social Media Post Design",
      "Flyer & Brochure Design",
      "Mockups & Branding",
    ],
  },
  {
    title: "Website Development",
    description: "Modern, high-performance websites built with React, Next.js & Tailwind CSS.",
    icon: "💻",
    subServices: [
      "Portfolio Websites",
      "E-commerce Websites",
      "Business Websites",
      "Custom Web Applications",
      "Landing Page Design",
    ],
  },
  {
    title: "Social Media Marketing",
    description: "Engaging posts, targeted ads & full social media management.",
    icon: "📢",
    subServices: [
      "Facebook Marketing",
      "Instagram Promotions",
      "YouTube Ads",
      "Google Ads",
      "Complete Social Media Management",
    ],
  },
  {
    title: "SEO & Digital Marketing",
    description: "Boost search rankings & grow online visibility with SEO & Google Ads.",
    icon: "📈",
    subServices: [
      "On-Page SEO",
      "Off-Page SEO",
      "Google Ads Management",
      "Keyword Research",
      "SEO Audit & Optimization",
    ],
  },
  {
    title: "Video Editing & Motion Graphics",
    description: "High-quality video edits, animations & promotional videos.",
    icon: "🎬",
    subServices: [
      "YouTube Video Editing",
      "Instagram Reels Editing",
      "Motion Graphics",
      "Corporate Video Editing",
      "Animated Intros & Outros",
    ],
  },
];

const Services = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [selectedService, setSelectedService] = useState(null); // ✅ Store selected service

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-6">
      
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 bg-blue-600 rounded-full opacity-30 blur-2xl pointer-events-none"
        animate={{ x: cursorPos.x - 64, y: cursorPos.y - 64 }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.00001 }}
      />

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mt-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 mb-4">My Services</h1>
        <p className="text-lg md:text-xl text-gray-400">Helping businesses grow with creativity & technology</p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 max-w-6xl">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition transform hover:scale-105 flex flex-col items-center text-center cursor-pointer"
            onClick={() => setSelectedService(service)} // ✅ Open modal on click
          >
            <div className="text-5xl">{service.icon}</div>
            <h2 className="text-2xl font-bold mt-4 text-yellow-400">{service.title}</h2>
            <p className="text-gray-300 mt-2">{service.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Modal for Service Details */}
      {selectedService && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
          onClick={() => setSelectedService(null)} // Close on background click
        >
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full text-center relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-2 right-2 text-gray-400 hover:text-red-400 text-xl"
            >
              ✖
            </button>

            {/* Service Details */}
            <h2 className="text-3xl font-bold text-yellow-400">{selectedService.title}</h2>
            <p className="text-gray-300 mt-4">Select the service you need:</p>

            {/* Sub-services List */}
            <div className="mt-4 space-y-4">
              {selectedService.subServices.map((subService, index) => (
                <div key={index} className="bg-gray-700 p-3 rounded-lg flex justify-between items-center">
                  <span className="text-white">{subService}</span>

                  <div className="flex gap-2">
                    {/* WhatsApp Button */}
                    <a
                      href={`https://wa.me/916393956624?text=${encodeURIComponent(`Hello, I need help with ${subService}. Can you assist?`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-semibold shadow-lg hover:bg-green-400 transition"
                    >
                      WhatsApp
                    </a>

                    {/* Instagram Button */}
                    <a
                      href="https://www.instagram.com/your_instagram_handle/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-500 text-white px-3 py-1 rounded-lg text-sm font-semibold shadow-lg hover:bg-pink-400 transition"
                    >
                      Instagram
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}

    </div>
  );
};

export default Services;
