import { useEffect, useState, useRef } from "react";
import { getMenu } from "../api/menuApi";
import { useCart } from "../context/CartContext";

export default function Menu() {
  const [items, setItems] = useState([]);
  const [activeCategory, setActiveCategory] = useState("");
  const { cart, addToCart, decreaseQty } = useCart();

  const categoryRefs = useRef({});

  useEffect(() => {
    const fetchMenu = async () => {
      const res = await getMenu();
      setItems(res.data);
    };
    fetchMenu();
  }, []);

  // GROUP BY CATEGORY
  const groupedItems = items.reduce((acc, item) => {
    const category = item.category || "others";

    if (!acc[category]) acc[category] = [];
    acc[category].push(item);

    return acc;
  }, {});

  const categories = Object.keys(groupedItems);

  // SCROLL TO CATEGORY
  const scrollToCategory = (category) => {
    categoryRefs.current[category]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setActiveCategory(category)
  };

  // ACTIVE CATEGORY ON SCROLL
  useEffect(() => {
    const handleScroll = () => {
      let current = "";

      categories.forEach((category) => {
        const el = categoryRefs.current[category];
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = category;
          }
        }
      });

      setActiveCategory(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [categories]);

  return (
    <section className="px-4 md:px-10 py-10 min-h-screen">
      {/* TITLE */}
      <div className="max-w-3xl mx-auto mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Menu</h1>
        <p className="text-sm text-gray-500">Choose your favorite dishes</p>
      </div>

      {/* STICKY CATEGORY NAV */}
      <div className="fixed bottom-4 left-0 w-full z-50 px-4">
        <div className="max-w-[35rem] mx-auto bg-white shadow-lg rounded-full px-3 py-2 max-md:px-2 max-md:py-1 justify-center flex gap-3 max-md:gap-2 overflow-x-auto">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => scrollToCategory(category)}
              className={`whitespace-nowrap px-4 py-1.5 max-md:px-2 rounded-full text-lg max-md:text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-[#4D2FB2] text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {category.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* CATEGORY LOOP */}
      <div className="max-w-3xl mx-auto">
        {categories.map((category) => (
          <div
            key={category}
            ref={(el) => (categoryRefs.current[category] = el)}
            className="mb-10"
          >
            <h2 className="text-lg font-bold mb-4 text-gray-800 capitalize">
              {category} ({groupedItems[category].length})
            </h2>

            <div className="divide-y divide-gray-300">
              {groupedItems[category].map((item) => {
                const existing = cart.find((i) => i._id === item._id);

                return (
                  <div
                    key={item._id}
                    className="flex justify-between gap-6 py-7"
                  >
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
        ))}
      </div>
    </section>
  );
}
