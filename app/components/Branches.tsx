"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";
import { branches } from "../data/branches";

export default function Branches() {
  return (
    <section
      id="branches"
      className="relative overflow-hidden bg-linear-to-b from-black via-zinc-950 to-black py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-black text-yellow-400 sm:text-5xl"
        >
          فروعنا
        </motion.h2>

        <p className="mt-4 text-center text-gray-400">
          اختر أقرب فرع إليك وابدأ رحلتك الرياضية
        </p>

        {/* Branches */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">

          {branches.map((branch, index) => (

            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
                scale: 1.01,
              }}
              className="group overflow-hidden rounded-3xl border border-yellow-500/20 bg-zinc-900 shadow-xl transition-all duration-500 hover:border-yellow-400 hover:shadow-yellow-500/20"
            >

              {/* Image */}
              <div className="relative h-64 overflow-hidden">

                <Image
                  src={branch.image}
                  alt={branch.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

                <h3 className="absolute bottom-5 right-5 text-3xl font-black text-yellow-400 drop-shadow-lg">
                  {branch.name}
                </h3>

              </div>

              {/* Content */}
              <div className="space-y-5 p-7">

                {/* Address */}
                <div className="flex items-start gap-3">

                  <MapPin
                    size={22}
                    className="mt-1 shrink-0 text-yellow-400"
                  />

                  <span className="leading-7 text-gray-300">
                    {branch.address}
                  </span>

                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">

                  <Phone
                    size={20}
                    className="shrink-0 text-yellow-400"
                  />

                  <a
                    href={`tel:${branch.phone}`}
                    className="transition hover:text-yellow-400"
                  >
                    {branch.phone}
                  </a>

                </div>

                {/* Buttons */}
                <div className="flex flex-col gap-3 pt-4 sm:flex-row">

                  {/* WhatsApp Numbers */}
                  <div className="flex flex-1 flex-col gap-2">

                    {branch.whatsapp.map((number, whatsappIndex) => (

                      <a
                        key={number}
                        href={`https://wa.me/${number}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-green-500 py-3 text-center font-bold text-white transition duration-300 hover:scale-[1.02] hover:bg-green-600"
                      >
                        واتساب
                        {branch.whatsapp.length > 1
                          ? ` ${whatsappIndex + 1}`
                          : ""}
                      </a>

                    ))}

                  </div>

                  {/* Google Maps */}
                  <a
                    href={branch.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`موقع ${branch.name} على الخريطة`}
                    className="flex min-h-12 items-center justify-center rounded-full border border-yellow-500 px-5 text-yellow-400 transition duration-300 hover:bg-yellow-400 hover:text-black"
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