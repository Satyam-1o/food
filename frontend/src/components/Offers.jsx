export default function Offers() {
  return (
    <section className="px-4 md:px-10 py-6">

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">

        {/* LEFT BIG CARD */}
        <div className="relative md:col-span-2 rounded-[5px] overflow-hidden group cursor-pointer">

          <img
            src="/images/offer1.jpg"
            className="w-full md:h-[25rem] object-cover group-hover:scale-105 transition duration-300"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* TEXT */}
          <div className="absolute top-4 left-4 text-white">
            <p className="text-xl md:text-2xl font-bold">
              Buy 2 <br /> Get 1 free
            </p>
            <p className="text-sm mt-1 opacity-80">
              On all combos
            </p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col gap-3">

          {/* TOP CARD */}
          <div className="relative rounded-[5px] overflow-hidden group cursor-pointer">

            <img
              src="/images/offer2.jpg"
              className="w-full h-[12rem] object-cover group-hover:scale-105 transition duration-300"
            />

            <div className="absolute inset-0 bg-black/30"></div>

            <div className="absolute bottom-4 right-4 text-white text-sm font-medium">
              View Details →
            </div>

          </div>

          {/* BOTTOM CARD */}
          <div className="relative rounded-[5px] overflow-hidden group cursor-pointer">

            <img
              src="/images/offer3.jpg"
              className="w-full h-[12rem] object-cover group-hover:scale-105 transition duration-300"
            />

            <div className="absolute inset-0 bg-black/30"></div>

            <div className="absolute bottom-4 right-4 text-white text-sm font-medium">
              View Details →
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}