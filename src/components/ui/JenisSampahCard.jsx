// src/components/ui/JenisSampahCard.jsx

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const JenisSampahCard = ({
  title,
  description,
  largeVisualSrc,
  detailImageSrc,
  type,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate(); 

  const handleDetailClick = () => {
    navigate(`/content/jenis-sampah/${type}`);
  };

  return (
    <div
      // Tetap menggunakan dimensi tetap dan shadow
      className="w-[386px] h-[400px] rounded-2xl overflow-hidden shadow-lg 
                       cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 🌟 1. TATA LETAK DEFAULT (SEBELUM HOVER) 🌟 */}
      {!isHovered && (
        <div className="w-full h-full bg-[#90C890] flex flex-col items-center justify-center text-center p-6 transition-colors duration-300">
          <img
            src={largeVisualSrc} // Ikon / Gambar Besar
            alt={title}
            className="w-40 h-40 mx-auto mb-4"
          />
          <h3 className="text-3xl font-bold text-gray-800">{title}</h3>
          {/* Deskripsi TIDAK DITAMPILKAN di sini */}
        </div>
      )}

      {/* 🌟 2. TATA LETAK HOVER (SETELAH HOVER) 🌟 */}
      {isHovered && (
        <div className="w-full h-full bg-[#DEEBDE] flex flex-col items-center text-center p-4 transition-colors duration-300">
          {/* Gambar Foto Kecil di Atas */}
          <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4">
            <img
              src={detailImageSrc} // Foto Sampah Asli
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Judul & Deskripsi */}
          <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 overflow-hidden h-16">
            {description}
          </p>

          {/* Tombol Lihat Detail */}
          <button
            onClick={handleDetailClick}
            className="mt-auto px-6 py-2 bg-bg-secondary text-white font-semibold rounded-full 
                                   hover:bg-teal-700 transition-colors duration-200 shadow-md"
          >
            Lihat Detail
          </button>
        </div>
      )}
    </div>
  );
};

export default JenisSampahCard;
