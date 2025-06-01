import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import profilePic from "../assets/goku.jpg"; // Apni image yaha daalo

const About = () => {
   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const moveCursor = (e) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener("mousemove", moveCursor);
      return () => window.removeEventListener("mousemove", moveCursor);
    }, []);
  
  return (
    <div className="bg-gray-900  text-white min-h-screen flex flex-col items-center p-6">

       {/* Cursor Glow */}
             <motion.div
               className="fixed top-0 left-0 w-32 h-32 bg-blue-600 rounded-full opacity-30 blur-2xl pointer-events-none"
               animate={{ x: cursorPos.x - 64, y: cursorPos.y - 64 }}
               transition={{ type: "tween", ease: "easeOut", duration: 0 }}
             />

      {/* Hero Section */}
      {/* <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center mt-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-yellow-400">About Me</h1>
        <p className="text-lg md:text-xl text-gray-400 mb-6">"Turning Ideas into Reality with Code & Design"</p>
      </motion.div> */}

      {/* About Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className=" flex flex-col  md:flex-row items-center gap-10 w-full max-w-5xl"
      >
        {/* Profile Image */}
        <motion.img
          src={profilePic}
          alt="Harshit Gupta"
          className="w-52 h-52 md:w-72 md:h-72 object-cover rounded-full shadow-lg border-4 border-yellow-500"
          whileHover={{ scale: 1.1 }}
        />


        {/* Bio */}
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Who Am I?</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm <span className="text-yellow-400 font-semibold">Harshit Gupta</span>, a passionate
            <span className="text-blue-400 font-semibold"> Full Stack Developer</span>,
            <span className="text-green-400 font-semibold"> Graphic Designer</span>, and
            <span className="text-red-400 font-semibold"> Entrepreneur</span>.

            Founder of <span className="text-yellow-400 font-semibold">Creative Code Hub</span>, I specialize in modern web development, branding, and digital marketing. My mission is to craft high-performance, visually appealing digital solutions that help businesses thrive.

            I have extensive experience in Full Stack Web Development, UI/UX Design, and SEO-driven digital marketing strategies. My journey has been about blending technology, creativity, and business strategy to build impactful digital experiences.
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-2 text-yellow-400">My Core Skills:</h3>
          <ul className="text-gray-300 text-lg leading-relaxed list-disc list-inside">
            <li>⚡ Frontend & Backend Development – React, Next.js, Tailwind, Node.js, Express</li>
            <li>🎨 Graphic Design & Branding – Adobe Photoshop, Illustrator, CorelDraw</li>
            <li>🚀 SEO & Digital Marketing – Google Ads, Facebook Ads, Content Strategy</li>
            <li>💡 Business Growth & E-commerce – Shopify, WordPress, Social Media</li>
          </ul>
        </div>

      </motion.div>

      {/* Skills & Expertise Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">My Expertise</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-gray-300 text-lg">
          <span className="bg-gray-800 px-4 py-2 rounded-lg">React & JavaScript</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">Tailwind CSS</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">Node.js & Express</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">MongoDB & SQL</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">SEO & Digital Marketing</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">Socia Media Marketing</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">Adobe Photoshop</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">Adobe Illustrator</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">Coreldraw</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">Adobe premiere pro</span>
          <span className="bg-gray-800 px-4 py-2 rounded-lg">Adobe After Effects</span>
        </div>
      </motion.div>

      {/* Work Experience Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Work Experience & Projects</h2>

        <div className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
          💼 Founder & CEO – Creative Code Hub <br />
          📌 Helping businesses grow through website development, branding, and digital marketing.<br /><br />

          💻 Freelance Full Stack Developer <br />
          📌 Designed and developed e-commerce, real estate, and business websites.<br /><br />

          🎨 Professional Graphic Designer <br />
          📌 Created branding & marketing materials for schools, gyms, real estate agencies, and startups.<br /><br />

          📢 Digital Marketing Consultant <br />
          📌 Managed ad campaigns, increased client engagement & optimized business SEO rankings.<br />
        </div>
      </motion.div>

      {/* Fun Facts / Personal Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.7 }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Fun Facts About Me</h2>
        <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
          🚀 I started coding when I was <span className="text-yellow-400 font-semibold">14 years old</span>. <br />
          🎨 I love designing stunning <span className="text-blue-400 font-semibold">brand identities</span>. <br />
          🎮 I own a <span className="text-green-400 font-semibold">gaming parlor</span>. <br />
          ☕ I function best with a cup of <span className="text-red-400 font-semibold">strong coffee</span>. <br />
          🎧 I enjoy listening to <span className="text-purple-400 font-semibold">lofi beats while coding</span>.
        </p>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.9 }}
        className="mt-16 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Let's Connect!</h2>
        <p className="text-gray-400 text-lg">Want to work together or just say hi?</p>

        {/* Contact Buttons */}
        <div className="flex gap-4 justify-center mt-6">
          <Link to="/contact" className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-yellow-400 transition">
            Contact Me
          </Link>
          <a href="https://wa.me/916393956624" target="_blank" rel="noopener noreferrer" className="bg-green-500 text-white px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-green-400 transition">
            WhatsApp Me
          </a>
        </div>
      </motion.div>

    </div>
  );
};

export default About;
