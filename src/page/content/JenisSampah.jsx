import { useNavigate } from "react-router-dom";
import JenisSampahCard from "../../components/ui/JenisSampahCard";

export default function JenisSampah() {
  const navigate = useNavigate();

  const handleSelectType = (type) => {
    navigate(`/content/jenis-sampah/${type}`);
  };

  const cardsData = [
    {
      title: "Sampah Organik",
      largeVisualSrc: "/icons/JenisSampah.png",
      detailImageSrc: "/images/organic.png",
      description:
        "Sampah organik adalah sampah yang berasal dari makhluk hidup...",
      type: "organik",
    },
    {
      title: "Sampah Anorganik",
      largeVisualSrc: "/icons/JenisSampah.png",
      detailImageSrc: "/images/anorganic.png",
      description: "Sampah anorganik adalah sampah yang tidak dapat terurai...",
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
        <div className="flex justify-center gap-10">
          {cardsData.map((card, index) => (
            <JenisSampahCard
              key={index}
              {...card}
              onSelectType={handleSelectType}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
