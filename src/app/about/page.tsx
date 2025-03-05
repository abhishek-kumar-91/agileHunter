"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <div className="min-h-screen pt-32  text-gray-700 py-16 px-6 md:px-12">
      {/* Container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center space-y-6"
      >
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          Introducing <span className="text-gray-900">AGILE HUNT</span>
        </h1>

        {/* Subtext */}
        <p className="text-lg text-gray-300 leading-relaxed">
          Your ultimate cybersecurity ally. With a laser focus on safeguarding your digital landscape,
          we specialize in a range of services that ensure your systems stay fortified against evolving threats.
        </p>
      </motion.div>

      {/* Features Section */}
      <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Feature Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-full md:w-1/3 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-gray-700 text-center"
        >
          <Image src="/images/pentest.png" alt="Pentesting" width={80} height={80} className="mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Pentesting & Red Teaming</h3>
          <p className="text-gray-400 mt-2 text-sm">
            Comprehensive testing for mobile, web, and network applications to identify vulnerabilities.
          </p>
        </motion.div>

        {/* Feature Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-full md:w-1/3 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-gray-700 text-center"
        >
          <Image src="/images/osint1.png" alt="OSINT" width={80} height={80} className="mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Open-Source Intelligence</h3>
          <p className="text-gray-400 mt-2 text-sm">
            We delve deep into OSINT to uncover potential threats before they become a risk.
          </p>
        </motion.div>

        {/* Feature Card 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="w-full md:w-1/3 bg-white/10 backdrop-blur-md rounded-xl p-6 border border-gray-700 text-center"
        >
          <Image src="/images/agile.png" alt="Agile Security" width={80} height={80} className="mx-auto" />
          <h3 className="text-xl font-semibold mt-4">Agile Security Solutions</h3>
          <p className="text-gray-400 mt-2 text-sm">
            Rapid, adaptive solutions that evolve with the ever-changing cybersecurity landscape.
          </p>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
        className="mt-12 text-center"
      >
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold uppercase py-3 px-6">
          Get in Touch
        </button>
      </motion.div>
    </div>
  );
};

export default About;
