import GalleryDetail from "../../components/ui/GalleryDetail";


export default function Wallet() {
         const dataVasBunga = {
                imageSrc: "/images/walletDetail.png",
                deskripsi: "Kemasan kopi tebal punya struktur kuat yang pas untuk dijadikan dompet koin fungsional. Dengan sedikit lipatan dan resleting, sampah kemasan berubah jadi barang yang berguna.",
                bahan: ["Kemasan kopi tebal (kopi instan 1 kg / kemasan glossy)", "Gunting",  "Resleting kecil", "Jarum & benang / lem tembak", ],
                carabuat: "Cara Pembuatan",
                buat: ["Potong kemasan kopi menjadi dua persegi panjang.", "Lipat dan bentuk lembaran kemasan menjadi pola dompet kecil.", "Pasang resleting di bagian atas.", "Jahit pinggirannya atau rekatkan dengan lem tembak.", "Dompet siap dipakai!"],
                source: "Sumber : Blibli",
        };
        return (
                <div className="">
                        <div className="relative h-[300px] flex flex-col justify-end">
                                <div className="flex text-center   items-center justify-center">
                                        <h3 className="font-bold text-[45px]  text-[#121F0B]">Dompet Koin dari Kemasan Kopi</h3>
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
                                <img src="/icons/wallet.png" className="w-170 ms-190 mt-30" alt="" />
                        </div>
                </div>
        );
}