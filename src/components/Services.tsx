"use client";
import { motion } from "framer-motion";

const services = [
  { title: "Penetration Testing", description: "Simulate real-world attacks to find vulnerabilities before hackers do." },
  { title: "Cloud Security", description: "Secure your cloud infrastructure from unauthorized access and threats." },
  { title: "Application Security", description: "Ensure your web and mobile applications are free from security flaws." },
  { title: "Network Security", description: "Protect your organization’s network against cyber threats and attacks." },
];

const Services = () => {
  return (
    <div className=" text-gray-700 py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Our Cybersecurity Services</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 p-6 rounded-lg shadow-lg border-2 border-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
