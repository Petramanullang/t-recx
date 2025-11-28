import GalleryDetail from "../../components/ui/GalleryDetail";

export default function Bucket() {
        const dataVasBunga = {
                imageSrc: "/images/bucketDetail.png",
                deskripsi: "Koran bekas yang biasanya menumpuk di rumah bisa diubah menjadi keranjang mini yang kuat dan multifungsi. Teknik anyamannya sederhana, tapi hasilnya sangat menarik.",
                alat: "Alat dan Bahan",
                bahan: ["Koran bekas", "Lem Kertas", "Tusuk sate atau pensil (untuk menggulung)", "Cat (opsional)",],
                carabuat: "Cara Pembuatan",
                buat: ["Gulung koran menggunakan pensil hingga menjadi stik panjang.", "Rekatkan ujungnya dengan lem.", "Bentuk dasar keranjang dengan pola silang (seperti anyaman).", "Anyam ke atas untuk membentuk dinding keranjang.", "Tambahkan lapisan cat jika ingin tampilan lebih rapi."],
                source: "Sumber : Handscraft Production",
        };
        return (
                <div className="">
                       <div className="relative h-[300px] flex flex-col justify-end">
                                <div className="flex text-center items-center justify-center">
                                        <h3 className="font-bold text-[45px]  text-[#121F0B]">Keranjang Mini dari Koran Bekas</h3>
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
                                <img src="/icons/bucket.png" className="w-170 ms-190 mt-30" alt="" />
                        </div>
                </div>
        );
}