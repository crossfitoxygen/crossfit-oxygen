"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black"
        >
          <div className="flex flex-col items-center">

            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/logo.png"
                alt="CrossFit Oxygen"
                width={170}
                height={170}
                priority
              />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .4 }}
              className="mt-6 text-3xl font-black text-yellow-400 tracking-wider"
            >
              CROSSFIT OXYGEN
            </motion.h2>

            <div className="mt-8 h-1 w-56 overflow-hidden rounded-full bg-zinc-800">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="h-full w-24 bg-yellow-400"
              />
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}