"use client";

import Image from "next/image";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const coaches = [
  {
    name: "Captain AMIRA",
    specialty: "CrossFit Coach",
    image: "/coach1.png",
    whatsapp: "https://wa.me/201000000000",
    instagram: "https://instagram.com/coach1",
  },
  {
    name: "Captain MAHMOUD",
    specialty: "Fitness Coach",
    image: "/coach2.png",
    whatsapp: "https://wa.me/201111111111",
    instagram: "https://instagram.com/coach2",
  },
  {
    name: "Captain DIAA",
    specialty: "Strength Coach",
    image: "/coach3.png",
    whatsapp: "https://wa.me/201222222222",
    instagram: "https://instagram.com/coach3",
  },
  {
    name: "Captain NADER",
    specialty: "Strength Coach",
    image: "/coach3.png",
    whatsapp: "https://wa.me/201222222222",
    instagram: "https://instagram.com/coach3",
  },
];

export default function Coaches() {
  return (
    <section id="coaches" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Coaches
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {coaches.map((coach, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-2xl p-8 text-center hover:scale-105 transition duration-300 shadow-xl"
            >
              <div className="flex justify-center">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  width={160}
                  height={160}
                  className="rounded-full object-cover border-4 border-red-600"
                />
              </div>

              <h3 className="text-2xl font-bold mt-6">
                {coach.name}
              </h3>

              <p className="text-red-500 mt-2">
                {coach.specialty}
              </p>

              <div className="flex justify-center gap-5 mt-6 text-3xl">
                <a
                  href={coach.whatsapp}
                  target="_blank"
                  className="hover:text-green-500 transition"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href={coach.instagram}
                  target="_blank"
                  className="hover:text-pink-500 transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}