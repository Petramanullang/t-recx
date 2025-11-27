import FeatureCard from "../components/ui/FeatureCard";
import React from "react";
import TeamMemberCard from "../components/ui/TeamMemberCard";
import Navbar from "../components/Navbars";
import Footer from "../components/Footer";

const featuresData = [
  {
    icon: "/icons/education.png", // Placeholder untuk ikon edukasi
    title: "Mengedukasi",
    description:
      "Belajar memilah sampah jadi hal yang ringan dan menyenangkan.",
  },
  {
    icon: "/icons/point.png", // Placeholder untuk ikon lokasi
    title: "Akses Mudah",
    description: "Temukan bank sampah dan drop point hanya dengan satu klik.",
  },
  {
    icon: "/icons/lamp.png", // Placeholder untuk ikon kreatif
    title: "Kreatif",
    description:
      "Ubah limbah jadi karya bernilai untung dan berdampak positif.",
  },
];
const teamMembersData = [
  { name: "Petra Julliansen Manullang", imageSrc: "/images/petra.png" },
  { name: "Nafillah Izzah Syafitri W.", imageSrc: "/images/izzah.png" },
  { name: "Muhammad Arreysyahri A.", imageSrc: "/images/rei.png" },
];
export default function About() {
  return (
    <div>
      <div className="relative h-[412px]">
        <img
          src="/images/ttgKami.png"
          alt="Latar Belakang Halaman"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />

        <div className="relative z-10 h-full flex flex-col">
          <div className="grow flex items-center justify-center">
            <h1 className="text-[80px] font-extrabold text-white text-center mt-10">
              Tentang Kami
            </h1>
          </div>
        </div>
      </div>

      <div className="justify-around items-center mt-16 display: flex mx-10">
        <h1 className="text-5xl font-bold text-text-primary">
          Berkenalan lebih
          <br />
          dekat dengan tim
          <br />
          <span className="text-5xl font-bold text-[#3E7F61] "> t-Recx</span>!
        </h1>
        <h3 className="text-2xl font-medium text-[#757575]">
          Tim kreatif muda yang peduli <br />
          terhadap isu lingkungan, <br />
          khususnya masalah sampah
          <br /> rumah tangga di Indonesia.
        </h3>
        <h3 className="text-2xl font-medium text-[#757575]">
          Kami percaya bahwa edukasi bisa <br />
          jadi kunci perubahan dan teknologi <br />
          bisa membuatnya lebih mudah
          <br />
          diakses oleh semua orang..
        </h3>
      </div>

      <div className="mt-16 flex justify-center items-center ">
        <h1 className="text-5xl font-bold text-text-primary">
          Apa Yang Kami Lakukan?
        </h1>
        <img
          src="/icons/logo_about.png"
          alt="Latar Belakang Halaman"
          className="h-100 ml-4"
        />
      </div>

      <div className="justify-around items-center display: flex mx-10">
        {featuresData.map((feature, index) => (
          <div key={index} className="">
            <FeatureCard
              iconPlaceholder={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </div>
        ))}
      </div>
      <div className="mb-16 flex justify-center"></div>

      <div className="justify-around items-center mt-36 display: flex  mx-10">
        <div
          className="w-[681px] h-[518px] shrink-0"
          style={{ marginLeft: "-70px" }}
        >
          <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl ml-14">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/U77req16xE4?si=iWDGWJeF07kNArOA"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="mb-3">
          <div className="mb-9">
            <h3 className="text-4xl font-bold text-black mb-3">Visi</h3>
            <h3 className="text-2xl font-medium text-[#757575]">
              “Mewujudkan masyarakat sadar lingkungan melalui <br /> edukasi
              digital yang interaktif, menyenangkan, dan <br />
              berkelanjutan.”
            </h3>
          </div>
          <div>
            <h3 className="text-4xl font-bold text-black mb-3">Misi</h3>
            <h3 className="text-2xl font-medium text-[#757575]">
              1. Meningkatkan literasi digital tentang pemilahan <br /> dan daur
              ulang sampah. <br />
              <br />
              2. Menyediakan akses mudah ke informasi dan <br />
              lokasi bank sampah <br />
              <br />
              3. Mendorong masyarakat untuk menciptakan karya <br /> dari sampah
              yang bernilai ekonomi.
            </h3>
          </div>
        </div>
      </div>

      <p className="text-[45px] font-bold text-right -translate-x-42 mt-36">
        Anggota Tim t-Recx
      </p>

      <div className="flex">
        <div className="justify-around items-center display: flex  mx-25">
          <div className="mb-9">
            <h3 className="text-4xl font-bold text-black mb-3">
              Mengapa Kami?
            </h3>
            <h3 className="text-2xl font-medium text-[#757575]">
              “Karena t-Recx bukan sekadar situs informasi, tapi <br /> sebuah
              gerakan digital yang mengajak semua orang <br />
              untuk memilah, mendaur ulang, dan mencintai bumi <br />
              dengan cara yang seru dan mudah.
            </h3>
          </div>
        </div>
        <div className="flex gap-10" style={{ marginLeft: "-70px" }}>
          {teamMembersData.map((member, index) => (
            <div key={index} className="">
              <TeamMemberCard name={member.name} imageSrc={member.imageSrc} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
