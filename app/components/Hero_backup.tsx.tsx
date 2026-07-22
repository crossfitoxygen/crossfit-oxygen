"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BranchModal from "./BranchModal";

const slogans = [
  "NO LIMITS • NO EXCUSES",
  "STRONGER EVERY DAY",
  "BUILD YOUR BEST VERSION",
];

export default function Hero() {
  const [openModal, setOpenModal] = useState(false);

  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % slogans.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden text-white">

        {/* Video */}

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover scale-105 brightness-75"
        >
          <source src="/gym.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/70" />

        {/* Golden Glow */}

        <div className="absolute h-[750px] w-[750px] rounded-full bg-yellow-400/10 blur-[170px]" />

        {/* Logo */}

        <motion.div
          initial={{
            opacity: 0,
            scale: .8,
          }}
          animate={{
            opacity: .15,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="absolute"
        >
          <Image
            src="/logo.png"
            alt="CrossFit Oxygen"
            width={430}
            height={430}
            priority
            className="select-none drop-shadow-[0_0_80px_rgba(250,204,21,.6)]"
          />
        </motion.div>

        {/* Hero */}

        <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">

          <motion.h1
            initial={{
              opacity: 0,
              y: 70,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-6xl font-black tracking-[6px] text-transparent md:text-8xl lg:text-9xl"
          >
            CROSSFIT OXYGEN
          </motion.h1>

          {/* Animated Text */}

          <motion.p
            key={textIndex}
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: .5,
            }}
            className="mt-7 text-lg font-bold uppercase tracking-[6px] text-yellow-400 md:text-2xl"
          >
            {slogans[textIndex]}
          </motion.p>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: .8,
            }}
            className="mx-auto mt-10 max-w-3xl text-lg leading-9 text-gray-300 md:text-xl"
          >
            أكبر مجتمع CrossFit في مصر.
            <br />
            انضم إلينا وابدأ رحلتك نحو القوة واللياقة مع أفضل المدربين.
          </motion.p>
                    {/* Buttons */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1,
            }}
            className="mt-14 flex flex-wrap justify-center gap-5"
          >
            <button
              onClick={() => setOpenModal(true)}
              className="rounded-full bg-yellow-400 px-10 py-4 text-lg font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(250,204,21,.7)]"
            >
              🔥 اشترك الآن
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("branches")
                  ?.scrollIntoView({
                    behavior: "smooth",
                  })
              }
              className="rounded-full border border-yellow-400 px-10 py-4 text-lg font-bold text-yellow-400 transition-all duration-300 hover:bg-yellow-400 hover:text-black"
            >
              📍 استكشف الفروع
            </button>
          </motion.div>

          {/* Stats */}

          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.3,
            }}
            className="mx-auto mt-20 grid max-w-2xl grid-cols-3 gap-8"
          >
            <div className="rounded-2xl border border-yellow-500/20 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="text-5xl font-black text-yellow-400">
                +5000
              </h3>

              <p className="mt-3 text-gray-300">
                عضو نشط
              </p>
            </div>

            <div className="rounded-2xl border border-yellow-500/20 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="text-5xl font-black text-yellow-400">
                +7
              </h3>

              <p className="mt-3 text-gray-300">
                سنوات خبرة
              </p>
            </div>

            <div className="rounded-2xl border border-yellow-500/20 bg-white/5 p-6 backdrop-blur-md">
              <h3 className="text-5xl font-black text-yellow-400">
                3
              </h3>

              <p className="mt-3 text-gray-300">
                فروع
              </p>
            </div>
          </motion.div>

        </div>

        {/* Scroll Down */}

        <button
          onClick={() =>
            document
              .getElementById("branches")
              ?.scrollIntoView({
                behavior: "smooth",
              })
          }
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <div className="flex h-16 w-10 justify-center rounded-full border-2 border-yellow-400">
            <div className="mt-3 h-3 w-3 animate-pulse rounded-full bg-yellow-400" />
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