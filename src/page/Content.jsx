import React from "react";
import { Link } from "react-router-dom";

export default function Content() {
  return (
    <div className="relative h-[500px] ">
      <div className="flex justify-center items-center ">
        <h1 className="text-7xl font-bold text-[#121F0B]">Konten t-Recx</h1>
        <img
          src="/icons/logo_about.png"
          alt="Latar Belakang Halaman"
          className="h-100 ml-4"
        />
      </div>
      <div className="mb-16 flex justify-center items-center ">
        <h3 className="text-2xl font-normal text-[#121F0B]">
          Kami mengembangkan platform edukasi digital yang mengajarkan
          masyarakat untuk :
        </h3>
      </div>

      <div className="justify-center items-center display: flex gap-25">
        <Link
          to="/content/jenis-sampah"
          className="group bg-[#8EC291] hover:bg-[#3E7F61] duration-200"
          style={{
            borderRadius: "25px",
            width: "386px",
            height: "400px",
            textDecoration: "none",
          }}
        >
          {" "}
          {/* Tambahkan textDecoration: 'none' untuk hapus garis bawah */}
          {/* Konten Kartu */}
          <div className="justify-center items-center">
            <img
              src="/images/content1.png"
              alt="Edukasi Pemilahan Sampah"
              className="p-4"
            />
            <div className="mx-6 text-center">
              <h2 className="text-black group-hover:text-white text-[25px] font-bold duration-200">
                Edukasi Pemilahan Sampah
              </h2>
              <p className="text-black group-hover:text-white text-[16px] leading-relaxed duration-200">
                Mulai dari kebiasaan kecil di rumah. Pelajari jenis-jenis sampah
                dan bagaimana cara menanganinya dengan mudah dan menyenangkan.
              </p>
            </div>
          </div>
        </Link>
        <div
          className="group bg-[#8EC291] hover:bg-[#3E7F61] duration-200"
          style={{ borderRadius: "25px", width: "386px", height: "400px" }}
        >
          <div className="justify-center items-center">
            <img
              src="/images/content2.png"
              alt="Latar Belakang Halaman"
              className="p-4"
            />
            <div className="mx-6 text-center">
              <h2 className="text-black group-hover:text-white text-[25px] font-bold duration-200">
                Temukan Bank Sampah
              </h2>
              <p className="text-black group-hover:text-white text-[16px] leading-relaxed duration-200">
                Temukan tempat terbaik untuk menyetorkan sampahmu. Dengan input
                lokasi, kamu bisa mengetahui lokasi bank sampah di sekitarmu dan
                mulai berkontribusi dari mana saja.{" "}
              </p>
            </div>
          </div>
        </div>
        <div
          className="group bg-[#8EC291] hover:bg-[#3E7F61] duration-200"
          style={{ borderRadius: "25px", width: "386px", height: "400px" }}
        >
          <div className="justify-center items-center">
            <img
              src="/images/content3.png"
              alt="Latar Belakang Halaman"
              className="p-4"
            />
            <div className="mx-6 text-center">
              <h2 className="text-black group-hover:text-white text-[25px] font-bold duration-200">
                Tutorial Kerajinan Kreatif
              </h2>
              <p className="text-black group-hover:text-white text-[16px] leading-relaxed duration-200">
                Ubah limbah jadi sesuatu yang bernilai. Lihat berbagai ide DIY
                (Do It Yourself) dari bahan bekas, lengkap dengan tutorial
                langkah demi langkah untuk kamu coba di rumah.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
