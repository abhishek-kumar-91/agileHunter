"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";





export const AnimatedText = ( { text} : {text:string}) => {
    const [displayedText, setDisplayedText] = useState<string>("");
  const [index, setIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const speed = isDeleting ? 50 : 100; // Faster deleting for natural feel

    const timeout = setTimeout(() => {
      if (!isDeleting && index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      } else if (isDeleting && index > 0) {
        setDisplayedText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      } else {
        setIsDeleting(!isDeleting);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text]);
  return (
    <motion.h1
      className="text-5xl h-28 font-bold text-gray-900 duration-300 ease-linear"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
    >
      {displayedText}
    </motion.h1>
  );
};


