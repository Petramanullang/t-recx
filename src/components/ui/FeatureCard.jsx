// src/components/ui/FeatureCard.jsx
import React from 'react';

const FeatureCard = ({ iconPlaceholder, title, description }) => {
  return (

    // <div className="bg-[#56877E] " style={{  borderRadius: '10px', width: '390px', height: '154px', marginLeft: '150px', }}>
    <div className="bg-[#4E9574] p-4" style={{ borderRadius: '25px', width: '390px', height: '182px', }}>

      <div className="flex ">

        <div className="flex-shrink-0 w-30 flex items-start justify-center pt-9"> {/* Sesuaikan w-20 dan pt-2 */}
          <img
            src={iconPlaceholder}
            alt={title + " icon"}
            className="w-20 " // Ukuran ikon (misalnya w-12 h-12 = 48px)
          />
        </div>
        <div className="flex-grow pl-4"> {/* pl-4 memberi jarak antara ikon dan teks */}
          <h3 className="text-white text-3xl font-bold mb-2 mt-2"> {/* text-xl ≈ 20px */}
            {title}
          </h3>
          <p className="text-white/90 text-[18px] leading-relaxed"> {/* text-sm ≈ 14px */}
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;