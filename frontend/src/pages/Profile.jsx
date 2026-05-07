import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getMyOrders } from "../api/orderApi";
import { useNavigate } from "react-router-dom"

export default function Profile() {
  const { user, logout } = useAuth();
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await getMyOrders();
        setOrders(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-[#2f6f8f]">
      {/* HEADER */}
      <div className="max-w-6xl mx-auto px-6 py-10 flex justify-between items-center text-white">
        <div>
          <h1 className="text-3xl font-bold">{user?.name}</h1>
          <p className="text-sm opacity-90">{user?.email}</p>
        </div>

        <button
          onClick={handleLogout}
          className="border px-5 py-2 rounded hover:bg-white hover:text-black transition"
        >
          Logout
        </button>
      </div>

      {/* MAIN CARD */}
      <div className="max-w-6xl mx-auto bg-white rounded-sm flex min-h-[500px]">
        {/* SIDEBAR */}
        <div className="w-64 bg-gray-100 p-6 space-y-6">
          <div className="font-semibold text-black">Orders</div>

          <div className="text-gray-500">Settings</div>
        </div>

        {/* CONTENT */}
        <div className="flex-1 p-10">
          <h2 className="text-xl font-semibold mb-6">Your Orders</h2>

          {orders.length === 0 ? (
            <div className="text-center mt-20 text-gray-500">
              <p className="text-lg font-semibold">No Orders</p>
              <p className="text-sm mt-2">You haven't placed any order yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order._id} className="border rounded p-4">
                  <p className="font-medium">Order #{order._id.slice(-6)}</p>

                  <p className="text-sm text-gray-500">
                    {new Date(order.createdAt).toLocaleString()}
                  </p>

                  <div className="mt-2 text-sm">
                    {order.items.map((item, i) => (
                      <p key={i}>
                        {item.name} × {item.qty}
                      </p>
                    ))}
                  </div>

                  <p className="mt-2 font-semibold text-[#4D2FB2]">
                    ₹{order.totalPrice}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
