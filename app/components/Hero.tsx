"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  // تغيير الـ slogan كل 2.5 ثانية
  useEffect(() => {
    const interval = window.setInterval(() => {
      setTextIndex((prev) => (prev + 1) % slogans.length);
    }, 2500);

    return () => window.clearInterval(interval);
  }, []);

  const scrollToBranches = () => {
    document.getElementById("branches")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white">
        {/* =========================
            Video Background
        ========================== */}

        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full scale-105 object-cover brightness-[0.65]"
          aria-hidden="true"
        >
          <source src="/gym.mp4" type="video/mp4" />
        </video>

        {/* =========================
            Dark Overlay
        ========================== */}

        <div
          className="absolute inset-0 bg-linear-to-b from-black/60 via-black/70 to-black"
          aria-hidden="true"
        />

        {/* =========================
            Golden Glow
        ========================== */}

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute h-125 w-125 rounded-full bg-yellow-400/10 blur-[120px] md:h-175 md:w-175"
          aria-hidden="true"
        />

        {/* =========================
            Background Logo
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.85,
          }}
          animate={{
            opacity: 0.1,
            scale: 1,
            rotate: 360,
          }}
          transition={{
            duration: 80,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute select-none"
          aria-hidden="true"
        >
          <Image
            src="/logo.png"
            alt=""
            width={430}
            height={430}
            priority
            className="h-auto w-65 sm:w-82.5 md:w-107.5"
          />
        </motion.div>

        {/* =========================
            Hero Content
        ========================== */}

        <div className="relative z-20 mx-auto w-full max-w-6xl px-5 text-center sm:px-6">
          {/* Main Title */}

          <motion.h1
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="bg-linear-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-4xl font-black tracking-[3px] text-transparent sm:text-6xl sm:tracking-[5px] md:text-8xl md:tracking-[7px] lg:text-9xl lg:tracking-[8px]"
          >
            CROSSFIT OXYGEN
          </motion.h1>

          {/* =========================
              Animated Slogan
          ========================== */}

          <div className="min-h-11.25 sm:min-h-13.75">
            <AnimatePresence mode="wait">
              <motion.p
                key={textIndex}
                initial={{
                  opacity: 0,
                  y: 12,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -12,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className="mt-6 text-sm font-bold uppercase tracking-[3px] text-yellow-400 sm:text-lg sm:tracking-[5px] md:text-2xl md:tracking-[6px]"
              >
                {slogans[textIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* =========================
              Description
          ========================== */}

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 0.6,
            }}
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300 sm:text-base sm:leading-8 md:text-xl md:leading-9"
          >
            القوة • اللياقة • الانضباط
          </motion.p>

          {/* =========================
              Buttons
          ========================== */}

          <motion.div
            initial={{
              opacity: 0,
              y: 25,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.7,
              duration: 0.6,
            }}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:mt-12 sm:flex-row sm:flex-wrap sm:gap-5"
          >
            {/* Subscribe */}

            <button
              type="button"
              onClick={() => setOpenModal(true)}
              className="w-full rounded-full bg-yellow-400 px-8 py-3.5 text-base font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,.6)] active:scale-95 sm:w-auto sm:px-10 sm:py-4 sm:text-lg"
            >
              🔥 اشترك الآن
            </button>

            {/* Branches */}

            <button
              type="button"
              onClick={scrollToBranches}
              className="w-full rounded-full border border-yellow-400 px-8 py-3.5 text-base font-bold text-yellow-400 transition-all duration-300 hover:bg-yellow-400 hover:text-black active:scale-95 sm:w-auto sm:px-10 sm:py-4 sm:text-lg"
            >
              📍 استكشف الفروع
            </button>
          </motion.div>

          {/* =========================
              Stats
          ========================== */}

          <motion.div
            ref={ref}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.9,
              duration: 0.6,
            }}
            className="mx-auto mt-12 grid w-full max-w-2xl grid-cols-3 gap-2 sm:mt-16 sm:gap-4 md:gap-6"
          >
            {/* Members */}

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border border-yellow-500/20 bg-white/5 p-3 backdrop-blur-sm sm:rounded-2xl sm:p-5 md:p-6"
            >
              <h3 className="text-2xl font-black text-yellow-400 sm:text-4xl md:text-5xl">
                +
                {inView && (
                  <CountUp
                    end={5000}
                    duration={2}
                    separator=","
                  />
                )}
              </h3>

              <p className="mt-2 text-xs text-gray-300 sm:mt-3 sm:text-sm md:text-base">
                عضو نشط
              </p>
            </motion.div>

            {/* Experience */}

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border border-yellow-500/20 bg-white/5 p-3 backdrop-blur-sm sm:rounded-2xl sm:p-5 md:p-6"
            >
              <h3 className="text-2xl font-black text-yellow-400 sm:text-4xl md:text-5xl">
                +
                {inView && (
                  <CountUp
                    end={7}
                    duration={1.5}
                  />
                )}
              </h3>

              <p className="mt-2 text-xs text-gray-300 sm:mt-3 sm:text-sm md:text-base">
                سنوات خبرة
              </p>
            </motion.div>

            {/* Branches Count */}

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="rounded-xl border border-yellow-500/20 bg-white/5 p-3 backdrop-blur-sm sm:rounded-2xl sm:p-5 md:p-6"
            >
              <h3 className="text-2xl font-black text-yellow-400 sm:text-4xl md:text-5xl">
                {inView && (
                  <CountUp
                    end={3}
                    duration={1.5}
                  />
                )}
              </h3>

              <p className="mt-2 text-xs text-gray-300 sm:mt-3 sm:text-sm md:text-base">
                فروع
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* =========================
            Scroll Down
        ========================== */}

        <button
          type="button"
          onClick={scrollToBranches}
          aria-label="انتقل إلى الفروع"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 transition-opacity duration-300 hover:opacity-80 sm:bottom-8"
        >
          <div className="flex h-14 w-9 justify-center rounded-full border-2 border-yellow-400 sm:h-16 sm:w-10">
            <div className="mt-3 h-2.5 w-2.5 animate-pulse rounded-full bg-yellow-400 sm:h-3 sm:w-3" />
          </div>
        </button>
      </section>

      {/* =========================
          Branch Selection Modal
      ========================== */}

      <BranchModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}