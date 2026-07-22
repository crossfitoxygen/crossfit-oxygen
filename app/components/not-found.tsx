export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white">

      <h1 className="text-8xl font-black text-yellow-400">
        404
      </h1>

      <p className="mt-4 text-gray-400 text-xl">
        الصفحة غير موجودة
      </p>

      <a
        href="/"
        className="mt-8 bg-yellow-400 text-black px-8 py-3 rounded-full font-bold"
      >
        العودة للرئيسية
      </a>

    </div>
  );
}