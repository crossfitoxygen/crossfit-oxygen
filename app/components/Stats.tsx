"use client";

import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import {
  Users,
  Trophy,
  Dumbbell,
  Clock3,
} from "lucide-react";

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
    <section
      ref={ref}
      className="relative overflow-hidden py-28 bg-zinc-950"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-10 top-10 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl"></div>

        <div className="absolute right-10 bottom-10 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center text-5xl md:text-6xl font-black text-yellow-400 mb-5"
        >
          أرقامنا تتحدث
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="text-center text-gray-400 text-lg max-w-3xl mx-auto mb-16 leading-8"
        >
          نفتخر بما حققناه مع أعضاء CrossFit Oxygen،
          ونواصل مساعدتهم يومًا بعد يوم للوصول إلى أفضل نسخة من أنفسهم.
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              whileHover={{
                y: -10,
                scale: 1.04,
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
                text-center
                transition-all
                duration-500
                hover:border-yellow-400
                hover:shadow-[0_0_35px_rgba(250,204,21,.25)]
              "
            >

              <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400/10 text-yellow-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-yellow-400 group-hover:text-black">

                {item.icon}

              </div>

              <h3 className="mb-4 text-5xl md:text-6xl font-black text-white">

                {inView ? (
                  <CountUp
                    end={item.number}
                    duration={2.5}
                  />
                ) : (
                  0
                )}

                <span className="text-yellow-400">
                  {item.suffix}
                </span>

              </h3>

              <p className="text-lg font-medium text-gray-300">
                {item.title}
              </p>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}