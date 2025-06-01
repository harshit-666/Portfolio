import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [profileOpen, setProfileOpen] = useState(false); // ✅ Profile dropdown toggle

  // Check if user is logged in
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setProfileOpen(false); // ✅ Close dropdown after logout
    window.location.reload();
  };

  return (
    <motion.nav 
      initial={{ y: -100 }} 
      animate={{ y: 0 }} 
      transition={{ duration: 0.5 }}
      className="bg-gray-900 text-white p-4 sticky top-0 z-50 shadow-lg"
    >
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo / Name */}
        <motion.h1 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="text-2xl font-bold"
        >
          Harshit Gupta
        </motion.h1>
        
        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        {/* Nav Links */}
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`md:flex space-x-6 absolute md:static bg-gray-900 md:bg-transparent w-full left-0 md:w-auto transition-all duration-300 ease-in-out ${
            menuOpen ? "top-16" : "top-[-500px]"
          }`}
        >
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/" className="hover:text-yellow-400">Home</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/about" className="hover:text-yellow-400">About</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/projects" className="hover:text-yellow-400">Projects</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/services" className="hover:text-yellow-400">Services</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/testimonials" className="hover:text-yellow-400">Testimonials</Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }}>
            <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
          </motion.li>
        </motion.ul>

        {/* User Profile / Login & Sign-Up Buttons */}
        <div className="hidden md:flex space-x-4 relative">
          {user ? (
            <div className="relative">
              {/* Profile Image (Click to Open Dropdown) */}
              <img
                src={`https://api.dicebear.com/7.x/initials/svg?seed=${user.email}`}
                alt="Profile"
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={() => setProfileOpen(!profileOpen)}
              />

              {/* Profile Dropdown Menu */}
              {profileOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  transition={{ duration: 0.3 }}
                  className="absolute right-0 mt-3 w-40 bg-gray-800 text-white shadow-lg rounded-lg p-2"
                >
                  {/* Logout Button */}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    onClick={handleLogout}
                    className="block text-center w-full bg-red-500 py-2 rounded-lg"
                  >
                    Logout
                  </motion.button>
                </motion.div>
              )}
            </div>
          ) : (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded-lg transition duration-300 hover:bg-yellow-400 hover:text-gray-900"
              >
                <Link to="/login">Login</Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="px-5 py-2 bg-yellow-500 text-gray-900 rounded-lg font-semibold shadow-lg hover:bg-yellow-400 transition duration-300"
              >
                <Link to="/signup">Sign Up</Link>
              </motion.button>
            </>
          )}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
