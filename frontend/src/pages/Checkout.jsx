import { useCart } from "../context/CartContext";
import { createOrder } from "../api/orderApi";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  const handleOrder = async () => {
    try {
      await createOrder({
        items: cart,
        totalPrice: total,
      });

      clearCart();
      navigate("/");

      alert("Order placed successfully!");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="px-6 md:px-10 py-10 max-w-3xl mx-auto">

      <h2 className="text-2xl font-bold mb-6">Checkout</h2>

      {cart.map((item) => (
        <div key={item._id} className="flex justify-between mb-4">
          <span>{item.name} x {item.qty}</span>
          <span>₹{item.price * item.qty}</span>
        </div>
      ))}

      <div className="mt-6 font-bold text-xl">
        Total: ₹{total}
      </div>

      <button
        onClick={handleOrder}
        className="mt-6 bg-[#4D2FB2] text-white px-6 py-3 rounded"
      >
        Place Order
      </button>

    </section>
  );
}