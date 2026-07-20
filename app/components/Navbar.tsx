"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "الرئيسية", href: "#" },
    { name: "الخدمات", href: "#services" },
    { name: "المعرض", href: "#gallery" },
    { name: "المدربين", href: "#coaches" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/85 backdrop-blur-xl border-b border-yellow-500/20 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}

        <a href="#" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="CrossFit Oxygen"
            width={52}
            height={52}
            className="drop-shadow-[0_0_15px_rgba(250,204,21,.6)]"
          />

          <div>
            <h2 className="text-yellow-400 font-black text-xl">
              CROSSFIT OXYGEN
            </h2>

            <p className="text-xs text-gray-400 tracking-[3px]">
              NO LIMITS
            </p>
          </div>
        </a>

        {/* Desktop */}

        <nav className="hidden lg:flex items-center gap-10">
          {links.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-300 hover:text-yellow-400 transition font-medium"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* WhatsApp */}

        <a
          href="https://wa.me/201107802016"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 text-black font-bold transition hover:scale-105"
        >
          <MessageCircle size={18} />
          واتساب
        </a>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-yellow-400"
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black border-t border-yellow-500/20"
          >
            <div className="flex flex-col p-6 gap-6">
              {links.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="text-lg text-white hover:text-yellow-400 transition"
                >
                  {item.name}
                </a>
              ))}

              <a
                href="https://wa.me/201107802016"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-yellow-400 py-3 text-center text-black font-bold"
              >
                واتساب
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}