"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden text-white">

      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover scale-110"
      >
        <source src="/gym.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75"></div>

      {/* Golden Glow */}
      <div className="absolute h-[700px] w-[700px] rounded-full bg-yellow-400/10 blur-[150px]"></div>

      {/* Background Logo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.15, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute"
      >
        <Image
          src="/logo.png"
          alt="CrossFit Oxygen"
          width={430}
          height={430}
          priority
          className="drop-shadow-[0_0_80px_rgba(250,204,21,.6)] select-none"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 text-center">

        <motion.h1
          initial={{ opacity: 0, y: 70 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-[8px] bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent"
        >
          CROSSFIT OXYGEN
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .4 }}
          className="mt-6 text-yellow-400 tracking-[6px] uppercase text-lg md:text-2xl font-bold"
        >
          NO LIMITS • NO EXCUSES
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .8 }}
          className="mt-8 text-gray-300 text-lg md:text-xl leading-9 max-w-3xl mx-auto"
        >
          <br />
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-12 flex justify-center gap-5 flex-wrap"
        >
          <a
            href="https://wa.me/201107802016"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-yellow-400 px-10 py-4 text-lg font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(250,204,21,.6)]"
          >
            🔥 اشترك الآن
          </a>

          
        </motion.div>

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-16 grid grid-cols-3 gap-8 max-w-xl mx-auto"
        >
          <div>
            <h3 className="text-4xl font-black text-yellow-400">
              +1000
            </h3>

            <p className="mt-2 text-gray-400">
              عضو نشط
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-yellow-400">
              +7
            </h3>

            <p className="mt-2 text-gray-400">
              سنوات خبرة
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-black text-yellow-400">
              24/7
            </h3>

            <p className="mt-2 text-gray-400">
              دعم الأعضاء
            </p>
          </div>
        </motion.div>

      </div>

      {/* Scroll */}
      <a
        href="#gallery"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <div className="flex h-16 w-10 justify-center rounded-full border-2 border-yellow-400">
          <div className="mt-3 h-2 w-2 rounded-full bg-yellow-400 animate-pulse"></div>
        </div>
      </a>

    </section>
  );
}