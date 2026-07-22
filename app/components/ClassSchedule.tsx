"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ClassSchedule() {
  return (
    <section
      id="schedule"
      className="relative overflow-hidden bg-black py-24"
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-500/10 blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
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
          className="mx-auto mt-4 max-w-2xl text-center text-gray-400"
        >
          تعرف على مواعيد جميع الحصص الأسبوعية داخل فرع العبور.
        </motion.p>
                <motion.div
          initial={{ opacity: 0, scale: .95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <div className="group relative overflow-hidden rounded-3xl border border-yellow-500/20 bg-zinc-900 shadow-2xl">

            <Image
              src="/class-schedule.jpg"
              alt="جدول الحصص"
              width={1000}
              height={1400}
              priority
              className="transition duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/40">

              <span className="rounded-full border border-yellow-400 bg-black/70 px-6 py-3 font-bold text-yellow-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                اضغط لتكبير الجدول
              </span>

            </div>

          </div>
        </motion.div>
              </div>
    </section>
  );
}