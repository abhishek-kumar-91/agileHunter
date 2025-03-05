"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  { title: "Sign Up", description: "Create an account with AgileHunt to start securing your applications." },
  { title: "Select Service", description: "Choose from penetration testing, cloud security, and more." },
  { title: "Get Assessment", description: "Receive a detailed security analysis and expert recommendations." },
  { title: "Secure & Protect", description: "Implement fixes and continuously monitor your system’s security." },
];

const GettingStarted = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className=" text-gray-700 py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Getting Started with AgileHunt</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-lg border-2 border-white transition-all duration-300 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">
              {step.title} {hoveredIndex === index}
            </h3>
            <p className="text-gray-400">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GettingStarted;
