import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const activeStyle = "text-white bg-[#4E9574] px-5 py-0.5 rounded-full";
  return (
    <div>
      <span className="p-4 bg-black opacity-50 backdrop-blur-2xl absolute z-20 w-full h-[95px]"></span>
   
      <nav className="p-4 bg-transparent absolute z-50 w-full">
        <div className="container mx-auto flex items-center justify-between text-text-secondary">
          <NavLink to="/" className="font-bold">
            <img
              className="h-13"
              src="/public/img/navbar/logo-color.png"
              alt=""
            />
          </NavLink>

          <div className="flex font-semibold text-[20px] gap-10 pr-20">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? activeStyle : "")}
            >
              Beranda
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? activeStyle : ""
              }
            >
              Tentang Kami
            </NavLink>

            <NavLink
              to="/konten"
              className={({ isActive }) =>
                isActive ? activeStyle : ""
              }
            >
              Konten
            </NavLink>

            <NavLink
              to="/hubungi"
              className={({ isActive }) =>
                isActive ? activeStyle : ""
              }
            >
              Hubungi Kami
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
