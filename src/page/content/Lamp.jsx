import GalleryDetail from "../../components/ui/GalleryDetail";


export default function Lamp() {
         const dataVasBunga = {
                 imageSrc: "/images/lampDetail.png",
                 source: "Sumber : Fuzhou Huikaihua Arts & Crafts Co",
                deskripsi: "Kertas atau karton bekas bisa jadi lampion cantik untuk dekorasi kamar atau acara kecil. Kerajinannya ringan, hemat bahan, dan mudah dibuat oleh siapa pun.",
                alat: "Alat dan Bahan",
                bahan: ["Kertas bekas (kado, majalah, karton tipis)", "Gunting",  "Lem", "Cutter", "Tali Cutter untuk gantungan"],
                carabuat: "Cara Pembuatan",
                buat: ["Lipat kertas menjadi dua.", "Buat potongan vertikal kecil menggunakan cutter.", "Buka lipatan, bentuk menjadi tabung, lalu lem kedua sisinya.", "Tambahkan strip kertas di atas sebagai pegangan.", "Lampion siap digantung!"],
        };
        return (
                <div className="">
                        <div className="relative h-[300px] flex flex-col justify-end">
                                <div className="flex text-center items-center justify-center">
                                        <h3 className="font-bold text-[45px]  text-[#121F0B]">Lampion dari Kertas / Karton Bekas</h3>
                                </div>
                        </div>
                        <GalleryDetail
                                imageSrc={dataVasBunga.imageSrc}
                                deskripsi={dataVasBunga.deskripsi}
                                source={dataVasBunga.source}

                                alat={dataVasBunga.alat}
                                bahan={dataVasBunga.bahan}
                                carabuat={dataVasBunga.carabuat}
                                buat={dataVasBunga.buat}
                        />
                         <div>
                                <img src="/icons/lampion.png" className="w-170 ms-190 mt-30" alt="" />
                        </div>
                </div>
        );
}