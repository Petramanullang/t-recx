import React from 'react';

const GalleryDetail = ({ imageSrc, source, deskripsi, alat, bahan, carabuat, buat }) => {
        const listStyle = "text-[25px] font-medium text-[#808181] leading-[1.84] mx-20 mb-10 list-decimal list-inside space-y-2 mt-2";
        return (
        <div className="pt-8"> 
            
            {/* 1. GAMBAR UTAMA */}
            <div className="flex items-center justify-center mb-4">
                {/* 🌟 PERBAIKAN: Ganti w-300 yang tidak valid 🌟 */}
                <img src={imageSrc} className="w-300" alt="Gambar Kerajinan" />
            </div>
            
            {/* Sumber Gambar */}
            <h4 className='text-[16px] font-medium text-[#808181] text-center mb-8'>{source}</h4>
            
            {/* 2. DESKRIPSI UTAMA */}
            <div className="px-25">
                <h4 className="text-[22px] font-medium text-[#808181] leading-[1.84] text-justify">
                    {deskripsi}
                </h4>
            </div>

            {/* 3. ALAT DAN BAHAN */}
            <div className="mt-10 px-5">
                <h3 className="text-[25px] font-semibold mx-20">{alat}</h3>
                <ol className={listStyle}>
                    {bahan.map((item, index) => (
                        <li key={index}> {item} </li>
                    ))}
                </ol>
            </div>

            {/* 4. CARA PEMBUATAN */}
            <div className="mt-10 px-5"> 
                <h3 className="text-[25px] font-semibold mx-20">{carabuat}</h3>
                <ol className={listStyle}>
                    {buat.map((item, index) => (
                        <li key={index}> {item} </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default GalleryDetail;