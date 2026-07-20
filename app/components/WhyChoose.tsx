"use client";

import {
  Dumbbell,
  Users,
  Trophy,
  Apple,
  HeartPulse,
  Clock3,
} from "lucide-react";

const features = [
  {
    icon: <Dumbbell size={38} />,
    title: "معدات احترافية",
    desc: "أحدث معدات الكروس فيت واللياقة البدنية.",
  },
  {
    icon: <Users size={38} />,
    title: "مجتمع محفز",
    desc: "تدرب وسط فريق يدفعك لتصبح أفضل كل يوم.",
  },
  {
    icon: <Trophy size={38} />,
    title: "مدربون محترفون",
    desc: "خبرة كبيرة مع جميع المستويات.",
  },
  {
    icon: <Apple size={38} />,
    title: "إرشادات غذائية",
    desc: "نساعدك للوصول لهدفك بشكل صحي.",
  },
  {
    icon: <HeartPulse size={38} />,
    title: "متابعة مستمرة",
    desc: "قياسات دورية لمتابعة تقدمك.",
  },
  {
    icon: <Clock3 size={38} />,
    title: "مواعيد مرنة",
    desc: "حصص تناسب جدولك اليومي.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-black py-28 text-white">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-center text-5xl font-black text-yellow-400">
          لماذا تختار CrossFit Oxygen؟
        </h2>

        <p className="mt-6 text-center text-gray-400 max-w-3xl mx-auto">
          لأننا لا نقدم مجرد مكان للتدريب...
          بل مجتمع يساعدك على الوصول لأفضل نسخة من نفسك.
        </p>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((item, index) => (

            <div
              key={index}
              className="
                group
                rounded-3xl
                border
                border-yellow-500/20
                bg-zinc-900
                p-8
                transition-all
                duration-500
                hover:-translate-y-3
                hover:border-yellow-400
                hover:shadow-[0_0_35px_rgba(250,204,21,.25)]
              "
            >

              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-400 text-black transition group-hover:scale-110">
                {item.icon}
              </div>

              <h3 className="mb-4 text-2xl font-bold">
                {item.title}
              </h3>

              <p className="leading-8 text-gray-400">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

        <div className="mt-20 text-center">

          <a
            href="https://wa.me/201107802016"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              rounded-full
              bg-yellow-400
              px-10
              py-4
              text-lg
              font-bold
              text-black
              transition
              hover:scale-105
            "
          >
            🔥 اعرف أحدث العروض على واتساب
          </a>

        </div>

      </div>

    </section>
  );
}