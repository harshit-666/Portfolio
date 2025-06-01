import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Navigation ke liye
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("user", JSON.stringify(data.user)); // Save user info
        alert("Login Successful! ✅");
        navigate("/"); // Home page pe redirect
        window.location.reload(); // Navbar update karne ke liye
      } else {
        setError(data.error || "Invalid email or password!");
      }
    } catch (err) {
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
          Welcome Back! 👋
        </h2>

        {error && <p className="text-red-400 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-700 text-white rounded-lg outline-none focus:ring-2 focus:ring-yellow-400"
              placeholder="Enter your email"
              required
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
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-yellow-500 text-gray-900 p-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-400 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Links */}
        <div className="mt-4 text-center">
          <p className="text-gray-400">
            Don't have an account?{" "}
            <Link to="/signup" className="text-yellow-400 hover:underline">
              Sign up
            </Link>
          </p>
          <p className="text-gray-400 mt-2">
            Forgot password?{" "}
            <Link to="/forgot-password" className="text-yellow-400 hover:underline">
              Reset here
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
