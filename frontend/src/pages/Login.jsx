import { useState } from "react";
import { loginUser } from "../api/authApi";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { login, user } = useAuth();
  const navigate = useNavigate();

  const location = useLocation();
  // fallback to home if no previous route
  const from = location.state?.from?.pathname || "/";
  // already logged in → redirect
  if (user) navigate(from);

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      return setError("Please fill all fields");
    }

    try {
      setLoading(true);
      setError("");

      const res = await loginUser(form);

      login(res.data);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 space-y-4 px-4">
      <h2 className="text-2xl font-bold text-center">Login</h2>

      {error && <p className="text-red-500 text-sm text-center">{error}</p>}

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
        {loading ? "Logging in..." : "Login"}
      </button>

      <p className="text-sm text-center text-gray-600">
        Don’t have an account?{" "}
        <Link to="/register" className="text-[#4D2FB2] font-medium">
          Register
        </Link>
      </p>
    </div>
  );
}
