import React from "react";

const DetailJenisSampah = ({ type }) => {
  let title = "";
  let description = "";
  let characterImage = {};
  let listItems = [];
  let colorClass = ""; // Untuk warna header dan teks

  if (type === "organik") {
    title = "Sampah Organik";
    description =
      "Sampah organik adalah sampah yang berasal dari makhluk hidup dan dapat terurai secara alami melalui proses biologis seperti dekomposisi.";
    characterImage = "/images/organik2.png";
    listItems = [
      "Sisa makanan (nasi, roti, buah-buahan, sayuran)",
      "Daun kering, ranting pohon, rumput",
      "Ampas kopi/teh",
      "Cangkang telur",
      "Tisu kotor (tanpa bahan kimia)",
    ];
    colorClass = "bg-bg-secondary text-white"; // Warna hijau untuk organik
  } else if (type === "anorganik") {
    title = "Sampah Anorganik";
    description =
      "Sampah anorganik adalah sampah yang tidak dapat terurai secara alami dan umumnya membutuhkan proses daur ulang khusus.";
    characterImage = "/images/anorganik2.png";
    listItems = [
      "Plastik (botol, kemasan, kantong)",
      "Kaca (botol, gelas)",
      "Logam (kaleng, aluminium foil)",
      "Kertas (koran, kardus, majalah)",
      "Karet, tekstil sintetis",
    ];
    colorClass = "bg-bg-secondary text-white"; // Warna biru untuk anorganik
  } else {
    return (
      <div className="p-8 text-center text-gray-500">
        Pilih jenis sampah untuk melihat detail.
      </div>
    );
  }

  return (
    <div className="mt-16 bg-white rounded-lg shadow-xl overflow-hidden">
      {/* Header Halaman Detail */}
      <div
        className={`relative ${colorClass} p-8 flex items-center justify-between`}
      >
        <h2 className="text-5xl font-bold">{title}</h2>
      </div>
      <img src="/icons/logo_about.png" alt="t-Recx Karakter" className="h-90" />

      {/* Konten Utama Detail */}
      <div className="p-8">
        <div className="flex">
          {characterImage}
          <h3 className="text-3xl font-semibold mb-4 text-gray-800">
            Definisi {title}
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            {description}
          </p>
        </div>

        <h3 className="text-3xl font-semibold mb-4 text-gray-800">
          Contoh {title}
        </h3>
        <ul className="list-disc list-inside ml-4 space-y-2 text-lg text-gray-700">
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DetailJenisSampah;
