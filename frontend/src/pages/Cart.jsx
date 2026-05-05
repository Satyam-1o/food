import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, addToCart, decreaseQty, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <section className="px-4 md:px-10 py-10 max-w-4xl mx-auto">

      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500">Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between mb-4 bg-white p-4 rounded-lg shadow-sm"
            >

              {/* LEFT */}
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  className="w-16 h-16 object-contain"
                />

                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">₹{item.price}</p>
                </div>
              </div>

              {/* QTY CONTROLS */}
              <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                <button
                  onClick={() => decreaseQty(item._id)}
                  className="px-2 text-lg"
                >
                  −
                </button>

                <span className="min-w-[20px] text-center">
                  {item.qty}
                </span>

                <button
                  onClick={() => addToCart(item)}
                  className="px-2 text-lg"
                >
                  +
                </button>
              </div>

              {/* REMOVE */}
              <button
                onClick={() => removeFromCart(item._id)}
                className="text-red-500 text-sm hover:underline"
              >
                Remove
              </button>
            </div>
          ))}

          {/* TOTAL + ACTIONS */}
          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">

            <p className="text-xl font-bold">
              Total: ₹{total}
            </p>

            <div className="flex gap-3">

              <button
                onClick={clearCart}
                className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
              >
                Clear
              </button>

              <Link to="/checkout">
                <button className="bg-[#4D2FB2] text-white px-6 py-2 rounded hover:opacity-90">
                  Checkout
                </button>
              </Link>

            </div>
          </div>
        </>
      )}
    </section>
  );
}