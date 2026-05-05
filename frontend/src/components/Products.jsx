import { useState, useEffect } from "react";
import { getMenu } from "../api/menuApi";
import { useCart } from "../context/CartContext";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await getMenu();
        setProducts(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenu();
  }, []);

  if (loading) {
    return <p className="text-center py-10">Loading...</p>;
  }

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
              item.highlight ? "bg-[#4D2FB2] text-white" : "bg-[#FFDBFD]"
            }`}
          >
            {/* IMAGE */}
            <img src={item.image} className="object-contain mx-auto mb-3" />

            {/* TITLE */}
            <h3 className="font-semibold">{item.name}</h3>

            {/* DESCRIPTION */}
            <p className="text-xs mt-1 opacity-70">Delicious food experience</p>

            {/* PRICE + BUTTON */}
            <div className="flex justify-between items-center mt-4">
              <span className="font-bold">{item.price}</span>

              <button
                onClick={() => addToCart(item)}
                className={`w-8 h-8 flex items-center justify-center rounded ${
                  item.highlight
                    ? "bg-white text-[#4D2FB2]"
                    : "bg-[#F375C2] text-white"
                }`}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
