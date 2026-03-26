import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="px-6 md:px-10 py-5 text-white">
      <div className="flex items-center justify-between">
        {/* LOGO */}
        <h1 className="text-2xl font-bold">Khadyo</h1>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-10 font-medium">
          {["Home", "Menu", "Services", "Contact"].map((item) => (
            <a
              key={item}
              className="hover:text-white/80 transition cursor-pointer"
            >
              {item}
            </a>
          ))}
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          {/* SEARCH */}
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className={`absolute right-0 ${
                searchOpen ? "w-32 md:w-40 opacity-100" : "w-0 opacity-0"
              } transition-all duration-300 px-3 py-2 border border-white/30 rounded-full bg-white/20 backdrop-blur-md text-white placeholder-white/70 focus:outline-none`}
            />

            <button
              onClick={() => setSearchOpen((prev) => !prev)}
              className="p-3 rounded-full hover:bg-white/20 transition"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8" strokeWidth="2" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" strokeWidth="2" />
              </svg>
            </button>
          </div>

          {/* CART */}
          <div className="relative cursor-pointer">
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5"
              />
            </svg>

            <span className="absolute -top-2 -right-2 bg-[#F375C2] text-xs px-1.5 py-0.5 rounded-full">
              2
            </span>
          </div>

          {/* HAMBURGER */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            {menuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <line x1="18" y1="6" x2="6" y2="18" strokeWidth="2" />
                <line x1="6" y1="6" x2="18" y2="18" strokeWidth="2" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
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
        <div className="flex flex-col gap-4 bg-white/10 backdrop-blur-md p-4 rounded-xl font-medium">
          {["Home", "Menu", "Services", "Contact"].map((item) => (
            <a key={item} className="hover:text-white/80">
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
