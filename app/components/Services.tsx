"use client";

import {
  Dumbbell,
  UserCheck,
  HeartPulse,
  Apple,
  Trophy,
  ShieldCheck,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Dumbbell size={42} />,
      title: "CrossFit",
      desc: "حصص كروس فيت مكثفة لزيادة القوة واللياقة البدنية.",
    },
    {
      icon: <UserCheck size={42} />,
      title: "Personal Training",
      desc: "مدرب خاص بخطة تدريب تناسب أهدافك ومستواك.",
    },
    {
      icon: <HeartPulse size={42} />,
      title: "Fitness",
      desc: "تمارين لتحسين اللياقة، التحمل وصحة القلب.",
    },
    {
      icon: <Apple size={42} />,
      title: "Nutrition",
      desc: "أنظمة غذائية احترافية لبناء العضلات أو خسارة الوزن.",
    },
    {
      icon: <Trophy size={42} />,
      title: "Competitions",
      desc: "تجهيز الرياضيين للمسابقات والبطولات.",
    },
    {
      icon: <ShieldCheck size={42} />,
      title: "Body Assessment",
      desc: "قياسات وتحليل كامل للجسم لمتابعة تقدمك.",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-yellow-400 mb-4">
          خدماتنا
        </h2>

        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
          نوفر مجموعة متكاملة من الخدمات لمساعدتك على الوصول إلى أفضل نسخة من نفسك.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-3xl border border-yellow-500/20 bg-zinc-900 p-8 transition-all duration-300 hover:-translate-y-3 hover:border-yellow-400 hover:shadow-[0_0_30px_rgba(250,204,21,0.25)]"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-black transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold text-white">
                {service.title}
              </h3>

              <p className="leading-7 text-gray-400">
                {service.desc}
              </p>

              <button className="mt-8 rounded-full border border-yellow-400 px-5 py-2 text-yellow-400 transition-all duration-300 hover:bg-yellow-400 hover:text-black">
                اعرف المزيد
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}