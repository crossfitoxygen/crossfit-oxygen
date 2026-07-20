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

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-yellow-500/20 bg-black text-white">

      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl"></div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20">

        {/* Logo */}

        <div className="flex justify-center">

          <Image
            src="/logo.png"
            alt="CrossFit Oxygen"
            width={170}
            height={170}
            className="drop-shadow-[0_0_30px_rgba(250,204,21,.6)]"
          />

        </div>

        <h2 className="mt-6 text-center text-4xl font-black text-yellow-400">
          CrossFit Oxygen
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-center leading-8 text-gray-400">
          CrossFit • Fitness • Strength • Community
          <br />
        </p>

        {/* Contact */}

        <div className="mt-16 grid gap-10 md:grid-cols-3">

          <div className="text-center">

            <FaMapMarkerAlt className="mx-auto mb-4 text-3xl text-yellow-400" />

            <h3 className="mb-3 text-xl font-bold">
              العنوان
            </h3>

            <p className="leading-8 text-gray-400">
              مدينة العبور
              <br />
              الحي الترفيهي
              <br />
              مول ONE WAY
            </p>

            <a
              href="https://maps.app.goo.gl/3oFyyqpJuHe3yK718?g_st=iw"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-full bg-yellow-400 px-5 py-2 font-semibold text-black transition hover:scale-105"
            >
              📍 افتح الموقع
            </a>

          </div>

          <div className="text-center">

            <FaPhoneAlt className="mx-auto mb-4 text-3xl text-yellow-400" />

            <h3 className="mb-3 text-xl font-bold">
              اتصل بنا
            </h3>

            <a
              href="tel:01107802016"
              className="text-lg text-gray-400 transition hover:text-yellow-400"
            >
              01107802016
            </a>

          </div>

          <div className="text-center">

            <FaClock className="mx-auto mb-4 text-3xl text-yellow-400" />

            <h3 className="mb-3 text-xl font-bold">
              مواعيد العمل
            </h3>

            <p className="leading-8 text-gray-400">

              السبت - الخميس

              <br />

              7:00AM - 2:00AM

              <br /><br />

              الجمعة

              <br />

              4:00PM - 12:00AM

            </p>

          </div>

        </div>

        {/* Divider */}

        <div className="mx-auto my-16 h-px w-40 bg-yellow-500/30"></div>

        {/* Social */}

        <h3 className="mb-8 text-center text-3xl font-bold text-yellow-400">
          تابعنا
        </h3>

        <div className="flex justify-center gap-6 flex-wrap">

          <a
            href="https://wa.me/201107802016"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-16 w-16 items-center justify-center rounded-full border border-yellow-500 bg-zinc-900 transition-all duration-300 hover:scale-110 hover:bg-green-500"
          >
            <FaWhatsapp size={28} />
          </a>

          <a
            href="https://www.instagram.com/crossfit_oxygen_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-16 w-16 items-center justify-center rounded-full border border-yellow-500 bg-zinc-900 transition-all duration-300 hover:scale-110 hover:bg-pink-500"
          >
            <FaInstagram size={28} />
          </a>

          <a
            href="https://www.facebook.com/share/19N5gxCUKi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-16 w-16 items-center justify-center rounded-full border border-yellow-500 bg-zinc-900 transition-all duration-300 hover:scale-110 hover:bg-blue-600"
          >
            <FaFacebookF size={26} />
          </a>

          <a
            href="https://www.tiktok.com/@crossfitoxygen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-16 w-16 items-center justify-center rounded-full border border-yellow-500 bg-zinc-900 transition-all duration-300 hover:scale-110 hover:bg-white hover:text-black"
          >
            <FaTiktok size={26} />
          </a>

        </div>

        <div className="mt-20 border-t border-yellow-500/20 pt-8">

          <p className="text-center text-gray-500">
            © {new Date().getFullYear()} CrossFit Oxygen
            <br />
            All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}