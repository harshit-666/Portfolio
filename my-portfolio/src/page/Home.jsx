import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Home = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden text-white">
      {/* Background Video */}
      <video
        className="absolute   w-full h-full object-cover z-[-1]"
        src="/videos/background.mp4" // ⬅️ Put your video in public/videos folder
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark overlay for contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-0"></div>

      {/* Cursor Glow */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 bg-blue-600 rounded-full opacity-30 blur-2xl pointer-events-none z-10"
        animate={{ x: cursorPos.x - 64, y: cursorPos.y - 64 }}
        transition={{ type: "tween", ease: "easeOut", duration: 0 }}
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-10 min-h-screen">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">I'm Harshit Gupta</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Full Stack Developer | Graphic Designer | Entrepreneur
          </p>
          <motion.div whileHover={{ scale: 1.1 }} className="flex gap-4 justify-center">
            <Link
              to="/projects"
              className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-yellow-400 transition"
            >
              View Work
            </Link>
            <Link
              to="/contact"
              className="border-2 border-yellow-500 text-yellow-500 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 hover:text-gray-900 transition"
            >
              Hire Me
            </Link>
          </motion.div>
        </motion.div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="mt-16 flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl"
        >
          <motion.img
            src="https://wallpapers.com/images/hd/fierce-son-goku-60yc481rwik8mc5q.jpg"
            alt="Harshit Gupta"
            className="w-44 h-44 md:w-60 md:h-60 object-cover rounded-full shadow-lg border-4 border-yellow-500"
            whileHover={{ scale: 1.1 }}
          />

          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">About Me</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              I'm a passionate <span className="font-semibold text-yellow-500">Full Stack Developer</span>,{" "}
              <span className="font-semibold text-blue-400">Graphic Designer</span>, and{" "}
              <span className="font-semibold text-green-400">Entrepreneur</span>.
            </p>
            <p className="mt-4 text-lg text-gray-400 leading-relaxed">
              With years of experience in modern web development, branding, and marketing, I help
              businesses build creative and high-performance solutions. Always excited to learn new
              technologies and take on challenging projects!
            </p>
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="mt-10 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Tech Stack</h2>
          <div className="flex gap-4 flex-wrap justify-center">
            {["React", "Tailwind CSS", "JavaScript", "Node.js", "SQL", "mongoDB"].map((tech) => (
              <span key={tech} className="bg-gray-800 px-4 py-2 rounded-lg">{tech}</span>
            ))}
          </div>
        </motion.div>

        {/* Graphic Design Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.7 }}
          className="mt-10 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Graphic Design Skills</h2>
          <div className="flex gap-4 flex-wrap justify-center">
            {[
              "Adobe Photoshop",
              "Adobe Illustrator",
              "Canva",
              "Logo Design",
              "Adobe premiere pro",
              "adobe after effects",
              "corelDraw",
            ].map((skill) => (
              <span key={skill} className="bg-gray-800 px-4 py-2 rounded-lg">{skill}</span>
            ))}
          </div>
        </motion.div>

        {/* Digital Marketing Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="mt-10 text-center"
        >
          <h2 className="text-2xl font-bold mb-4">Digital Marketing Skills</h2>
          <div className="flex gap-4 flex-wrap justify-center">
            {[
              "SEO",
              "Google Ads",
              "Facebook Ads",
              "Social Media Management",
              "Email Marketing",
              "Content Creation",
              "Affiliate Marketing",
            ].map((skill) => (
              <span key={skill} className="bg-gray-800 px-4 py-2 rounded-lg">{skill}</span>
            ))}
          </div>
        </motion.div>

        {/* WhatsApp Contact */}
        <div className="mt-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-gray-400 mb-6">Feel free to reach out for collaborations or work.</p>
          <a
            href="https://wa.me/916393956624?text=Hi%20Harshit!%20I%20am%20interested%20in%20working%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-green-400 transition"
          >
            Contact Me on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
