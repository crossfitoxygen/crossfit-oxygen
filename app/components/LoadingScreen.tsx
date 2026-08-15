"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-0 z-99999 flex items-center justify-center bg-black"
        >
          <div className="flex w-full flex-col items-center px-6">
            {/* Logo */}

            <motion.div
              initial={{
                scale: 0.85,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
            >
              <Image
                src="/logo.png"
                alt="CrossFit Oxygen"
                width={150}
                height={150}
                priority
                className="h-auto w-30 sm:w-37.5"
              />
            </motion.div>

            {/* Brand */}

            <motion.h2
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.4,
              }}
              className="mt-5 text-center text-2xl font-black tracking-wider text-yellow-400 sm:text-3xl"
            >
              CROSSFIT OXYGEN
            </motion.h2>

            {/* Loading Bar */}

            <div className="mt-7 h-1 w-48 overflow-hidden rounded-full bg-zinc-800 sm:w-56">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 0.9,
                  ease: "easeInOut",
                }}
                className="h-full w-20 rounded-full bg-yellow-400 sm:w-24"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}