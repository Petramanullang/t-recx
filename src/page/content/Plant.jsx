import GalleryDetail from "../../components/ui/GalleryDetail";


export default function Plant() {
         const dataVasBunga = {
                imageSrc: "/images/plantDetail.png",
                deskripsi: "Cup plastik bekas minuman bisa kamu ubah menjadi pot tanaman mini yang lucu dan dekoratif. Cocok untuk meja belajar, rak buku, atau hadiah kecil anti-sampah.",
                alat: "Alat dan Bahan",
                bahan: ["Cup plastik bekas", "Cat akrilik",  "Spidol permanen", "Tanah + bibit tanaman kecil", "Paku kecil (untuk membuat lubang bawah)"],
                carabuat: "Cara Pembuatan",
                buat: ["Lubangi bagian bawah cup sebagai drainase.", "Cat permukaan luar cup dengan warna atau karakter lucu.", "Isi tanah dan masukkan bibit tanaman.", "Tempatkan di area terang, dan jadilah pot mini kawaii!"],
                source: "Sumber : Semen Rajawali",
        };
        return (
                <div className="">
                        <div className="relative h-[300px] flex flex-col justify-end">
                                <div className="flex text-center items-center justify-center">
                                        <h3 className="font-bold text-[45px]  text-[#121F0B]">Pot Tanaman Mini dari Gelas Plastik / Cup Boba</h3>
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
                                <img src="/icons/plant.png" className="w-170 ms-190 mt-30" alt="" />
                        </div>
                </div>
        );
}