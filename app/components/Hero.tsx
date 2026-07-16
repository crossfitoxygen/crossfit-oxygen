"use client";

import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden">

      {/* اللوجو بالخلفية */}
      <img
        src="/logo.png"
        alt="CrossFit Oxygen Logo"
        className="absolute w-[420px] md:w-[600px] opacity-15 animate-pulse"
      />

"
      {/* إضاءة خلفية */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-yellow-400/10 blur-3xl"></div>

      {/* اسم الجيم */}
      <h1 className="relative z-10 text-5xl md:text-8xl font-black tracking-[8px] bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(250,204,21,.8)]">
      </h1>

      {/* الشعار */}
      <p className="relative z-10 mt-6 uppercase tracking-[8px] text-yellow-400 font-semibold text-center">
      </p>

      {/* سهم النزول */}
      <a
        href="#services"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
         ابدأ الآن       
 <div className="w-10 h-16 rounded-full border-2 border-yellow-400 flex justify-center">
          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 animate-pulse"></div>
        </div>
      </a>
      <motion.h1
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
</motion.h1>
<video
  autoPlay
  muted
  loop
  playsInline
  className="absolute inset-0 w-full h-full object-cover opacity-40"
>
  <source src="/gym.mp4" type="video/mp4" />
</video>

    </section>
  );
}