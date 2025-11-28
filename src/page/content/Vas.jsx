import GalleryDetail from "../../components/ui/GalleryDetail";

export default function Vas() {
        const dataVasBunga = {
                imageSrc: "/images/vasDetail.png",
                deskripsi: "Botol plastik yang biasanya jadi sampah ternyata bisa disulap jadi vas bunga cantik dan estetik. Kerajinan ini mudah dibuat dan cocok sebagai dekorasi ramah lingkungan di rumahmu.",
                alat: "Alat dan Bahan",
                bahan: ["Botol plastik bekas", "Cutter / gunting", "Amplas halus", "Cat akrilik / spidol permanen", "Kuas", "Lem tembak (opsional)", "Tali rami / dekorasi tambahan"],
                carabuat: "Cara Pembuatan",
                buat: ["Cuci botol dan keringkan, lalu tentukan bagian yang ingin dipotong", "Potong botol sesuai bentuk vas, lalu haluskan tepinya dengan amplas.", "Warnai bagian luar botol dengan cat dan tambahkan hiasan bila perlu.", "Biarkan cat mengering dan vas siap dipakai."],
                source: "Sumber : Freepik",
        };
        return (
                <div className="">
                       <div className="relative h-[300px] flex flex-col justify-end">
                                <div className="flex text-center items-center justify-center">
                                        <h3 className="font-bold text-[45px]  text-[#121F0B]">Membuat Vas Bunga Cantik dari Botol Bekas</h3>
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
                                <img src="/icons/vas.png" className="w-170 ms-190 mt-30" alt="" />
                        </div>
                </div>
        );
}