"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ClassSchedule() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <section
        id="schedule"
        className="relative overflow-hidden bg-black py-24"
      >

        {/* Video */}

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-20"
        >
          <source
            src="/class-schedule.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay */}

        <div className="absolute inset-0 bg-black/80" />

        {/* Glow */}

        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[170px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="text-center text-5xl font-black text-yellow-400"
          >
            جدول الحصص
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: .2 }}
            viewport={{ once: true }}
            className="mx-auto mt-5 max-w-2xl text-center text-gray-400"
          >
            جميع مواعيد الحصص الأسبوعية داخل CrossFit Oxygen
          </motion.p>
                    <motion.div
            initial={{ opacity: 0, scale: .9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: .6 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-center"
          >

            <motion.button
              whileHover={{
                scale: 1.03,
              }}
              whileTap={{
                scale: .98,
              }}
              onClick={() => setOpen(true)}
              className="group relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-zinc-900 shadow-2xl"
            >

              <Image
                src="/class-schedule.jpg"
                alt="Class Schedule"
                width={900}
                height={1200}
                priority
                className="transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-500 group-hover:bg-black/45">

                <div className="translate-y-10 rounded-full border border-yellow-400 bg-black/80 px-7 py-3 font-bold text-yellow-400 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                  🔍 اضغط لتكبير الجدول

                </div>

              </div>

            </motion.button>

          </motion.div>
                  </div>
      </section>

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-6"
          >

            <button
              onClick={() => setOpen(false)}
              className="absolute right-6 top-6 rounded-full bg-black/60 p-3 text-white transition hover:text-yellow-400"
            >
              <X size={34} />
            </button>

            <motion.div
              initial={{
                scale: .9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: .9,
                opacity: 0,
              }}
              transition={{
                duration: .25,
              }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[92vh] overflow-auto rounded-3xl"
            >

              <Image
                src="/class-schedule.jpg"
                alt="Class Schedule"
                width={1400}
                height={1900}
                priority
                className="h-auto w-auto rounded-3xl"
              />

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

    </>
  );
}