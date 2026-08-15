"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, ArrowUpRight } from "lucide-react";
import { branches } from "../data/branches";

export default function Branches() {
  return (
    <section
      id="branches"
      className="relative overflow-hidden bg-linear-to-b from-black via-zinc-950 to-black py-20 sm:py-24 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        {/* Title */}

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-black text-yellow-400 sm:text-4xl md:text-5xl"
        >
          فروعنا
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-4 max-w-xl text-center text-sm leading-7 text-gray-400 sm:text-base"
        >
          اختر أقرب فرع إليك وابدأ رحلتك الرياضية
        </motion.p>

        {/* Branches */}

        <div className="mt-12 grid gap-6 sm:mt-14 md:gap-8 lg:grid-cols-3">
          {branches.map((branch, index) => (
            <motion.div
              key={branch.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              className="group overflow-hidden rounded-2xl border border-yellow-500/20 bg-zinc-900 shadow-lg transition-[border-color,box-shadow] duration-300 hover:border-yellow-400 hover:shadow-yellow-500/10 sm:rounded-3xl"
            >
              {/* Image */}

              <div className="relative h-56 overflow-hidden sm:h-64">
                <Image
                  src={branch.image}
                  alt={branch.name}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />

                <h3 className="absolute bottom-4 right-4 text-2xl font-black text-yellow-400 drop-shadow-lg sm:bottom-5 sm:right-5 sm:text-3xl">
                  {branch.name}
                </h3>
              </div>

              {/* Content */}

              <div className="space-y-4 p-5 sm:space-y-5 sm:p-7">
                {/* Address */}

                <div className="flex items-start gap-3">
                  <MapPin
                    size={21}
                    className="mt-1 shrink-0 text-yellow-400"
                  />

                  <span className="text-sm leading-7 text-gray-300 sm:text-base">
                    {branch.address}
                  </span>
                </div>

                {/* Phone */}

                <div className="flex items-center gap-3">
                  <Phone
                    size={19}
                    className="shrink-0 text-yellow-400"
                  />

                  <a
                    href={`tel:${branch.phone}`}
                    className="text-sm text-gray-300 transition-colors hover:text-yellow-400 sm:text-base"
                  >
                    {branch.phone}
                  </a>
                </div>

                {/* Buttons */}

                <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:pt-3">
                  {/* WhatsApp Numbers */}

                  <div className="flex flex-1 flex-col gap-2">
                    {branch.whatsapp.map((number, whatsappIndex) => (
                      <a
                        key={number}
                        href={`https://wa.me/${number}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full bg-green-500 py-3 text-center text-sm font-bold text-white transition-colors duration-200 hover:bg-green-600 sm:text-base"
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
                    className="flex min-h-12 items-center justify-center rounded-full border border-yellow-500 px-5 text-yellow-400 transition-colors duration-200 hover:bg-yellow-400 hover:text-black"
                  >
                    <ArrowUpRight size={21} />
                    <span className="mr-2 text-sm font-bold sm:hidden">
                      الموقع
                    </span>
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