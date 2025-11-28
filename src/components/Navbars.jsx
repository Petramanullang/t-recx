import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <span className="p-4 bg-black opacity-50 backdrop-blur-2xl absolute z-20 w-full h-[95px]"></span>

      {/* DESKTOP NAVBAR (md:flex) */}
      <nav className="p-4 bg-transparent absolute z-50 w-full">
        <div className="container mx-auto pt-2 flex items-center lg:justify-between text-text-secondary">
          {/* MOBILE BURGER BUTTON */}
          <button className="md:hidden z-50" onClick={() => setOpen(true)}>
            <img
              src="/svg/burger-navbar.svg"
              alt="menu"
              className="h-8 w-8 object-contain"
            />
          </button>

          {/* LOGO DESKTOP */}
          <NavLink to="/" className="font-bold hidden lg:block">
            <img className="h-11 -translate-x-7" src="/img/navbar/logo-color.png" alt="" />
          </NavLink>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex font-semibold text-[20px] gap-10 pr-15">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-bg-secondary px-5 py-0.5 rounded-full"
                  : ""
              }
            >
              Beranda
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-bg-secondary px-5 py-0.5 rounded-full"
                  : ""
              }
            >
              Tentang Kami
            </NavLink>

            <NavLink
              to="/content"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-bg-secondary px-5 py-0.5 rounded-full"
                  : ""
              }
            >
              Konten
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-white bg-bg-secondary px-5 py-0.5 rounded-full"
                  : ""
              }
            >
              Hubungi Kami
            </NavLink>
          </div>

          {/* LOGO MOBILE */}
          <NavLink to="/" className="font-bold mx-auto -translate-x-3 lg:hidden">
            <img className="h-11" src="/img/navbar/logo-color.png" alt="" />
          </NavLink>
        </div>
      </nav>

      {/* MOBILE OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity md:hidden 
        ${
          open
            ? "opacity-80 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* MOBILE SLIDE MENU */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-3/4 max-w-[330px] transform transition-transform md:hidden
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div
          className="h-full p-6"
          style={{
            background: "#3F9B76",
            borderTopRightRadius: "48px",
            borderBottomRightRadius: "48px",
          }}
        >
          {/* CLOSE BUTTON */}
          <button onClick={() => setOpen(false)} className="p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* MOBILE MENU LIST */}
          <nav className="mt-10">
            <ul className="space-y-6 text-white text-lg font-medium">
              <li>
                <NavLink
                  to="/"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-4 pb-3 ${
                      isActive ? "border-b-2 border-white" : ""
                    }`
                  }
                >
                  <img src="/img/navbar/home.png" className="h-6" />
                  Beranda
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-4 pb-3 ${
                      isActive ? "border-b-2 border-white" : ""
                    }`
                  }
                >
                  <img src="/img/navbar/info.png" className="h-6" />
                  Tentang Kami
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/content"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-4 pb-3 ${
                      isActive ? "border-b-2 border-white" : ""
                    }`
                  }
                >
                  <img src="/img/navbar/content.png" className="h-6" />
                  Konten
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-4 pb-3 ${
                      isActive ? "border-b-2 border-white" : ""
                    }`
                  }
                >
                  <img src="/img/navbar/contact.png" className="h-6" />
                  Hubungi Kami
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  );
}
