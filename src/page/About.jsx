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

            <div className="justify-around items-center mt-16 display: flex  mx-40">
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
            <div className="justify-around items-center mt-16 display: flex  mx-40">
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
            <div className="mb-16 flex justify-center">

            </div>

            <div className="mt-36 justify-around items-center mt-16 display: flex  mx-70">
                <div className="w-[681px] h-[518px] flex-shrink-0" style={{ marginLeft: '-70px', }}>
                    <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl ">
                        <iframe
                            // iframe diatur agar mengisi penuh wrapper
                            className="w-full h-full"
                            src="https://youtu.be/U77req16xE4?si=oC56ttjbJrw00wxd"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>

                <div className='mb-3' >
                    <div className='mb-9'>
                        <h3 className="text-4xl font-bold text-black mb-3">Visi</h3>
                        <h3 className="text-2xl font-medium text-[#757575]">“Mewujudkan masyarakat sadar lingkungan melalui <br /> edukasi digital yang interaktif, menyenangkan, dan <br />berkelanjutan.”</h3>
                    </div>
                    <div>
                        <h3 className="text-4xl font-bold text-black mb-3">Misi</h3>
                        <h3 className="text-2xl font-medium text-[#757575]">1. Meningkatkan literasi digital tentang pemilahan <br /> dan daur ulang sampah. <br />
                            <br />
                            2. Menyediakan akses mudah ke informasi dan <br />lokasi bank sampah <br />
                            <br />
                            3. Mendorong masyarakat untuk menciptakan karya <br /> dari sampah yang bernilai ekonomi.</h3>
                    </div>

                </div>
            </div>
            <div className='flex mb-16'>
                <div className="mt-36 justify-around items-center mt-16 display: flex  mx-64">
                    <div className='mb-9'>
                        <h3 className="text-4xl font-bold text-black mb-3">Mengapa Kami?</h3>
                        <h3 className="text-2xl font-medium text-[#757575]">“Karena t-Recx bukan sekadar situs informasi, tapi <br /> sebuah gerakan digital yang mengajak semua orang <br />untuk memilah, mendaur ulang, dan mencintai bumi <br />dengan cara yang seru dan mudah.</h3>
                    </div>
                </div>
                <div className='flex gap-25 mt-40' style={{ marginLeft: '-70px', }}>
                    <div className="w-[208px] h-[247px] flex-shrink-0" style={{ marginLeft: '-70px', }}>
                        <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl bg-red-500"> {/* Tambahkan bg-red-500 di sini */}
                        </div>
                    </div>

                    <div className="w-[208px] h-[247px] flex-shrink-0" style={{ marginLeft: '-70px', }}>
                        <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl bg-red-500"> {/* Tambahkan bg-red-500 di sini */}
                        </div>
                    </div>

                    <div className="w-[208px] h-[247px] flex-shrink-0" style={{ marginLeft: '-70px', }}>
                        <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl bg-red-500"> {/* Tambahkan bg-red-500 di sini */}
                        </div>
                    </div>
                </div>

            </div>



        </div>
    );
}