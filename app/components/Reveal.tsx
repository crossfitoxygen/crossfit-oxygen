"use client";

import { motion, useReducedMotion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
};

export default function Reveal({
  children,
  delay = 0,
  y = 35,
}: Props) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? false
          : {
              opacity: 0,
              y,
            }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : {
              opacity: 1,
              y: 0,
            }
      }
      viewport={{
        once: true,
        amount: 0.1,
      }}
      transition={
        shouldReduceMotion
          ? undefined
          : {
              duration: 0.45,
              delay,
              ease: "easeOut",
            }
      }
    >
      {children}
    </motion.div>
  );
}