import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./Home";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // const [emailOTP, setEmailOTP] = useState("");
  const [emailVerified, setEmailVerified] = useState(false);
  const [showEmailOTPBox, setShowEmailOTPBox] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const moveCursor = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const sendEmailOTP = async () => {
    if (!formData.email) return setError("Email is required");
    const res = await fetch("http://localhost:5000//api/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: formData.email }),
    });
    const data = await res.json();
 
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("All fields are required!");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

  
   

    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        alert("Sign-Up Successful! ✅");
        navigate('/');
      } else {
        setError(data.error || "Something went wrong!");
      }
    } catch (error) {
      setError("Failed to connect to server!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 bg-blue-600 rounded-full opacity-30 blur-2xl pointer-events-none"
        animate={{ x: cursorPos.x - 64, y: cursorPos.y - 64 }}
        transition={{ type: "tween", ease: "easeOut", duration: 0.00001 }}
      />

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md backdrop-blur-lg border border-gray-700"
      >
        <h2 className="text-3xl font-bold text-yellow-400 text-center mb-6">
          Create an Account ✨
        </h2>

        {error && <p className="text-red-400 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              // disabled={showEmailOTPBox && !emailVerified}
              className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your email"
            />

          

            

          
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Create a password"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Re-enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-gray-900 p-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-400 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-yellow-400 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
