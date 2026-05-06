import { useState, useEffect } from "react";
import { getMenu } from "../api/menuApi";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { addToCart } = useCart();

  const selectedIds = ["69fa3e4a485a65920fec48bb", "69fb4deb485a65920fec4904", "69fb771a9f5e9237bac96246", "69fb7af09f5e9237bac96254"];

  const filteredProducts = products.filter((item) =>
    selectedIds.includes(item._id),
  );

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
          <Link to="/menu">View All →</Link>
        </button>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((item, i) => (
          <div
            key={i}
            className={`relative p-4 rounded-md transition hover:shadow-lg cursor-pointer flex flex-col h-full`}
          >
            {/* IMAGE */}
            <img
              src={item.image}
              className="w-full h-50 object-contain mx-auto mb-3"
            />

            {/* TITLE */}
            <h3 className="font-semibold h-15 max-md:text-sm">{item.name}</h3>

            {/* DESCRIPTION */}
            <p className="text-xs mt-1 opacity-70 ">
              {item.description.slice(0, 50)}
            </p>

            {/* PRICE + BUTTON */}
            <div className="flex justify-between items-center mt-auto ">
              <span className="font-bold">{item.price}</span>

              <button
                onClick={() => addToCart(item)}
                className={`w-8 h-8 flex items-center justify-center rounded text-white bg-[#F375C2]`}
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
