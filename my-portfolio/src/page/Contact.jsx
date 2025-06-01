
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  

   

    useEffect(() => {
      const moveCursor = (e) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener("mousemove", moveCursor);
      return () => window.removeEventListener("mousemove", moveCursor);
    }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.name && formData.email && formData.message) {
      try {
        const response = await fetch('http://localhost:3000/submit-form', {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
  
        const result = await response.json();
        console.log("✅ Server Response:", result);
  
        if (response.ok) {
          setSubmitted(true);
          setTimeout(() => setSubmitted(false), 3000);
          setFormData({ name: "", email: "", message: "" });
        } else {
          alert(result.error || "Something went wrong!");
        }
      } catch (error) {
        
        alert("Failed to send message!");

        
      }
    }
  };
 
  

  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center p-6">
      
      <motion.div
             className="fixed top-0 left-0 w-32 h-32 bg-blue-600 rounded-full opacity-30 blur-2xl pointer-events-none"
             animate={{ x: cursorPos.x - 64, y: cursorPos.y - 64 }}
             transition={{ type: "tween", ease: "easeOut", duration: 0 }}
           />
      {/* Heading */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-yellow-400 mt-16"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h1>

      {/* Contact Form */}
      <motion.div
        className="mt-10 w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg backdrop-blur-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
          Get in Touch
        </h2>

        {submitted && (
          <p className="text-green-400 text-center mb-4">✅ Message Sent Successfully!</p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-3 bg-gray-700 text-white rounded-lg outline-none"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-3 bg-gray-700 text-white rounded-lg outline-none"
            required
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="p-3 bg-gray-700 text-white rounded-lg outline-none h-28"
            required
          ></textarea>

          <button
            type="submit"
            className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-yellow-400 transition"
          >
            Send Message
          </button>
        </form>
      </motion.div>

      {/* Contact Details */}
      <motion.div
        className="mt-16 w-full max-w-2xl bg-gray-800 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
          Contact Information
        </h2>

        <div className="text-gray-300 flex flex-col gap-4 text-lg">
          <p className="flex items-center gap-3"><FaEnvelope className="text-yellow-400" /> 
            <a href="mailto:graphicdesiner.harshit@gmail.com" className="hover:underline">graphicdesiner.harshit@gmail.com</a>
          </p>
          <p className="flex items-center gap-3"><FaMapMarkerAlt className="text-yellow-400" /> Lucknow, India</p>
          <p className="flex items-center gap-3"><FaWhatsapp className="text-green-400" /> 
            <a href="https://wa.me/916393956624" target="_blank" className="hover:underline">+91 6393956624</a>
          </p>
          <p className="flex items-center gap-3"><FaWhatsapp className="text-green-400" /> 
            <a href="https://wa.me/917355639544" target="_blank" className="hover:underline">+91 7355639544</a>
          </p>
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        className="mt-10 flex gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.7 }}
      >
        <a href="https://wa.me/916393956624" target="_blank" className="text-green-400 text-3xl hover:scale-110 transition">
          <FaWhatsapp />
        </a>
        <a href="https://instagram.com/harshit6.6.6" target="_blank" className="text-pink-500 text-3xl hover:scale-110 transition">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com/in/harshitgupta" target="_blank" className="text-blue-500 text-3xl hover:scale-110 transition">
          <FaLinkedin />
        </a>
      </motion.div>

    </div>
  );
};

export default Contact;
