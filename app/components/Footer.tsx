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
    address: "مدينة العبور - الحي الترفيهي - مول ONE WAY",
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
        </p>

        {/* Branches */}

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {branches.map((branch) => (

            <div
              key={branch.name}
              className="rounded-3xl border border-yellow-500/20 bg-zinc-900/60 p-8 transition duration-300 hover:border-yellow-400 hover:shadow-[0_0_25px_rgba(250,204,21,.2)]"
            >

              <h3 className="mb-6 text-center text-2xl font-bold text-yellow-400">
                {branch.name}
              </h3>

              <div className="space-y-5">

                <div className="flex items-start gap-3">

                  <FaMapMarkerAlt className="mt-1 text-yellow-400" />

                  <span className="text-gray-300">
                    {branch.address}
                  </span>

                </div>

                <div className="flex items-center gap-3">

                  <FaPhoneAlt className="text-yellow-400" />

                  <a
                    href={`tel:${branch.phone}`}
                    className="text-gray-300 hover:text-yellow-400"
                  >
                    {branch.phone}
                  </a>

                </div>

                <div className="flex gap-3 pt-2">

                  <a
                    href={`https://wa.me/2${branch.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full bg-green-500 py-3 text-center font-bold transition hover:scale-105"
                  >
                    واتساب
                  </a>

                  <a
                    href={branch.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-full border border-yellow-500 py-3 text-center font-bold text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
                  >
                    الموقع
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Working Hours */}

        <div className="mt-16 rounded-3xl border border-yellow-500/20 bg-zinc-900/60 p-8 text-center">

          <FaClock className="mx-auto mb-5 text-4xl text-yellow-400" />

          <h3 className="mb-6 text-3xl font-bold text-yellow-400">
            مواعيد العمل
          </h3>

          <p className="leading-9 text-gray-300">

            السبت - الخميس

            <br />

            7:00 AM - 2:00 AM

            <br /><br />

            الجمعة

            <br />

            4:00 PM - 12:00 AM

          </p>

        </div>

        {/* Divider */}

        <div className="mx-auto my-16 h-px w-40 bg-yellow-500/30"></div>

        {/* Social */}

        <h3 className="mb-8 text-center text-3xl font-bold text-yellow-400">
          تابعنا
        </h3>

        <div className="flex flex-wrap justify-center gap-6">

          <a
            href="https://wa.me/201107802016"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-16 w-16 items-center justify-center rounded-full border border-yellow-500 bg-zinc-900 transition duration-300 hover:scale-110 hover:bg-green-500"
          >
            <FaWhatsapp size={28} />
          </a>

          <a
            href="https://www.instagram.com/crossfit_oxygen_"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-16 w-16 items-center justify-center rounded-full border border-yellow-500 bg-zinc-900 transition duration-300 hover:scale-110 hover:bg-pink-500"
          >
            <FaInstagram size={28} />
          </a>

          <a
            href="https://www.facebook.com/share/19N5gxCUKi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-16 w-16 items-center justify-center rounded-full border border-yellow-500 bg-zinc-900 transition duration-300 hover:scale-110 hover:bg-blue-600"
          >
            <FaFacebookF size={26} />
          </a>

          <a
            href="https://www.tiktok.com/@crossfitoxygen"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-16 w-16 items-center justify-center rounded-full border border-yellow-500 bg-zinc-900 transition duration-300 hover:scale-110 hover:bg-white hover:text-black"
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