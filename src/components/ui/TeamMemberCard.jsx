import React from 'react';

const TeamMemberCard = ({ name, imageSrc }) => {
  return (
    // Kontainer utama harus relative agar absolute pada overlay berfungsi
    <div className="relative text-center">
      
      {/* Gambar Anggota Tim */}
      <img
        src={imageSrc}
        alt={name}
        className="h-80 w-auto mx-auto " // h-72 menetapkan tinggi gambar
      />
      
      <div 
        className="absolute bottom-0 left-0 right-0 bg-black/60 rounded-tr-[26px] rounded-bl-[21px]"
      > 
        <p className="text-lg font-semibold text-white text-[14px]">
          {name}
        </p>
      </div>

    </div>
  );
};

export default TeamMemberCard;