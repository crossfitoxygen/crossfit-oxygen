"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 40, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.8 }}
          transition={{ duration: 0.25 }}
          onClick={scrollTop}
          className="
            fixed
            bottom-8
            right-8
            z-50
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            bg-yellow-400
            text-black
            shadow-[0_0_20px_rgba(250,204,21,.45)]
            transition
            hover:scale-110
            hover:bg-yellow-300
          "
        >
          <ChevronUp size={28} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}