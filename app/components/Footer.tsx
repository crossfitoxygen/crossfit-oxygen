"use client";

import Image from "next/image";
import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

const branches = [
  {
    name: "فرع العبور",
    phone: "01107802016",
    whatsapp: ["201107802016"],
    address: "مدينة العبور - الحي الترفيهي - مول ONE WAY",
    map: "https://maps.app.goo.gl/3oFyyqpJuHe3yK718?g_st=iw",
  },
  {
    name: "فرع الزقازيق",
    phone: "01155404011",
    whatsapp: ["201155404011", "201155404099"],
    address: "مدينة الزقازيق",
    map: "https://maps.app.goo.gl/nRoZ88PGwsV7fjn16?g_st=iw",
  },
  {
    name: "فرع الرحاب",
    phone: "01106385482",
    whatsapp: ["201106385482"],
    address: "مدينة الرحاب",
    map: "https://maps.app.goo.gl/FTymPdcq7hafNX649?g_st=iw",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-yellow-500/20 bg-black text-white">
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl sm:h-96 sm:w-96" />

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl sm:h-96 sm:w-96" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-6 sm:py-20">
        {/* Logo */}

        <div className="flex justify-center">
          <Image
            src="/logo.png"
            alt="CrossFit Oxygen"
            width={150}
            height={150}
            loading="lazy"
            className="drop-shadow-[0_0_25px_rgba(250,204,21,.5)] sm:h-42.5 sm:w-42.5"
          />
        </div>

        <h2 className="mt-6 text-center text-3xl font-black text-yellow-400 sm:text-4xl">
          CrossFit Oxygen
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
          CrossFit • Fitness • Strength • Community
        </p>

        {/* Branches */}

        <div className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-8">
          {branches.map((branch) => (
            <div
              key={branch.name}
              className="rounded-2xl border border-yellow-500/20 bg-zinc-900/60 p-5 transition-colors duration-300 hover:border-yellow-400 sm:rounded-3xl sm:p-8"
            >
              {/* Branch Name */}

              <h3 className="mb-6 text-center text-xl font-bold text-yellow-400 sm:text-2xl">
                {branch.name}
              </h3>

              <div className="space-y-5">
                {/* Address */}

                <div className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-1 shrink-0 text-yellow-400" />

                  <span className="text-sm leading-7 text-gray-300 sm:text-base">
                    {branch.address}
                  </span>
                </div>

                {/* Phone */}

                <div className="flex items-center gap-3">
                  <FaPhoneAlt className="shrink-0 text-yellow-400" />

                  <a
                    href={`tel:${branch.phone}`}
                    className="text-sm text-gray-300 transition-colors hover:text-yellow-400 sm:text-base"
                  >
                    {branch.phone}
                  </a>
                </div>

                {/* Buttons */}

                <div className="flex flex-col gap-3 pt-2">
                  {/* WhatsApp */}

                  {branch.whatsapp.length === 1 ? (
                    <a
                      href={`https://wa.me/${branch.whatsapp[0]}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-h-12 items-center justify-center rounded-full bg-green-500 px-4 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-green-600 sm:text-base"
                    >
                      واتساب
                    </a>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      {branch.whatsapp.map((number, index) => (
                        <a
                          key={`${branch.name}-whatsapp-${number}`}
                          href={`https://wa.me/${number}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex min-h-12 items-center justify-center rounded-full bg-green-500 px-3 py-3 text-sm font-bold text-white transition-colors duration-200 hover:bg-green-600"
                          aria-label={`واتساب ${branch.name} رقم ${
                            index + 1
                          }`}
                        >
                          واتساب {index + 1}
                        </a>
                      ))}
                    </div>
                  )}

                  {/* Location */}

                  <a
                    href={branch.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`موقع ${branch.name} على الخريطة`}
                    className="flex min-h-12 items-center justify-center gap-2 rounded-full border border-yellow-500 px-4 py-3 text-sm font-bold text-yellow-400 transition-colors duration-200 hover:bg-yellow-400 hover:text-black sm:text-base"
                  >
                    <FaMapMarkerAlt size={16} />

                    <span>الموقع</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Working Hours */}

        <div className="mt-12 rounded-2xl border border-yellow-500/20 bg-zinc-900/60 p-6 text-center sm:mt-16 sm:rounded-3xl sm:p-8">
          <FaClock className="mx-auto mb-5 text-3xl text-yellow-400 sm:text-4xl" />

          <h3 className="mb-5 text-2xl font-bold text-yellow-400 sm:mb-6 sm:text-3xl">
            مواعيد العمل
          </h3>

          <p className="text-sm leading-8 text-gray-300 sm:text-base sm:leading-9">
            السبت - الخميس
            <br />
            7:00 AM - 2:00 AM
            <br />
            <br />
            الجمعة
            <br />
            4:00 PM - 12:00 AM
          </p>
        </div>

        {/* Divider */}

        <div className="mx-auto my-12 h-px w-32 bg-yellow-500/30 sm:my-16 sm:w-40" />

        {/* Social */}

        <h3 className="mb-7 text-center text-2xl font-bold text-yellow-400 sm:mb-8 sm:text-3xl">
          تابعنا
        </h3>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {/* WhatsApp */}

          <a
            href="https://wa.me/201107802016"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="واتساب"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-yellow-500 bg-zinc-900 transition-colors duration-200 hover:bg-green-500 sm:h-16 sm:w-16"
          >
            <FaWhatsapp size={25} />
          </a>

          {/* Instagram */}

          <a
            href="https://www.instagram.com/crossfit_oxygen_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-yellow-500 bg-zinc-900 transition-colors duration-200 hover:bg-pink-500 sm:h-16 sm:w-16"
          >
            <FaInstagram size={25} />
          </a>

          {/* Facebook */}

          <a
            href="https://www.facebook.com/share/19N5gxCUKi/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-yellow-500 bg-zinc-900 transition-colors duration-200 hover:bg-blue-600 sm:h-16 sm:w-16"
          >
            <FaFacebookF size={23} />
          </a>

          {/* TikTok */}

          <a
            href="https://www.tiktok.com/@crossfitoxygen"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="flex h-14 w-14 items-center justify-center rounded-full border border-yellow-500 bg-zinc-900 transition-colors duration-200 hover:bg-white hover:text-black sm:h-16 sm:w-16"
          >
            <FaTiktok size={23} />
          </a>
        </div>

        {/* Copyright */}

        <div className="mt-16 border-t border-yellow-500/20 pt-7 sm:mt-20 sm:pt-8">
          <p className="text-center text-sm leading-7 text-gray-500 sm:text-base">
            © {new Date().getFullYear()} CrossFit Oxygen
            <br />
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}