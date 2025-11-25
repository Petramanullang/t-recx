// src/components/ui/FeatureCard.jsx
import React from 'react';

const ContentCard = ({ iconPlaceholder, title, description }) => {
  return (

    // <div className="bg-[#56877E] " style={{  borderRadius: '10px', width: '390px', height: '154px', marginLeft: '150px', }}>
    <div className="bg-[#56877E]" style={{  borderRadius: '25px', width: '386px', height: '400px', }}>

      <div className="items-center">
        
        <div className="text-white text-5xl  p-3"> 
          {iconPlaceholder}
        </div>
        <div className="p-7">
                <h3 className="text-white text-[-25px] font-bold mb-3">
                {title}
                </h3>
                <p className="text-white/90 text-[16px] leading-relaxed">
                {description}
                </p>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;