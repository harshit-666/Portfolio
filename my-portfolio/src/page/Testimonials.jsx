import React, {  useEffect, useState } from "react";
import { motion } from "framer-motion";


const Testimonials = () => {

const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

useEffect(() => {
      const moveCursor = (e) => {
        setCursorPos({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener("mousemove", moveCursor);
      return () => window.removeEventListener("mousemove", moveCursor);
    }, []);


  const [testimonials, setTestimonials] = useState([
    // {
    //   name: "John Doe",
    //   rating: 5,
    //   review: "Amazing work! The designs were top-notch and delivered on time.",
    //   image: "/assets/users/john.png",
    // },
    // {
    //   name: "Emily Watson",
    //   rating: 4,
    //   review: "Loved the website they built! Highly recommended.",
    //   image: "/assets/users/emily.png",
    // },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    rating: 5,
    review: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setFormData({ ...formData, image: imageUrl });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTestimonials([...testimonials, formData]);
    setFormData({ name: "", rating: 5, review: "", image: null });
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
        Testimonials
      </motion.h1>

      {/* Testimonial List */}
      <div className="mt-10 w-full max-w-4xl">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg mb-6 flex items-center gap-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={testimonial.image || "/assets/default-user.png"}
              alt={testimonial.name}
              className="w-16 h-16 object-cover rounded-full border-2 border-yellow-500"
            />
            <div>
              <h3 className="text-xl font-bold">{testimonial.name}</h3>
              <div className="text-yellow-400">
                {"⭐".repeat(testimonial.rating)}
              </div>
              <p className="text-gray-300">{testimonial.review}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Testimonial Submission Form */}
      <motion.div
        className="mt-10 w-full max-w-3xl bg-gray-800 p-6 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-3xl font-bold text-yellow-400 mb-4 text-center">
          Share Your Experience
        </h2>
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
          
          <select
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            className="p-3 bg-gray-700 text-white rounded-lg outline-none"
          >
            {[5, 4, 3, 2, 1].map((star) => (
              <option key={star} value={star}>
                {"⭐".repeat(star)}
              </option>
            ))}
          </select>

          <textarea
            name="review"
            value={formData.review}
            onChange={handleChange}
            placeholder="Write your review..."
            className="p-3 bg-gray-700 text-white rounded-lg outline-none h-28"
            required
          ></textarea>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="p-2 bg-gray-700 text-white rounded-lg"
          />

          <button
            type="submit"
            className="bg-yellow-500 text-gray-900 px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-yellow-400 transition"
          >
            Submit Review
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Testimonials;
