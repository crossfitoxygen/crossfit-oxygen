"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const coaches = [
  {
    name: "Captain AMIRA",
    specialty: "Personal Trainer",
    experience: "9+ Years Experience",
    image: "/coach1.png",
    about: "متخصصة في تدريبات الكروس فيت ورفع مستوى اللياقة لجميع المستويات.",
  },
  {
    name: "Captain MAHMOUD",
    specialty: "Personal Trainer",
    experience: "9+ Years Experience",
    image: "/coach2.png",
    about: "خبرة واسعة في بناء العضلات وتحسين اللياقة البدنية والبرامج الفردية.",
  },
  {
    name: "Captain DIAA",
    specialty: "Personal Trainer",
    experience: "9+ Years Experience",
    image: "/coach3.png",
    about: "متخصص في تدريبات القوة وإعداد الرياضيين للمنافسات.",
  },
  {
    name: "Captain NADER",
    specialty: "Personal Trainer",
    experience: "9+ Years Experience",
    image: "/coach4.png",
    about: "يساعد الأعضاء على تحقيق أفضل النتائج بأحدث أساليب التدريب.",
  },
];

export default function Coaches() {
  return (
    <section
      id="coaches"
      className="relative overflow-hidden bg-zinc-950 py-28 text-white"
    >
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl"></div>
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center text-5xl md:text-6xl font-black text-yellow-400"
        >
فريق CrossFit Oxygen        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="text-center text-gray-400 text-lg max-w-3xl mx-auto mt-6 mb-16"
        >
          فريق من أفضل المدربين لمساعدتك على الوصول إلى أهدافك بأمان واحترافية.
        </motion.p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {coaches.map((coach, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .15 }}
              whileHover={{ y: -10 }}
              className="group rounded-3xl border border-yellow-500/20 bg-gradient-to-b from-zinc-900 to-black p-8 text-center transition-all duration-500 hover:border-yellow-400 hover:shadow-[0_0_35px_rgba(250,204,21,.25)]"
            >

              <div className="relative mx-auto h-44 w-44 overflow-hidden rounded-full border-4 border-yellow-400">

                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              <h3 className="mt-8 text-2xl font-bold">
                {coach.name}
              </h3>

              <p className="mt-2 text-yellow-400 font-semibold">
                {coach.specialty}
              </p>

              <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-yellow-400"></div>

              <p className="mt-5 text-sm text-gray-300">
                {coach.about}
              </p>

              <div className="mt-6 rounded-xl border border-yellow-500/20 bg-black/40 p-3">
                <span className="text-yellow-400 font-bold">
                  {coach.experience}
                </span>
              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}