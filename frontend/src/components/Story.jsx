export default function Story() {
  const stats = [
    { value: "12k+", label: "Successful Orders" },
    { value: "16k+", label: "Happy Customers" },
    { value: "20k+", label: "Years Experience" },
  ];

  return (
    <section className="px-4 md:px-10 py-16 bg-gray-50">

      <div className="max-w-5xl mx-auto text-center">

        {/* LABEL */}
        <p className="text-sm text-[#B153D7] font-semibold mb-2">
          Our Experience
        </p>

        {/* HEADING */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Our <span className="text-[#4D2FB2]">Stories</span> Have Adventures.
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          There are many variations of passages available, but the majority have
          suffered alteration in some form by injected humour or randomness.
        </p>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">

          {stats.map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <p className="text-2xl font-bold text-[#4D2FB2]">
                {item.value}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {item.label}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}