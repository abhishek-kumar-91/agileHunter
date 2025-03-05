"use client";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    company: "TechGuard",
    logo: "/images/techguard.avif",
    feedback: "AgileHunt provided top-notch security testing and helped us identify critical vulnerabilities.",
  },
  {
    company: "CyberFort",
    logo: "/images/cyberfort.jpeg",
    feedback: "Their penetration testing service is exceptional! Highly recommended for security assessments.",
  },
  {
    company: "DataSecure",
    logo: "/images/datasecure.png",
    feedback: "AgileHunt's expertise in cloud security saved us from major threats. Outstanding work!",
  },
  {
    company: "ShieldNet",
    logo: "/images/sheildnet.avif",
    feedback: "Reliable security solutions that strengthened our entire infrastructure. Great experience!",
  },
];

const Testimonials = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroll = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollLeft += 1;
        if (
          carouselRef.current.scrollLeft >=
          carouselRef.current.scrollWidth / 2
        ) {
          carouselRef.current.scrollLeft = 0;
        }
      }
    };
    const interval = setInterval(scroll, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" text-gray-700 py-20 px-6">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-700">
        Trusted by Industry Leaders
      </h2>
      
      {/* Infinite Scroll Wrapper */}
      <div className="relative overflow-hidden scroll-hide">
        <div ref={carouselRef} className="flex space-x-6 w-full overflow-x-auto no-scrollbar ">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <motion.div
              key={index}
              className="min-w-[300px] md:min-w-[400px] p-6 bg-gray-100 border-2 border-white rounded-lg shadow-lg flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.logo}
                  alt={testimonial.company}
                  className="w-12 h-12 object-contain"
                />
                <h3 className="text-xl font-semibold text-gray-700">{testimonial.company}</h3>
              </div>
              <p className="mt-4 text-gray-400">"{testimonial.feedback}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
