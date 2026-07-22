"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useSwipeable } from "react-swipeable";

const branches = [
  {
    id: "obour",
    title: "فرع العبور",
    phone: "01107802016",
    map: "https://maps.app.goo.gl/3oFyyqpJuHe3yK718?g_st=iw",
    images: [
      "/gallery1.jpeg",
      "/gallery2.jpeg",
      "/gallery3.jpeg",
      "/gallery4.jpeg",
      "/gallery5.jpeg",
      "/gallery6.jpeg",
      "/gallery7.jpeg",
    ],
  },

  {
    id: "zagazig",
    title: "فرع الزقازيق",
    phone: "01111111111",
    map: "https://maps.app.goo.gl/nRoZ88PGwsV7fjn16?g_st=iw",
    images: [
      "/gallery1.jpeg",
      "/gallery2.jpeg",
      "/gallery3.jpeg",
      "/gallery4.jpeg",
      "/gallery5.jpeg",
      "/gallery6.jpeg",
      "/gallery7.jpeg",
    ],
  },

  {
    id: "rehab",
    title: "فرع الرحاب",
    phone: "01106385482",
    map: "https://maps.app.goo.gl/FTymPdcq7hafNX649?g_st=iw",
    images: [
      "/gallery1.jpeg",
      "/gallery2.jpeg",
      "/gallery3.jpeg",
      "/gallery4.jpeg",
      "/gallery5.jpeg",
      "/gallery6.jpeg",
      "/gallery7.jpeg",
    ],
  },
];

export default function Gallery() {
  const [branchIndex, setBranchIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  const currentBranch = branches[branchIndex];
  const images = currentBranch.images;
    useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;

      if (e.key === "Escape") {
        setSelectedIndex(null);
      }

      if (e.key === "ArrowRight") {
        setSelectedIndex((prev) =>
          prev === null
            ? null
            : prev === images.length - 1
            ? 0
            : prev + 1
        );
      }

      if (e.key === "ArrowLeft") {
        setSelectedIndex((prev) =>
          prev === null
            ? null
            : prev === 0
            ? images.length - 1
            : prev - 1
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [selectedIndex, images.length]);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (selectedIndex === null) return;

      setSelectedIndex(
        selectedIndex === images.length - 1
          ? 0
          : selectedIndex + 1
      );
    },

    onSwipedRight: () => {
      if (selectedIndex === null) return;

      setSelectedIndex(
        selectedIndex === 0
          ? images.length - 1
          : selectedIndex - 1
      );
    },

    preventScrollOnSwipe: true,
    trackTouch: true,
  });

  return (
    <section
      id="gallery"
      className="bg-black py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <h2 className="text-center text-5xl font-black text-yellow-400">
          معرض الصور
        </h2>

        <p className="mt-4 text-center text-gray-400">
          اختر الفرع واستكشف أجواء التدريب
        </p>

        <div className="mt-12 mb-14 flex flex-wrap justify-center gap-4">

          {branches.map((branch, index) => (

            <button
              key={branch.id}
              onClick={() => {
                setBranchIndex(index);
                setSelectedIndex(null);
              }}
              className={`rounded-full px-8 py-3 font-bold transition-all duration-300 ${
                branchIndex === index
                  ? "bg-yellow-400 text-black shadow-lg shadow-yellow-500/30"
                  : "border border-yellow-500/20 bg-zinc-900 text-white hover:border-yellow-400 hover:bg-zinc-800"
              }`}
            >
              {branch.title}
            </button>

          ))}

        </div>

        <motion.div
          key={currentBranch.id}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .4 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >

          {images.map((img, index) => (
            <motion.div
              key={`${currentBranch.id}-${index}`}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: .25 }}
              onClick={() => setSelectedIndex(index)}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-yellow-500/20 bg-zinc-900"
            >
              <Image
                src={img}
                alt={`${currentBranch.title} ${index + 1}`}
                width={700}
                height={500}
                loading="lazy"
                className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}

        </motion.div>
      </div>
            <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            {...swipeHandlers}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95 p-6"
          >
            {/* Close */}
            <button
              onClick={() => setSelectedIndex(null)}
              className="absolute top-6 right-6 rounded-full bg-black/40 p-3 text-white transition hover:text-yellow-400"
            >
              <X size={34} />
            </button>

            {/* Previous */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(
                  selectedIndex === 0
                    ? images.length - 1
                    : selectedIndex - 1
                );
              }}
              className="absolute left-6 rounded-full bg-black/40 p-3 text-white transition hover:text-yellow-400"
            >
              <ChevronLeft size={42} />
            </button>

            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="flex flex-col items-center"
            >
              <Image
                src={images[selectedIndex]}
                alt={`${currentBranch.title}`}
                width={1400}
                height={900}
                priority
                className="max-h-[85vh] w-auto rounded-3xl"
              />

              <div className="mt-6 text-center">
                <h3 className="text-2xl font-bold text-yellow-400">
                  {currentBranch.title}
                </h3>

                <div className="mt-3 flex items-center justify-center gap-3">
                  <div className="h-1 w-24 rounded-full bg-zinc-700">
                    <div
                      className="h-1 rounded-full bg-yellow-400 transition-all duration-300"
                      style={{
                        width: `${((selectedIndex + 1) / images.length) * 100}%`,
                      }}
                    />
                  </div>

                  <span className="text-sm text-gray-300">
                    {selectedIndex + 1} / {images.length}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Next */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIndex(
                  selectedIndex === images.length - 1
                    ? 0
                    : selectedIndex + 1
                );
              }}
              className="absolute right-6 rounded-full bg-black/40 p-3 text-white transition hover:text-yellow-400"
            >
              <ChevronRight size={42} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}