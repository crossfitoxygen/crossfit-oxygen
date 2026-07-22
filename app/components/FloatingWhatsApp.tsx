"use client";

import { useState } from "react";
import { FaWhatsapp, FaTimes, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const branches = [
  {
    name: "فرع العبور",
    phone: "01107802016",
    address: "مدينة العبور - ONE WAY Mall",
    map: "https://maps.app.goo.gl/3oFyyqpJuHe3yK718?g_st=iw",
  },
  {
    name: "فرع الزقازيق",
    phone: "01111111111",
    address: "مدينة الزقازيق",
    map: "https://maps.app.goo.gl/nRoZ88PGwsV7fjn16?g_st=iw",
  },
  {
    name: "فرع الرحاب",
    phone: "01106385482",
    address: "مدينة الرحاب",
    map: "https://maps.app.goo.gl/FTymPdcq7hafNX649?g_st=iw",
  },
];

export default function FloatingWhatsApp() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* الخلفية */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
        />
      )}

      {/* النافذة */}

      <div
        className={`fixed bottom-24 right-6 z-[9999] w-[360px] max-w-[90vw]
        rounded-3xl border border-yellow-500/20 bg-zinc-950
        transition-all duration-300 overflow-hidden
        ${
          open
            ? "opacity-100 translate-y-0 scale-100"
            : "pointer-events-none opacity-0 translate-y-8 scale-95"
        }`}
      >
        <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 p-5 text-center">

          <h2 className="text-2xl font-black text-black">
            CrossFit Oxygen
          </h2>

          <p className="text-sm font-semibold text-black mt-1">
            اختر أقرب فرع إليك
          </p>

        </div>

        <div className="p-5 space-y-5">

          {branches.map((branch) => (
            <div
              key={branch.phone}
              className="rounded-2xl border border-yellow-500/20 bg-zinc-900 p-4"
            >
              <h3 className="text-xl font-bold text-yellow-400">
                {branch.name}
              </h3>

              <div className="mt-3 flex items-start gap-2 text-gray-300 text-sm">
                <FaMapMarkerAlt className="mt-1 text-yellow-400" />
                <span>{branch.address}</span>
              </div>

              <div className="mt-2 flex items-center gap-2 text-gray-300 text-sm">
                <FaPhoneAlt className="text-yellow-400" />
                <span>{branch.phone}</span>
              </div>

              <div className="mt-5 flex gap-3">

                <a
                  href={`https://wa.me/2${branch.phone}`}
                  target="_blank"
                  className="flex-1 rounded-full bg-green-500 py-3 text-center font-bold transition hover:scale-105"
                >
                  واتساب
                </a>

                <a
                  href={branch.map}
                  target="_blank"
                  className="flex-1 rounded-full border border-yellow-500 py-3 text-center font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
                >
                  الموقع
                </a>

              </div>

            </div>
          ))}

        </div>

        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-black"
        >
          <FaTimes size={20} />
        </button>

      </div>

      {/* زر الواتساب */}

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-[9999] h-16 w-16 rounded-full
        bg-green-500 shadow-[0_0_30px_rgba(34,197,94,.5)]
        hover:scale-110 transition duration-300
        flex items-center justify-center"
      >
        <FaWhatsapp className="text-white" size={34} />
      </button>
    </>
  );
}