export default function Gallery() {
  const images = [
    "/gallery1.jpeg",
    "/gallery2.jpeg",
    "/gallery3.jpeg",
    "/gallery4.jpeg",
    "/gallery5.jpeg",
    "/gallery6.jpeg",
    "/gallery7.jpeg",

  ];

  return (
    <section id="gallery" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-yellow-400 mb-4">
          معرض الصور
        </h2>

        <p className="text-center text-gray-400 mb-14">
          شاهد أجواء التدريب داخل CrossFit Oxygen
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-yellow-500/20 group"
            >
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-72 object-cover transition duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}