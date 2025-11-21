// src/components/layouts/Navbar.jsx

import React, { useState } from 'react';

const Navbar = () => {
  // State untuk mengontrol tampilan menu saat layar kecil (mobile)
  const [isOpen, setIsOpen] = useState(false);

  // Daftar tautan navigasi
  const navLinks = [
    { title: 'Beranda', href: '#' },
    { title: 'Fitur', href: '#' },
    { title: 'Harga', href: '#' },
    { title: 'Masuk', href: '#' },
  ];

  return (
    <header className="bg-black/30 shadow-sm backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo atau Nama Situs */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-extrabold text-indigo-600">
              App Logo
            </a>
          </div>

          {/* Tautan Navigasi Utama (Desktop) */}
          <nav className="hidden md:block">
            <div className="flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href="#" 
                  className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium transition duration-150"
                >
                  {link.title}
                </a>
              ))}
              {/* Tombol CTA di desktop */}
              <button className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition duration-150">
                Daftar Sekarang
              </button>
            </div>
          </nav>

          {/* Tombol Menu (Mobile) - Menggunakan simbol teks */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-500 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 text-2xl"
            >
              <span className="sr-only">Buka menu utama</span>
              {/* Mengganti ikon dengan simbol teks (☰ untuk menu, X untuk tutup) */}
              {isOpen ? (
                <span aria-hidden="true">X</span>
              ) : (
                <span aria-hidden="true">☰</span>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Tampilan Menu saat Mobile Aktif */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href="#"
              className="text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 block px-3 py-2 rounded-md text-base font-medium transition duration-150"
              onClick={() => setIsOpen(false)} 
            >
              {link.title}
            </a>
          ))}
          <a
             href="#"
             className="text-white bg-indigo-600 hover:bg-indigo-700 block px-3 py-2 rounded-md text-base font-medium text-center mt-2"
             onClick={() => setIsOpen(false)}
          >
             Daftar Sekarang
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;