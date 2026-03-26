export default function Products() {
  const products = [
    {
      name: "Beefy Bliss",
      price: "6.90$",
      image: "/images/p1.png",
      highlight: true,
    },
    {
      name: "Bliss Burger",
      price: "62.01$",
      image: "/images/p1.png",
    },
    {
      name: "Roll Rocket",
      price: "5.90$",
      image: "/images/p1.png",
    },
    {
      name: "Veggie Voyage",
      price: "2.90$",
      image: "/images/p1.png",
    },
    {
      name: "Chicken Mcnuggets",
      price: "25.90$",
      image: "/images/p1.png",
    },
    {
      name: "Supreme Symphony",
      price: "12.01$",
      image: "/images/p1.png",
    },
    {
      name: "Pepperoni Paradise",
      price: "32.90$",
      image: "/images/p1.png",
    },
    {
      name: "Pepperoni",
      price: "22.68$",
      image: "/images/p1.png",
    },
  ];

  return (
    <section className="px-4 md:px-10 py-12">

      {/* HEADER */}
      <div className="max-w-6xl mx-auto flex justify-between items-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold">
          <span className="text-[#4D2FB2]">Best</span> Products
        </h2>

        <button className="text-sm text-gray-500 hover:text-black transition">
          View All →
        </button>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {products.map((item, i) => (
          <div
            key={i}
            className={`relative p-4 rounded-md transition hover:shadow-lg cursor-pointer ${
              item.highlight
                ? "bg-[#4D2FB2] text-white"
                : "bg-[#FFDBFD]"
            }`}
          >

            {/* IMAGE */}
            <img
              src={item.image}
              className="object-contain mx-auto mb-3"
            />

            {/* TITLE */}
            <h3 className="font-semibold">
              {item.name}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-xs mt-1 opacity-70">
              Delicious food experience
            </p>

            {/* PRICE + BUTTON */}
            <div className="flex justify-between items-center mt-4">

              <span className="font-bold">
                {item.price}
              </span>

              <button className={`w-8 h-8 flex items-center justify-center rounded ${
                item.highlight
                  ? "bg-white text-[#4D2FB2]"
                  : "bg-[#F375C2] text-white"
              }`}>
                +
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}