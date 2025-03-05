"use client";
import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 rounded-t-2xl shadow-md text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Logo & Tagline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-white">AgileHunt</h2>
          <p className="mt-2 text-gray-400">Guarding your innovations with advanced cybersecurity solutions.</p>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            {["Home", "Services", "About", "Contact"].map((link, index) => (
              <motion.li 
                key={index} 
                whileHover={{ x: 5, color: "#3b82f6" }} 
                transition={{ duration: 0.2 }}
              >
                <a href="#" className="hover:text-blue-400 transition">{link}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Social Media Links */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex mt-3 space-x-4">
            {[
              { icon: FaTwitter, link: "#", color: "text-blue-400" },
              { icon: FaLinkedin, link: "#", color: "text-blue-600" },
              { icon: FaGithub, link: "#", color: "text-gray-400" },
              { icon: FaFacebook, link: "#", color: "text-blue-500" },
            ].map(({ icon: Icon, link, color }, index) => (
              <motion.a 
                key={index} 
                href={link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={`p-2 rounded-full bg-gray-800 ${color} hover:bg-gray-700 transition`}
                whileHover={{ scale: 1.2 }}
              >
                <Icon className="text-xl" />
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>

      {/* Copyright */}
      <div className="mt-8 text-center border-t border-gray-700 pt-4 text-gray-500">
        © {new Date().getFullYear()} AgileHunt. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
