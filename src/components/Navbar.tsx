import { Home, Info, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom"; // ✅ import NavLink for routing

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: Info },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <NavLink
            to="/"
            className="flex items-center gap-1.5 sm:gap-2 cursor-pointer select-none group w-fit mx-aut"
          >
            {/* Logo Icon Container */}
            <div className="relative">
              {/* Logo Image Container */}
              <div className="relative b rounded-2xl p-1 sm:p-1.5 md:p-2">
                <img
                  src="/images/logo.png"
                  alt="Vraj Realty"
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain drop-shadow-md transition-transform duration-300"
                />
              </div>
            </div>

            {/* Brand Name */}
            <div className="flex flex-col">
              <div className="flex items-baseline gap-0.5 sm:gap-1">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-emerald-600">
                  Vraj
                </span>
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-700 transition-colors duration-300">
                  Realty
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] md:text-xs font-bold text-emerald-600 tracking-wide sm:tracking-wider md:tracking-widest uppercase mt-0.5 sm:mt-1">
                Your Space, Our Priority
              </span>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? "text-emerald-600 bg-emerald-50"
                      : "text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                  }`
                }
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>

          {/* Phone (Desktop only) */}
          <div className="hidden md:flex items-center space-x-2 text-gray-700">
            <Phone size={18} className="text-emerald-600" />
            <span className="text-sm font-medium">+91 7203007569</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-emerald-600 hover:bg-gray-100"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center space-x-2 w-full px-3 py-2 rounded-md text-base font-medium ${
                    isActive
                      ? "text-emerald-600 bg-emerald-50"
                      : "text-gray-700 hover:text-emerald-600 hover:bg-gray-50"
                  }`
                }
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
