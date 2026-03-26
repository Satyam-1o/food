export default function Hero() {
  return (
    <section className="relative px-6 md:px-12 py-16  overflow-hidden">
      {/* LEFT DECOR IMAGE */}
      <img
        src="/images/left-food.avif"
        alt=""
        className="hidden md:block absolute left-0 top-10 w-40 lg:w-56 object-contain pointer-events-none opacity-80"
      />

      {/* RIGHT DECOR IMAGE */}
      <img
        src="/images/right-food.avif"
        alt=""
        className="hidden md:block absolute right-0 top-10 w-40 lg:w-56 object-contain pointer-events-none opacity-80"
      />

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* LEFT */}
        <div className="max-w-xl text-center lg:text-left">
          <p className="font-semibold mb-3 opacity-90">Welcome</p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Enjoy Your <span className="text-white">Delicious</span> Food
          </h1>

          <p className="mt-4 text-sm sm:text-base leading-relaxed opacity-90">
            We deliver your favorite meals fresh and fast to your doorstep.
            Experience taste like never before.
          </p>

          <div className="mt-6 flex justify-center lg:justify-start">
            <button className="bg-white text-[#4D2FB2] px-6 py-3 rounded-full hover:bg-gray-100 transition font-semibold w-full sm:w-auto">
              Order Now
            </button>
          </div>
        </div>

        {/* RIGHT FEATURES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 w-full max-w-md">
          {[
            { title: "Fast Delivery", desc: "Get your food within 30 minutes" },
            { title: "Pickup", desc: "Pick up your order at the store" },
            { title: "Dine-in", desc: "Enjoy your food fresh & hot" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-white/20 hover:bg-white/20 transition"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-white/20 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <div>
                <p className="font-semibold text-sm sm:text-base">
                  {item.title}
                </p>
                <p className="text-xs sm:text-sm opacity-80">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
