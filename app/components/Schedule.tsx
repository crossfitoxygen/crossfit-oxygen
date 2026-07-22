"use client";

const schedule = [
  {
    day: "السبت - الخميس",
    morning: "7:00 AM - 2:00 PM",
    evening: "4:00 PM - 2:00 AM",
  },
  {
    day: "الجمعة",
    morning: "مغلق",
    evening: "4:00 PM - 12:00 AM",
  },
];

export default function Schedule() {
  return (
    <section id="schedule" className="bg-black py-24">
      <div className="mx-auto max-w-6xl px-6">

        <h2 className="text-center text-5xl font-black text-yellow-400">
          جدول الحصص
        </h2>

        <p className="mt-4 text-center text-gray-400">
          مواعيد العمل الرسمية
        </p>

        <div className="mt-16 overflow-hidden rounded-3xl border border-yellow-500/20">

          <table className="w-full text-center">

            <thead className="bg-yellow-400 text-black">

              <tr>
                <th className="py-5">اليوم</th>
                <th>الفترة الصباحية</th>
                <th>الفترة المسائية</th>
              </tr>

            </thead>

            <tbody>

              {schedule.map((item) => (

                <tr
                  key={item.day}
                  className="border-t border-yellow-500/10 bg-zinc-900"
                >
                  <td className="py-6 font-bold text-yellow-400">
                    {item.day}
                  </td>

                  <td className="text-white">
                    {item.morning}
                  </td>

                  <td className="text-white">
                    {item.evening}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>
    </section>
  );
}