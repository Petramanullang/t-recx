import FeatureCard from '../components/ui/FeatureCard';
import React from 'react';

const featuresData = [
  {
    icon: '🎓', // Placeholder untuk ikon edukasi
    title: 'Mengedukasi',
    description: 'Belajar memilah sampah jadi hal yang ringan dan menyenangkan.',
  },
  {
    icon: '📍', // Placeholder untuk ikon lokasi
    title: 'Akses Mudah',
    description: 'Temukan bank sampah dan drop point hanya dengan satu klik.',
  },
  {
    icon: '💡', // Placeholder untuk ikon kreatif
    title: 'Kreatif',
    description: 'Ubah limbah jadi karya bernilai untung dan berdampak positif.',
  },
];
export default function About() {
    return (
        // Kontainer Utama: relative, agar konten di dalamnya bisa diatur
        <div className="relative h-[500px] ">

            <img
                src="/images/background_about.png"
                alt="Latar Belakang Halaman"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <div className="relative z-10 h-full flex flex-col">
                <div className="flex-grow flex items-center justify-center">
                    <h1 className="text-[60px] font-extrabold text-white text-center">
                        Tentang Kami
                    </h1>
                </div>
            </div>

            <div className="justify-around items-center mt-16 display: flex">
                <h1 className="text-5xl font-bold text-[#121F0B]">Berkenalan lebih<br />
                    dekat dengan tim<br />
                    <span className="text-5xl font-bold text-[#3E7F61] "> t-Recx</span>!</h1>
                <h3 className="text-2xl font-medium text-[#757575]">Tim kreatif muda yang peduli <br />terhadap isu lingkungan, <br />khususnya masalah sampah<br /> rumah tangga di Indonesia.</h3>
                <h3 className="text-2xl font-medium text-[#757575]">Kami percaya bahwa edukasi bisa <br />jadi kunci perubahan dan teknologi  <br />bisa membuatnya lebih mudah<br />diakses oleh semua orang..</h3>
            </div>

            <div className="mt-16 mb-16 flex justify-center items-center ">
                <h1 className="text-5xl font-bold text-[#121F0B]">Apa Yang Kami Lakukan?
                </h1>
                <img
                    src="/icons/logo_about.png"
                    alt="Latar Belakang Halaman"
                    className="h-100 ml-4"
                />
            </div>
             <div className="mb-16 flex justify-center  ">
                {featuresData.map((feature, index) => (
                    <div key={index} className="w-full md:w-1/3"> 
                        <FeatureCard 
                            iconPlaceholder={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}