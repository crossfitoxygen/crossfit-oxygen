"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { Users, Trophy, Dumbbell, Clock3 } from "lucide-react";

export default function Stats() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const stats = [
    {
      icon: <Users size={42} />,
      number: 1000,
      suffix: "+",
      title: "عضو نشط",
    },
    {
      icon: <Trophy size={42} />,
      number: 35,
      suffix: "+",
      title: "بطولة",
    },
    {
      icon: <Dumbbell size={42} />,
      number: 80,
      suffix: "+",
      title: "برنامج تدريبي",
    },
    {
      icon: <Clock3 size={42} />,
      number: 24,
      suffix: "/7",
      title: "ساعات العمل",
    },
  ];

  return (
    <section ref={ref} className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-extrabold text-center text-yellow-400 mb-4">
          أرقامنا تتحدث
        </h2>

        <p className="text-center text-gray-400 mb-14">
          إنجازات نفتخر بها مع عملائنا
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-black rounded-3xl border border-yellow-500/20 p-8 text-center hover:border-yellow-400 hover:-translate-y-2 transition duration-300"
            >
              <div className="flex justify-center text-yellow-400 mb-5">
                {item.icon}
              </div>

              <h3 className="text-5xl font-bold text-white mb-3">
                {inView ? (
                  <CountUp
                    end={item.number}
                    duration={2.5}
                  />
                ) : (
                  0
                )}
                {item.suffix}
              </h3>

              <p className="text-gray-400">
                {item.title}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}