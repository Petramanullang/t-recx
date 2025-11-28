import GalleryDetail from "../../components/ui/GalleryDetail";


export default function Wall() {
         const dataVasBunga = {
                imageSrc: "/images/wallDetail.png",
                deskripsi: "CD lama yang sudah tidak terpakai masih bisa bersinar lewat kerajinan mozaik dinding. Dengan pantulan cahaya dari pecahannya, hasil akhirnya terlihat estetik dan modern.",
                bahan: ["CD/DVD bekas", "Gunting / cutter kuat",  "Karton tebal", "Cat (opsional)", "Lem", "Tali gantungan"],
                carabuat: "Cara Pembuatan",
                buat: ["Potong CD menjadi potongan kecil (seperti pecahan mozaik).", "Bentuk pola di atas karton (lingkaran, hati, atau abstrak).", "Tempel pecahan CD mengikuti pola.", "Tambahkan tali di belakang sebagai gantungan.", "Hiasan dinding siap memantulkan cahaya estetik"],
                source: "Sumber : Gafan Craft",
        };
        return (
                <div className="">
                        <div className="relative h-[300px] flex flex-col justify-end">
                                <div className="flex text-center   items-center justify-center">
                                        <h3 className="font-bold text-[45px]  text-[#121F0B]">Hiasan Dinding dari CD Bekas</h3>
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
                                <img src="/icons/wall.png" className="w-170 ms-190 mt-30" alt="" />
                        </div>
                </div>
        );
}