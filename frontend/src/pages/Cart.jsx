import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, addToCart, decreaseQty, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <section className="px-4 md:px-10 py-10 max-w-4xl mx-auto">

      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between mb-4 bg-white p-4 rounded-lg shadow"
            >
              <div className="flex items-center gap-4">
                <img src={item.image} className="w-16 h-16 object-contain" />
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-sm text-gray-500">₹{item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button onClick={() => decreaseQty(item._id)}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => addToCart(item)}>+</button>
              </div>

              <button
                onClick={() => removeFromCart(item._id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}

          <div className="mt-6 text-right">
            <p className="text-xl font-bold">Total: ₹{total}</p>

            <button
              onClick={clearCart}
              className="mt-3 bg-red-500 text-white px-4 py-2 rounded"
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </section>
  );
}