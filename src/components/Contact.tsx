"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-center items-center min-h-screen  text-gray-700 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-md p-6 rounded-xl bg-gray-100 shadow-lg border border-transparent neon-border"
      >
        {/* Glowing Border Effect */}
        <div className="absolute inset-0 rounded-xl border-2 border-white animate-border-glow"></div>

        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Get in Touch</h2>

        <form className="space-y-4">
          {/* Inputs */}
          {["name", "email"].map((field) => (
            <div key={field} className="relative">
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                placeholder={field === "name" ? "Your Name" : "Your Email"}
                className="w-full px-4 py-2 text-gray-400 rounded-md focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-300 backdrop-blur-md"
              />
            </div>
          ))}

          {/* Message Box */}
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full h-24 px-4 py-2 text-gray-400  rounded-md focus:ring-2 focus:ring-cyan-400 focus:outline-none transition-all duration-300 backdrop-blur-md"
            />
          </div>

          {/* Submit Button */}
          <button
           
            className="w-full py-2 text-lg font-semibold text-gray-500 bg-gray-300 rounded-md hover:bg-gray-600 cursor-pointer transition-all duration-300"
          >
            Send
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
