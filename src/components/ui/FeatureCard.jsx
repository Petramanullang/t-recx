// src/components/ui/FeatureCard.jsx
import React from 'react';

const FeatureCard = ({ iconPlaceholder, title, description }) => {
  return (

    // <div className="bg-[#56877E] " style={{  borderRadius: '10px', width: '390px', height: '154px', marginLeft: '150px', }}>
    <div className="bg-[#56877E]" style={{  borderRadius: '25px', width: '390px', height: '154px', marginLeft: '40px', }}>

      <div className="flex  items-center">
        
        <div className="text-white text-5xl  p-3"> 
          {iconPlaceholder}
        </div>
        <div className="p-7">
                <h3 className="text-white text-3xl font-bold mb-3">
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

export default FeatureCard;