import { useState } from "react";
import { registerUser } from "../api/authApi";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link, Navigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { user, login } = useAuth();
  const navigate = useNavigate();

  // already logged in → go home
  if (user) return <Navigate to="/" />;

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.password) {
      return setError("Please fill all fields");
    }

    try {
      setLoading(true);
      setError("");

      const res = await registerUser(form);

      // auto-login after register
      login(res.data);
      navigate("/");

    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 space-y-4 px-4">

      <h2 className="text-2xl font-bold text-center">Create Account</h2>

      {error && (
        <p className="text-red-500 text-sm text-center">{error}</p>
      )}

      <input
        placeholder="Name"
        className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#4D2FB2]"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#4D2FB2]"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full border p-3 rounded focus:outline-none focus:ring-2 focus:ring-[#4D2FB2]"
        onChange={(e) => setForm({ ...form, password: e.target.value })}
      />

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="bg-[#4D2FB2] text-white px-6 py-3 rounded w-full hover:opacity-90 transition disabled:opacity-50"
      >
        {loading ? "Creating..." : "Register"}
      </button>

      <p className="text-sm text-center text-gray-600">
        Already have an account?{" "}
        <Link to="/login" className="text-[#4D2FB2] font-medium">
          Login
        </Link>
      </p>

    </div>
  );
}