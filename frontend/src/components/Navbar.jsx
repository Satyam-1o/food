import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cart } = useCart();
  const { user } = useAuth();

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "Contact", path: "/" },
  ];

  const getFirstName = (name) => {
    if (!name) return "";
    return name.split(" ")[0];
  };

  const getInitial = (name) => {
    if (!name) return "";
    return name[0].toUpperCase();
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="text-2xl font-bold text-[#4D2FB2]">
          Khadyo
        </Link>

        {/* LINKS */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`transition ${
                location.pathname === item.path
                  ? "text-black font-semibold"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* SIGN IN / PROFILE */}
          {!user ? (
            <Link
              to="/login"
              className="px-4 py-1.5 border border-[#4D2FB2] text-[#4D2FB2] rounded-full text-sm font-medium hover:bg-[#4D2FB2] hover:text-white transition"
            >
              Sign In
            </Link>
          ) : (
            <Link
              to="/profile"
              className="flex items-center gap-2 px-2 py-1 rounded-full hover:bg-gray-100 transition"
            >
              <div className="w-8 h-8 rounded-full bg-[#4D2FB2] text-white flex items-center justify-center text-sm font-semibold">
                {getInitial(user.name)}
              </div>

              <span className="hidden md:block text-sm font-medium text-gray-700">
                {getFirstName(user.name)}
              </span>
            </Link>
          )}

          {/* CART */}
          <Link to="/cart" className="relative group">
            <div className="p-2 rounded-full hover:bg-gray-100 transition">
              <svg
                className="h-5 w-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5"
                />
              </svg>
            </div>

            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#F375C2] text-white text-[10px] px-1.5 py-0.5 rounded-full">
                {totalItems}
              </span>
            )}
          </Link>

          {/* HAMBURGER */}
          <button
            className="md:hidden p-2 rounded hover:bg-gray-100 transition"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {menuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" />
                  <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" />
                </>
              ) : (
                <>
                  <line x1="4" y1="6" x2="20" y2="6" strokeWidth="2" />
                  <line x1="4" y1="12" x2="20" y2="12" strokeWidth="2" />
                  <line x1="4" y1="18" x2="20" y2="18" strokeWidth="2" />
                </>
              )}
            </svg>
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-60 border-t" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-6 py-4 bg-white text-sm">

          {links.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

    </nav>
  );
}