"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import BranchModal from "./BranchModal";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const slogans = [
  "NO LIMITS • NO EXCUSES",
  "STRONGER EVERY DAY",
  "BUILD YOUR BEST VERSION",
  "DISCIPLINE BEATS MOTIVATION",
];

export default function Hero() {
  const [openModal, setOpenModal] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  const shouldReduceMotion = useReducedMotion();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % slogans.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const scrollToBranches = () => {
    document.getElementById("branches")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <section className="relative flex min-h-svh items-center justify-center overflow-hidden bg-black text-white">
        {/* Video Background */}

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/logo.png"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover brightness-[0.62]"
        >
          <source src="/gym.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}

        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/70 via-black/75 to-black" />

        {/* Golden Glow
            يظهر فقط على الشاشات الأكبر لتقليل الحمل على الموبايل */}

        {!shouldReduceMotion && (
          <div className="pointer-events-none absolute hidden h-160 w-160 rounded-full bg-yellow-400/10 blur-[120px] sm:block" />
        )}

        {/* Background Logo */}

        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  scale: 0.92,
                }
          }
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  opacity: 0.1,
                  scale: 1,
                }
          }
          transition={{
            duration: shouldReduceMotion ? 0.2 : 0.8,
            ease: "easeOut",
          }}
          className="pointer-events-none absolute hidden sm:block"
        >
          <Image
            src="/logo.png"
            alt=""
            width={430}
            height={430}
            priority
            className="select-none"
          />
        </motion.div>

        {/* Hero Content */}

        <div className="relative z-20 mx-auto w-full max-w-6xl px-5 text-center sm:px-6">
          {/* Main Title */}

          <motion.h1
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 25,
                  }
            }
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            transition={{
              duration: shouldReduceMotion ? 0.2 : 0.55,
              ease: "easeOut",
            }}
            className="bg-linear-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-4xl font-black leading-tight tracking-[2px] text-transparent sm:text-6xl sm:tracking-[5px] md:text-8xl md:tracking-[7px] lg:text-9xl"
          >
            CROSSFIT OXYGEN
          </motion.h1>

          {/* Slogans */}

          <AnimatePresence mode="wait">
            <motion.p
              key={textIndex}
              initial={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: shouldReduceMotion ? 0 : -8,
              }}
              transition={{
                duration: shouldReduceMotion ? 0.15 : 0.25,
              }}
              className="mt-5 text-sm font-bold uppercase tracking-[1.5px] text-yellow-400 sm:mt-7 sm:text-lg sm:tracking-[4px] md:text-2xl md:tracking-[6px]"
            >
              {slogans[textIndex]}
            </motion.p>
          </AnimatePresence>

          {/* Spacer */}

          <div className="mx-auto mt-6 h-2 max-w-3xl sm:mt-8" />

          {/* Buttons */}

          <motion.div
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    opacity: 1,
                    y: 0,
                  }
            }
            transition={{
              duration: shouldReduceMotion ? 0.2 : 0.5,
              delay: shouldReduceMotion ? 0 : 0.2,
            }}
            className="mt-9 flex flex-col justify-center gap-3 sm:mt-12 sm:flex-row sm:gap-5"
          >
            <button
              type="button"
              onClick={() => setOpenModal(true)}
              className="w-full rounded-full bg-yellow-400 px-8 py-3.5 text-base font-bold text-black shadow-lg transition-transform duration-200 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(250,204,21,.5)] active:scale-[0.98] sm:w-auto sm:px-10 sm:py-4 sm:text-lg"
            >
              🔥 اشترك الآن
            </button>

            <button
              type="button"
              onClick={scrollToBranches}
              className="w-full rounded-full border border-yellow-400 px-8 py-3.5 text-base font-bold text-yellow-400 transition-colors duration-200 hover:bg-yellow-400 hover:text-black active:scale-[0.98] sm:w-auto sm:px-10 sm:py-4 sm:text-lg"
            >
              📍 استكشف الفروع
            </button>
          </motion.div>

          {/* Stats */}

          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0.2 : 0.5,
              delay: shouldReduceMotion ? 0 : 0.35,
            }}
            className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-2 sm:mt-16 sm:gap-4 md:gap-6"
          >
            {/* Members */}

            <div className="rounded-xl border border-yellow-500/20 bg-white/5 p-3 backdrop-blur-sm sm:rounded-2xl sm:p-5 md:p-6">
              <h3 className="text-2xl font-black text-yellow-400 sm:text-4xl md:text-5xl">
                +
                {inView && (
                  <CountUp
                    end={5000}
                    duration={shouldReduceMotion ? 0.4 : 1.5}
                    separator=","
                  />
                )}
              </h3>

              <p className="mt-2 text-[11px] text-gray-300 sm:mt-3 sm:text-sm md:text-base">
                عضو نشط
              </p>
            </div>

            {/* Experience */}

            <div className="rounded-xl border border-yellow-500/20 bg-white/5 p-3 backdrop-blur-sm sm:rounded-2xl sm:p-5 md:p-6">
              <h3 className="text-2xl font-black text-yellow-400 sm:text-4xl md:text-5xl">
                +
                {inView && (
                  <CountUp
                    end={7}
                    duration={shouldReduceMotion ? 0.4 : 1.2}
                  />
                )}
              </h3>

              <p className="mt-2 text-[11px] text-gray-300 sm:mt-3 sm:text-sm md:text-base">
                سنوات خبرة
              </p>
            </div>

            {/* Branches */}

            <div className="rounded-xl border border-yellow-500/20 bg-white/5 p-3 backdrop-blur-sm sm:rounded-2xl sm:p-5 md:p-6">
              <h3 className="text-2xl font-black text-yellow-400 sm:text-4xl md:text-5xl">
                {inView && (
                  <CountUp
                    end={3}
                    duration={shouldReduceMotion ? 0.4 : 1.2}
                  />
                )}
              </h3>

              <p className="mt-2 text-[11px] text-gray-300 sm:mt-3 sm:text-sm md:text-base">
                فروع
              </p>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down */}

        <button
          type="button"
          onClick={scrollToBranches}
          aria-label="الانتقال إلى الفروع"
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 sm:block"
        >
          <div className="flex h-14 w-9 justify-center rounded-full border-2 border-yellow-400">
            <div className="mt-3 h-2.5 w-2.5 animate-pulse rounded-full bg-yellow-400" />
          </div>
        </button>
      </section>

      {/* Branch Selection Modal */}

      <BranchModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}