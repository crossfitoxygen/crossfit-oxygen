"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const images = [
    "/gallery1.jpeg",
    "/gallery2.jpeg",
    "/gallery3.jpeg",
    "/gallery4.jpeg",
    "/gallery5.jpeg",
    "/gallery6.jpeg",
    "/gallery7.jpeg",
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-extrabold text-center text-yellow-400 mb-4">
          معرض الصور
        </h2>

        <p className="text-center text-gray-400 mb-14">
          شاهد أجواء التدريب داخل CrossFit Oxygen
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {images.map((img, index) => (

            <motion.div
              key={index}
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedIndex(index)}
              className="cursor-pointer overflow-hidden rounded-3xl border border-yellow-500/20"
            >
              <Image
                src={img}
                alt={`Gallery ${index + 1}`}
                width={600}
                height={450}
                className="h-72 w-full object-cover transition duration-700 hover:scale-110"
              />
            </motion.div>

          ))}

        </div>

      </div>

      <AnimatePresence>

        {selectedIndex !== null && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-6"
          >

            {/* زر الإغلاق */}

            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 text-white hover:text-yellow-400 transition"
            >
              <X size={42} />
            </button>

            {/* السابق */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(
                  selectedIndex === 0
                    ? images.length - 1
                    : selectedIndex - 1
                );
              }}
              className="absolute left-6 text-white hover:text-yellow-400 transition"
            >
              <ChevronLeft size={60} />
            </button>

            {/* الصورة */}

            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex]}
                alt="Gallery"
                width={1400}
                height={900}
                className="max-h-[90vh] w-auto rounded-2xl"
              />
            </motion.div>

            {/* التالي */}

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(
                  selectedIndex === images.length - 1
                    ? 0
                    : selectedIndex + 1
                );
              }}
              className="absolute right-6 text-white hover:text-yellow-400 transition"
            >
              <ChevronRight size={60} />
            </button>

          </motion.div>

        )}

      </AnimatePresence>

    </section>
  );
}