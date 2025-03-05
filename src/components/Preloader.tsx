"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const Preloader = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Show spinner for 2 seconds
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="fixed inset-0 flex justify-center items-center  z-50">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          >
            <Image
              src="/images/navlogo.png"
              width={100}
              height={100}
              alt="AgileHunt Logo"
              className="animate-pulse"
            />
          </motion.div>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
};

export default Preloader;
