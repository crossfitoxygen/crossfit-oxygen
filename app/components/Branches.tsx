"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";
import { branches } from "../data/branches";

export default function Branches() {
  return (
    <section
      id="branches"
      className="relative overflow-hidden bg-gradient-to-b from-black via-zinc-950 to-black py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-5xl font-black text-yellow-400"
        >
          فروعنا
        </motion.h2>

        <p className="mt-4 text-center text-gray-400">
          اختر أقرب فرع إليك وابدأ رحلتك الرياضية
        </p>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group overflow-hidden rounded-3xl border border-yellow-500/20 bg-zinc-900 shadow-xl transition-all duration-500 hover:border-yellow-400 hover:shadow-yellow-500/20"
            >
              {/* الصورة */}

              <div className="relative h-64 overflow-hidden">
                <Image
                  src={branch.image}
                  alt={branch.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <h3 className="absolute bottom-5 right-5 text-3xl font-black text-yellow-400 drop-shadow-lg">
                  {branch.name}
                </h3>
              </div>

              {/* المحتوى */}

              <div className="space-y-5 p-7">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={22}
                    className="mt-1 text-yellow-400"
                  />

                  <span className="leading-7 text-gray-300">
                    {branch.address}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone
                    size={20}
                    className="text-yellow-400"
                  />

                  <a
                    href={`tel:${branch.phone}`}
                    className="transition hover:text-yellow-400"
                  >
                    {branch.phone}
                  </a>
                </div>

                <div className="flex gap-3 pt-4">
                  <a
                    href={`https://wa.me/${branch.whatsapp}`}
                    target="_blank"
                    className="flex-1 rounded-full bg-green-500 py-3 text-center font-bold text-white transition duration-300 hover:scale-105 hover:bg-green-600"
                  >
                    واتساب
                  </a>

                  <a
                    href={branch.map}
                    target="_blank"
                    className="rounded-full border border-yellow-500 px-5 text-yellow-400 transition duration-300 hover:bg-yellow-400 hover:text-black"
                  >
                    <ArrowUpRight size={22} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}