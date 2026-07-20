"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/201107802016"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{
        delay: 2,
        type: "spring",
        stiffness: 260,
        damping: 18,
      }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      className="
        fixed
        bottom-6
        right-6
        z-[999]
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-green-500
        text-white
        shadow-[0_0_25px_rgba(34,197,94,.6)]
        transition
      "
    >
      <FaWhatsapp size={34} />
    </motion.a>
  );
}