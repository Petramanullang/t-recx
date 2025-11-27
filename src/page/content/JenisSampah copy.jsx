import React, { useState } from "react";
import JenisSampahCard from "../../components/ui/JenisSampahCard";
import DetailJenisSampah from "../../components/ui/DetailJenisSampahCard";
export default function JenisSampah() {

  const cardsData = [
    {
      title: "Sampah Organik",
      largeVisualSrc: "/icons/JenisSampah.png", // Ikon kaleng hijau besar (State 1)
      detailImageSrc: "/images/organic.png", // Foto sisa makanan (State 2)
      description:
        "Sampah organik adalah sampah yang berasal dari makhluk hidup dan dapat terurai secara alami melalui proses biologis seperti dekomposisi.",
      type: "organik",
    },
    {
      title: "Sampah Anorganik",
      largeVisualSrc: "/icons/JenisSampah.png", // Ikon kaleng biru besar (State 1)
      detailImageSrc: "/images/anorganic.png", // Foto plastik/botol (State 2)
      description:
        "Sampah anorganik adalah sampah yang tidak dapat terurai secara alami dan umumnya membutuhkan proses daur ulang khusus.",
      type: "anorganik",
    },
  ];
  return (
    <div className="mb-70">
      <div className="relative h-[500px]">
        <div className="flex justify-center items-center pt-26">
          <h1 className="text-[45px] font-bold text-text-primary">
            Edukasi Pemilahan Sampah
          </h1>
          <img
            src="/icons/logo_about.png"
            alt="Latar Belakang Halaman"
            className="h-80 ml-4"
          />
        </div>
        <div className="mb-16 flex justify-center items-center ">
          <h3 className="text-2xl font-normal text-text-primary">
            Ayo, kenali jenis sampahmu dengan klik kartu pintar t-Recx di bawah
            ini !
          </h3>
        </div>
      </div>

      <div className="justify-center items-center display: flex gap-25">
        <div className="flex justify-center gap-10 ">
          {cardsData.map((card, index) => (
            <JenisSampahCard
              key={index}
              {...card}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
