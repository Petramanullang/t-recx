import React from "react";

const DetailJenisSampah =  ({ imagesSrc, title, title2, description, description2 })=> {

  return (
    <div className="">
      <div className="p-8">
        <div className="flex">
          {imagesSrc}
          <h3 className="text-3xl font-semibold mb-4 text-gray-800">
            Definisi {title}
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {description}
          </p>
        </div>
        <div className="text-2xl">
          {description2}
        </div>

        <h3 className="text-3xl font-semibold mb-4 text-gray-800">
          {title2}
        </h3>
        <h3>
          
        </h3>
      </div>
    </div>
  );
};

export default DetailJenisSampah;
