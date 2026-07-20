"use client";

export default function Marquee() {
  const words = [
    "CROSSFIT",
    "STRENGTH",
    "FITNESS",
    "POWER",
    "ENDURANCE",
    "COMMUNITY",
    "DISCIPLINE",
    "OXYGEN",
  ];

  return (
    <section className="overflow-hidden border-y border-yellow-500/20 bg-zinc-950 py-6">

      <div className="whitespace-nowrap animate-marquee">

        {[...words, ...words].map((word, index) => (
          <span
            key={index}
            className="mx-10 inline-block text-4xl font-black tracking-[4px] text-yellow-400 uppercase"
          >
            {word}
          </span>
        ))}

      </div>

    </section>
  );
}