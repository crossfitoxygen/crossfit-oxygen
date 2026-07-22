"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BranchModal from "./BranchModal";

const links = [
  { name: "الرئيسية", href: "#" },
  { name: "الفروع", href: "#branches" },
  { name: "المعرض", href: "#gallery" },
  { name: "الخدمات", href: "#services" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [activeSection, setActiveSection] = useState("#");

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      setScrolled(current > 40);

      if (current > lastScrollY && current > 120) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(current);

      let currentSection = "#";

      links.forEach((item) => {
        if (item.href === "#") return;

        const section = document.querySelector(item.href);

        if (section) {
          const top = (section as HTMLElement).offsetTop - 140;

          if (current >= top) {
            currentSection = item.href;
          }
        }
      });

      if (current < 300) {
        currentSection = "#";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleScrollTo = (id: string) => {
    setOpen(false);

    if (id === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    document.querySelector(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled
            ? "border-b border-yellow-500/20 bg-black/80 py-2 shadow-[0_10px_40px_rgba(0,0,0,.4)] backdrop-blur-xl"
            : "bg-transparent py-4"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
                  {/* Logo */}

          <button
            onClick={() => handleScrollTo("#")}
            className="group flex items-center gap-3"
          >
            <motion.div whileHover={{ scale: 1.08, rotate: 5 }}>
              <Image
                src="/logo.png"
                alt="CrossFit Oxygen"
                width={52}
                height={52}
                priority
                className="drop-shadow-[0_0_15px_rgba(250,204,21,.6)]"
              />
            </motion.div>

            <div className="text-right">
              <h2 className="text-xl font-black text-yellow-400">
                CROSSFIT OXYGEN
              </h2>

              <p className="text-xs tracking-[4px] text-gray-400">
                NO LIMITS
              </p>
            </div>
          </button>

          {/* Desktop Menu */}

          <nav className="hidden items-center gap-10 lg:flex">
            {links.map((item) => (
              <button
                key={item.name}
                onClick={() => handleScrollTo(item.href)}
                className={`group relative font-medium transition ${
                  activeSection === item.href
                    ? "text-yellow-400"
                    : "text-gray-300 hover:text-yellow-400"
                }`}
              >
                {item.name}

                <span
                  className={`absolute -bottom-2 left-0 h-[2px] bg-yellow-400 transition-all duration-300 ${
                    activeSection === item.href
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Right Side */}

          <div className="hidden items-center gap-4 lg:flex">
            <button
              onClick={() => setOpenModal(true)}
              className="rounded-full bg-yellow-400 px-7 py-3 font-bold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(250,204,21,.7)]"
            >
              🔥 اشترك الآن
            </button>
          </div>

          {/* Mobile Button */}

          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-yellow-400 transition hover:bg-yellow-500/10 lg:hidden"
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

        <AnimatePresence>

          {open && (

            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.25 }}
              className="border-t border-yellow-500/20 bg-black/95 backdrop-blur-xl lg:hidden"
            >
                           <div className="flex flex-col gap-6 p-6">
                              {links.map((item) => (

                  <button
                    key={item.name}
                    onClick={() => handleScrollTo(item.href)}
                    className={`text-right text-lg transition ${
                      activeSection === item.href
                        ? "text-yellow-400"
                        : "text-white hover:text-yellow-400"
                    }`}
                  >
                    {item.name}
                  </button>

                ))}

                <button
                  onClick={() => {
                    setOpen(false);
                    setOpenModal(true);
                  }}
                  className="mt-3 rounded-full bg-yellow-400 py-3 font-bold text-black transition hover:scale-105"
                >
                  🔥 اشترك الآن
                </button>

              </div>

            </motion.div>

          )}

        </AnimatePresence>

      </header>

      <BranchModal
        open={openModal}
        onClose={() => setOpenModal(false)}
      />

    </>
  );
}