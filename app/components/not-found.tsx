"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center overflow-hidden bg-black px-6 text-white">
      <div className="relative w-full max-w-xl text-center">
        {/* Golden Glow */}

        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-[100px]"
          aria-hidden="true"
        />

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="relative"
        >
          <h1 className="text-7xl font-black text-yellow-400 sm:text-8xl md:text-9xl">
            404
          </h1>

          <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
            الصفحة غير موجودة
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-400 sm:text-base">
            عذرًا، الصفحة التي تبحث عنها غير موجودة أو ربما تم نقلها.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex rounded-full bg-yellow-400 px-8 py-3.5 font-bold text-black transition-all duration-200 hover:scale-105 hover:shadow-[0_0_25px_rgba(250,204,21,.5)] active:scale-95"
          >
            العودة للرئيسية
          </Link>
        </motion.div>
      </div>
    </main>
  );
}