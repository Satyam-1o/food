import { useEffect, useState } from "react";
import { getMenu } from "../api/menuApi";
import { useCart } from "../context/CartContext";

export default function Menu() {
  const [items, setItems] = useState([]);
  const { cart, addToCart, decreaseQty } = useCart();

  useEffect(() => {
    const fetchMenu = async () => {
      const res = await getMenu();
      setItems(res.data);
    };
    fetchMenu();
  }, []);

  return (
    <section className="px-4 md:px-10 py-10 min-h-screen">
      {/* TITLE */}
      <div className="max-w-3xl mx-auto mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Menu</h1>
        <p className="text-sm text-gray-500">Choose your favorite dishes</p>
      </div>

      {/* CATEGORY */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-lg font-bold mb-4 text-gray-800">
          Recommended ({items.length})
        </h2>

        {/* LIST */}
        <div className="divide-y-1 divide-gray-300">
          {items.map((item) => {
            const existing = cart.find((i) => i._id === item._id);

            return (
              <div key={item._id} className="flex justify-between gap-6 py-7">
                {/* LEFT */}
                <div className="flex-1 pr-4">
                  <h3 className="font-bold text-base text-gray-800 leading-snug">
                    {item.name}
                  </h3>

                  <p className="text-[#4D2FB2] font-semibold text-sm mt-2">
                    ₹{item.price}
                  </p>

                  <p className="text-sm text-gray-500 mt-3 leading-relaxed line-clamp-2">
                    {item.description || "Delicious food item"}
                  </p>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col items-center gap-3">
                  <div className="relative">
                    <img
                      src={item.image}
                      className="w-40 h-28 object-cover rounded-md"
                    />

                    {/* ADD / QTY BUTTON */}
                    <div className="absolute -bottom-3 left-1/2 -translate-x-1/2">
                      {!existing ? (
                        <button
                          onClick={() => addToCart(item)}
                          className="bg-white border border-gray-300 text-[#4D2FB2] text-sm px-6 py-1.5 rounded shadow-sm"
                        >
                          ADD
                        </button>
                      ) : (
                        <div className="flex items-center bg-white border border-gray-300 rounded shadow-sm overflow-hidden">
                          <button
                            onClick={() => decreaseQty(item._id)}
                            className="px-3 text-lg text-[#4D2FB2]"
                          >
                            −
                          </button>

                          <span className="px-3 text-sm font-medium">
                            {existing.qty}
                          </span>

                          <button
                            onClick={() => addToCart(item)}
                            className="px-3 text-lg text-[#4D2FB2]"
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
