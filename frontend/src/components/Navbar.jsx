import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="bg-white px-6 md:px-10 py-5">

      <div className="flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-2xl font-bold text-red-500">
          Khadyo
        </h1>

        {/* NAV LINKS (DESKTOP) */}
        <div className="hidden md:flex gap-10 font-medium text-gray-700">
          <a className="hover:text-red-500 cursor-pointer">Home</a>
          <a className="hover:text-red-500 cursor-pointer">Menu</a>
          <a className="hover:text-red-500 cursor-pointer">Services</a>
          <a className="hover:text-red-500 cursor-pointer">Contact</a>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">

          {/* SEARCH */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className={`absolute right-0 ${
                searchOpen ? "w-30 md:w-40 opacity-100" : "w-0 opacity-0"
              } transition-all duration-300 px-3 py-2 border border-gray-200 rounded-full bg-white focus:outline-none`}
            />

            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-3 rounded-full hover:bg-gray-100 transition"
            >
              {/* SEARCH SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <line
                  x1="21"
                  y1="21"
                  x2="16.65"
                  y2="16.65"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>

          {/* CART */}
          <div className="relative cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 2h12m-10 4a1 1 0 100 2 1 1 0 000-2zm8 0a1 1 0 100 2 1 1 0 000-2z"
              />
            </svg>

            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
              2
            </span>
          </div>

          {/* HAMBURGER */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              /* CLOSE (X) */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" />
                <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" />
              </svg>
            ) : (
              /* HAMBURGER */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <line x1="4" y1="6" x2="20" y2="6" strokeWidth="2" />
                <line x1="4" y1="12" x2="20" y2="12" strokeWidth="2" />
                <line x1="4" y1="18" x2="20" y2="18" strokeWidth="2" />
              </svg>
            )}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-60 mt-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-4 bg-gray-50 p-4 rounded-xl text-gray-700 font-medium">
          <a className="hover:text-red-500">Home</a>
          <a className="hover:text-red-500">Menu</a>
          <a className="hover:text-red-500">Services</a>
          <a className="hover:text-red-500">Contact</a>
        </div>
      </div>

    </nav>
  );
}