import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Sample Data
const logos = [
  { title: "Logo 1", image: "/assets/logos/logo1.png" },
  { title: "Logo 2", image: "/assets/logos/logo2.png" },
  { title: "Logo 3", image: "/assets/logos/logo3.png" },
  { title: "Logo 4", image: "/assets/logos/logo4.png" },
  { title: "Logo 5", image: "/assets/logos/logo5.png" },
  { title: "Logo 6", image: "/assets/logos/logo6.png" },
  { title: "Logo 7", image: "/assets/logos/logo7.png" },
  { title: "Logo 8", image: "/assets/logos/logo8.png" },
  { title: "Logo 9", image: "/assets/logos/logo9.png" },
  { title: "Logo 10", image: "/assets/logos/logo10.png" },
  { title: "Logo 11", image: "/assets/logos/logo11.png" },
  { title: "Logo 12", image: "/assets/logos/logo12.png" },
  { title: "Logo 13", image: "/assets/logos/logo13.png" },
  { title: "Logo 14", image: "/assets/logos/logo14.png" },
  { title: "Logo 15", image: "/assets/logos/logo15.png" },
  { title: "Logo 16", image: "/assets/logos/logo16.png" },
  { title: "Logo 17", image: "/assets/logos/logo17.png" },
  { title: "Logo 18", image: "/assets/logos/logo18.png" },
  { title: "Logo 19", image: "/assets/logos/logo19.png" },
  { title: "Logo 20", image: "/assets/logos/logo20.png" },
  { title: "Logo 21", image: "/assets/logos/logo21.png" },
  { title: "Logo 22", image: "/assets/logos/logo22.png" },
  { title: "Logo 23", image: "/assets/logos/logo23.png" },
  { title: "Logo 24", image: "/assets/logos/logo24.png" },
  { title: "Logo 25", image: "/assets/logos/logo25.png" },
  { title: "Logo 26", image: "/assets/logos/logo26.png" },
  { title: "Logo 27", image: "/assets/logos/logo27.png" },
  { title: "Logo 28", image: "/assets/logos/logo28.png" },
  { title: "Logo 29", image: "/assets/logos/logo29.png" },
  { title: "Logo 30", image: "/assets/logos/logo30.png" },
];

const mockups = [
  { title: "Mockup 1", image: "/assets/mockups/mockup1.png" },
  { title: "Mockup 2", image: "/assets/mockups/mockup2.png" },
  { title: "Mockup 3", image: "/assets/mockups/mockup3.png" },
  { title: "Mockup 4", image: "/assets/mockups/mockup4.png" },
  { title: "Mockup 5", image: "/assets/mockups/mockup5.png" },
  { title: "Mockup 6", image: "/assets/mockups/mockup6.png" },
  { title: "Mockup 7", image: "/assets/mockups/mockup7.png" },
  { title: "Mockup 8", image: "/assets/mockups/mockup8.png" },
  { title: "Mockup 9", image: "/assets/mockups/mockup9.png" },
  { title: "Mockup 10", image: "/assets/mockups/mockup10.png" },
];

const illustrations = [
  { title: "Illustration 1", image: "/assets/illustrations/illustration1.png" },
  { title: "Illustration 2", image: "/assets/illustrations/illustration2.png" },
  { title: "Illustration 3", image: "/assets/illustrations/illustration3.png" },
  { title: "Illustration 4", image: "/assets/illustrations/illustration4.png" },
  { title: "Illustration 5", image: "/assets/illustrations/illustration5.png" },
  { title: "Illustration 6", image: "/assets/illustrations/illustration6.png" },
  { title: "Illustration 7", image: "/assets/illustrations/illustration7.png" },
  { title: "Illustration 8", image: "/assets/illustrations/illustration8.png" },
];

const socialMediaClients = [
  { title: "Instagram Client 1", image: "/assets/clients/client1.png", link: "https://instagram.com/client1" },
  { title: "Instagram Client 2", image: "/assets/clients/client2.png", link: "https://instagram.com/client2" },
  { title: "Instagram Client 3", image: "/assets/clients/client3.png", link: "https://instagram.com/client3" },
  { title: "Instagram Client 4", image: "/assets/clients/client4.png", link: "https://instagram.com/client4" },
  { title: "Instagram Client 5", image: "/assets/clients/client5.png", link: "https://instagram.com/client5" },
  { title: "Instagram Client 6", image: "/assets/clients/client6.png", link: "https://instagram.com/client6" },
  { title: "Instagram Client 7", image: "/assets/clients/client6.png", link: "https://instagram.com/client6" },
  { title: "Instagram Client 8", image: "/assets/clients/client6.png", link: "https://instagram.com/client6" },
];

const webProjects = [
  { title: "Portfolio Website", image: "/assets/websites/portfolio.png", link: "https://your-portfolio.com" },
  { title: "E-Commerce Store", image: "/assets/websites/ecom.png", link: "https://your-ecommerce.com" },
  { title: "Business Website", image: "/assets/websites/business.png", link: "https://your-business.com" },
  { title: "Business Website", image: "/assets/websites/business.png", link: "https://your-business.com" },

];

// ✅ GridSection Component (React properly render karega)
const GridSection = ({ title, items, isLink, onSelect }) => (
  <div className="mt-10 w-full max-w-7xl">
    <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">{title}</h2>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {items.map((item, index) => (
        isLink ? (
          <motion.a 
            key={index} 
            href={item.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative cursor-pointer bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg" />
            <p className="absolute bottom-3 left-3 bg-black bg-opacity-50 px-3 py-1 rounded text-white">{item.title}</p>
          </motion.a>
        ) : (
          <motion.div 
            key={index}
            className="relative cursor-pointer bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
            onClick={() => onSelect(item.image)}
          >
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-lg" />
            <p className="absolute bottom-3 left-3 bg-black bg-opacity-50 px-3 py-1 rounded text-white">{item.title}</p>
          </motion.div>
        )
      ))}
    </div>
  </div>
);

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  
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


      {/* Heading */}
      <motion.h1 
        className="text-4xl md:text-6xl font-bold text-yellow-400 mt-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Work
      </motion.h1>

      {/* Sections */}
      <GridSection title="Graphic Design - Logos" items={logos} onSelect={setSelectedImage} />
      <GridSection title="Mockups" items={mockups} onSelect={setSelectedImage} />
      <GridSection title="Illustrations" items={illustrations} onSelect={setSelectedImage} />
      <GridSection title="Social Media Marketing" items={socialMediaClients} isLink />
      <GridSection title="Web Development Projects" items={webProjects} isLink />

      {/* Popup Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="relative p-4 bg-gray-800 rounded-lg">
            <button 
              className="absolute top-2 right-2 text-white text-2xl" 
              onClick={() => setSelectedImage(null)}
            >✖</button>
            <img src={selectedImage} alt="Enlarged" className="w-[80vw] h-auto max-h-[80vh] object-contain" />
          </div>
        </div>

        
      )}
     

    </div>
    


  );
};

export default Projects;
