"use client";

import { motion } from "framer-motion";
import {
  Dumbbell,
  UserCheck,
  HeartPulse,
  Apple,
  Trophy,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Dumbbell size={42} />,
      title: "CrossFit",
      desc: "حصص كروس فيت احترافية تجمع بين القوة، السرعة، التحمل والمرونة لتناسب جميع المستويات.",
    },
    {
      icon: <UserCheck size={42} />,
      title: "Personal Training",
      desc: "برنامج تدريبي خاص مع مدرب محترف لتحقيق أهدافك بأسرع وأفضل طريقة.",
    },
    {
      icon: <HeartPulse size={42} />,
      title: "Fitness",
      desc: "برامج لرفع اللياقة البدنية وتحسين صحة القلب وزيادة القدرة على التحمل.",
    },
    {
      icon: <Apple size={42} />,
      title: "Nutrition",
      desc: "خطط غذائية احترافية لبناء العضلات أو خسارة الدهون حسب هدفك.",
    },
    {
      icon: <Trophy size={42} />,
      title: "Competitions",
      desc: "إعداد الرياضيين للمسابقات والبطولات مع متابعة كاملة للأداء.",
    },
    {
      icon: <ShieldCheck size={42} />,
      title: "Body Assessment",
      desc: "تحليل كامل للجسم وقياسات دورية لمتابعة تطور مستواك.",
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden py-28 bg-black text-white"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-yellow-500/10 blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-yellow-500/10 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center text-5xl md:text-6xl font-black text-yellow-400 mb-5"
        >
          خدماتنا
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .3 }}
          viewport={{ once: true }}
          className="text-center text-gray-400 mb-20 max-w-3xl mx-auto text-lg leading-8"
        >
          نقدم برامج تدريب احترافية تناسب جميع المستويات، بداية من المبتدئين
          وحتى الرياضيين المحترفين، لمساعدتك على الوصول إلى أفضل نسخة من نفسك.
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -12,
                scale: 1.03,
              }}
              className="
                group
                rounded-3xl
                border
                border-yellow-500/20
                bg-gradient-to-b
                from-zinc-900
                via-zinc-950
                to-black
                p-8
                transition-all
                duration-500
                hover:border-yellow-400
                hover:shadow-[0_0_35px_rgba(250,204,21,.25)]
              "
            >
              <div className="mb-7 h-1 w-16 rounded-full bg-yellow-400"></div>

              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-black transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                {service.icon}
              </div>

              <h3 className="mb-4 text-3xl font-bold text-white">
                {service.title}
              </h3>

              <p className="leading-8 text-gray-400">
                {service.desc}
              </p>

              <button
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border-2
                  border-yellow-400
                  px-6
                  py-3
                  font-semibold
                  text-yellow-400
                  transition-all
                  duration-300
                  hover:bg-yellow-400
                  hover:text-black
                  hover:shadow-lg
                  hover:shadow-yellow-500/40
                "
              >
                اعرف المزيد
                <ArrowRight size={18} />
              </button>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}