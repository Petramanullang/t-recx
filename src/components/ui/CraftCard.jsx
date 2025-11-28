import React from 'react';
import { Link } from 'react-router-dom';
const CraftCard = ({ title, description, imageSrc, slug}) => {
        const destinationPath = `/content/galery/${slug}`;
        return (
                <Link to={destinationPath}>
                        <div className="relative rounded-[15px] w-[307px] h-[401px] overflow-hidden shadow-md hover:shadow-xl transition duration-300 group cursor-pointer bg-white">

                                {/* Gambar Produk (Penuh, di bawah semua konten lain) */}
                                <img
                                        src={imageSrc}
                                        alt={title}
                                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-125 transition-transform duration-500 z-0"
                                />

                                {/* GRADIENT OVERLAY (Untuk membuat teks lebih mudah dibaca) */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent z-10"></div>

                                {/* KONTEN TEKS & IKON (Overlay, di atas gambar dan gradien) */}
                                <div className="absolute inset-0 p-4 flex flex-col justify-end z-20"> {/* justify-end untuk menempel di bawah */}

                                        {/* Ikon Panah di Pojok Kanan Atas */}
                                        <div className="absolute top-3 right-3 bg-white/70 backdrop-blur-sm p-1.5 rounded-full z-30 group-hover:bg-green-500 transition duration-300">
                                                <span className="w-4 h-4 text-gray-800 group-hover:text-white font-bold">↗</span>
                                        </div>

                                        {/* Judul */}
                                        {/* 🌟 PENYESUAIAN WARNA DAN FONT 🌟 */}
                                        <h4 className="text-2xl font-bold text-white mb-2 leading-snug">
                                                {title}
                                        </h4>

                                        {/* Deskripsi */}
                                        {/* 🌟 PENYESUAIAN WARNA DAN FONT 🌟 */}
                                        <p className="text-sm text-white/90 leading-normal line-clamp-3">
                                                {description}
                                        </p>
                                </div>

                        </div>
                 </Link>
        );
};

export default CraftCard;