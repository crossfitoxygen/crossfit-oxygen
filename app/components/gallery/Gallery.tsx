"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react";
import { useSwipeable } from "react-swipeable";
import { branches } from "../../data/branches";

export default function Gallery() {
  const [branchIndex, setBranchIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const currentBranch = branches[branchIndex];

  /**
   * صور كل فرع
   * نستخدم الـ id لتحديد الصور الخاصة بالفرع.
   */
  const images = useMemo(() => {
    switch (currentBranch.id) {
      case "obour":
        return [
          "/gallery1.jpeg",
          "/gallery2.jpeg",
          "/gallery3.jpeg",
          "/gallery4.jpeg",
          "/gallery5.jpeg",
          "/gallery6.jpeg",
          "/gallery7.jpeg",
        ];

      case "zagazig":
        return [
          "/branches/zagazig/zag-1.jpg",
          "/branches/zagazig/zag-2.jpg",
          "/branches/zagazig/zag-3.jpg",
          "/branches/zagazig/zag-4.jpg",
          "/branches/zagazig/zag-5.jpg",
          "/branches/zagazig/zag-6.jpg",
          "/branches/zagazig/zag-7.jpg",
          "/branches/zagazig/zag-8.jpg",
        ];

      case "rehab":
        return [
          "/branches/rehab/rehab-1.jpg",
          "/branches/rehab/rehab-2.jpg",
        ];

      default:
        return [];
    }
  }, [currentBranch.id]);

  /*
   * إغلاق الـ Lightbox بالـ ESC
   * والتنقل بالأسهم.
   */
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
        return;
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((previous) => {
          if (previous === null || images.length === 0) {
            return null;
          }

          return previous === images.length - 1
            ? 0
            : previous + 1;
        });
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((previous) => {
          if (previous === null || images.length === 0) {
            return null;
          }

          return previous === 0
            ? images.length - 1
            : previous - 1;
        });
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, images.length]);

  /*
   * منع Scroll الصفحة أثناء فتح الصورة.
   */
  useEffect(() => {
    if (selectedIndex === null) return;

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedIndex]);

  /*
   * الصورة السابقة.
   */
  const showPrevious = () => {
    setSelectedIndex((previous) => {
      if (previous === null || images.length === 0) {
        return null;
      }

      return previous === 0
        ? images.length - 1
        : previous - 1;
    });
  };

  /*
   * الصورة التالية.
   */
  const showNext = () => {
    setSelectedIndex((previous) => {
      if (previous === null || images.length === 0) {
        return null;
      }

      return previous === images.length - 1
        ? 0
        : previous + 1;
    });
  };

  /*
   * Swipe للموبايل.
   */
  const swipeHandlers = useSwipeable({
    onSwipedLeft: showNext,
    onSwipedRight: showPrevious,
    preventScrollOnSwipe: true,
    trackTouch: true,
    trackMouse: false,
  });

  /*
   * تغيير الفرع.
   */
  const handleBranchChange = (index: number) => {
    setBranchIndex(index);
    setSelectedIndex(null);
  };

  return (
    <section
      id="gallery"
      className="bg-black py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* العنوان */}

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="text-center text-4xl font-black text-yellow-400 sm:text-5xl"
        >
          معرض الصور
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.45,
            delay: 0.05,
          }}
          className="mt-4 text-center text-sm text-gray-400 sm:text-base"
        >
          اختر الفرع واستكشف أجواء التدريب
        </motion.p>

        {/* أزرار الفروع */}

        <div className="mt-10 flex flex-wrap justify-center gap-3 sm:mt-12">
          {branches.map((branch, index) => (
            <button
              key={`gallery-branch-${branch.id}`}
              type="button"
              onClick={() => handleBranchChange(index)}
              className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all duration-300 sm:px-8 sm:py-3 sm:text-base ${
                branchIndex === index
                  ? "bg-yellow-400 text-black shadow-lg shadow-yellow-500/30"
                  : "border border-yellow-500/20 bg-zinc-900 text-white hover:border-yellow-400 hover:bg-zinc-800"
              }`}
            >
              {branch.name}
            </button>
          ))}
        </div>

        {/* معلومات الفرع */}

        <motion.div
          key={`info-${currentBranch.id}`}
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          className="mb-8 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <h3 className="text-xl font-black text-white sm:text-2xl">
            {currentBranch.name}
          </h3>

          {/* زر الموقع */}

          <a
            href={currentBranch.map}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`فتح موقع ${currentBranch.name}`}
            className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-zinc-900 px-5 py-2.5 text-sm font-bold text-yellow-400 transition-all duration-300 hover:bg-yellow-400 hover:text-black"
          >
            <MapPin size={18} />
            الموقع على الخريطة
          </a>
        </motion.div>

        {/* معرض صور الفرع */}

        <motion.div
          key={`gallery-${currentBranch.id}`}
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.35,
          }}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3"
        >
          {images.map((image, index) => (
            <motion.button
              key={`${currentBranch.id}-image-${index}`}
              type="button"
              whileHover={{
                scale: 1.015,
              }}
              transition={{
                duration: 0.2,
              }}
              onClick={() => setSelectedIndex(index)}
              className="group relative overflow-hidden rounded-2xl border border-yellow-500/20 bg-zinc-900 text-left sm:rounded-3xl"
              aria-label={`فتح صورة ${
                index + 1
              } - ${currentBranch.name}`}
            >
              <div className="relative aspect-[7/5] w-full">
                <Image
                  src={image}
                  alt={`${currentBranch.name} - صورة ${
                    index + 1
                  }`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  priority={index === 0}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* رقم الصورة */}

                <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                  {index + 1} / {images.length}
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      {/* =========================
          LIGHTBOX
      ========================= */}

      <AnimatePresence>
        {selectedIndex !== null && images[selectedIndex] && (
          <motion.div
            {...swipeHandlers}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={() => setSelectedIndex(null)}
            className="fixed inset-0 z-9999 flex items-center justify-center bg-black/95 p-3 sm:p-6"
          >
            {/* زر الإغلاق */}

            <button
              type="button"
              onClick={() => setSelectedIndex(null)}
              aria-label="إغلاق الصورة"
              className="absolute right-3 top-3 z-20 rounded-full bg-black/60 p-2.5 text-white transition hover:text-yellow-400 sm:right-6 sm:top-6 sm:p-3"
            >
              <X
                size={28}
                className="sm:h-[34px] sm:w-[34px]"
              />
            </button>

            {/* السابق */}

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              aria-label="الصورة السابقة"
              className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition hover:bg-yellow-400 hover:text-black sm:left-6 sm:p-3"
            >
              <ChevronLeft
                size={32}
                className="sm:h-[42px] sm:w-[42px]"
              />
            </button>

            {/* الصورة */}

            <motion.div
              key={`${currentBranch.id}-lightbox-${selectedIndex}`}
              initial={{
                scale: 0.96,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.96,
                opacity: 0,
              }}
              transition={{
                duration: 0.2,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
              className="flex max-w-full flex-col items-center"
            >
              <div className="relative flex max-h-[78vh] max-w-[88vw] items-center justify-center sm:max-h-[82vh] sm:max-w-[88vw]">
                <Image
                  src={images[selectedIndex]}
                  alt={`${currentBranch.name} - صورة ${
                    selectedIndex + 1
                  }`}
                  width={1400}
                  height={900}
                  sizes="(max-width: 640px) 88vw, 88vw"
                  priority
                  className="max-h-[78vh] w-auto max-w-full rounded-2xl object-contain sm:max-h-[82vh] sm:rounded-3xl"
                />
              </div>

              {/* معلومات الصورة */}

              <div className="mt-4 text-center sm:mt-6">
                <h3 className="text-lg font-bold text-yellow-400 sm:text-2xl">
                  {currentBranch.name}
                </h3>

                {/* Progress */}

                <div className="mt-2 flex items-center justify-center gap-3 sm:mt-3">
                  <div className="h-1 w-20 overflow-hidden rounded-full bg-zinc-700 sm:w-24">
                    <div
                      className="h-full rounded-full bg-yellow-400 transition-all duration-300"
                      style={{
                        width: `${
                          ((selectedIndex + 1) /
                            images.length) *
                          100
                        }%`,
                      }}
                    />
                  </div>

                  <span className="text-xs text-gray-300 sm:text-sm">
                    {selectedIndex + 1} / {images.length}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* التالي */}

            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              aria-label="الصورة التالية"
              className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white transition hover:bg-yellow-400 hover:text-black sm:right-6 sm:p-3"
            >
              <ChevronRight
                size={32}
                className="sm:h-[42px] sm:w-[42px]"
              />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}