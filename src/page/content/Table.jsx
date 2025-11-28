import GalleryDetail from "../../components/ui/GalleryDetail";

export default function Table() {
        const dataVasBunga = {
                imageSrc: "/images/tableDetail.png",
                deskripsi: "Kardus bekas yang sering kita anggap tidak berguna ternyata bisa diubah menjadi organizer meja yang rapi dan fungsional. Dengan sedikit potongan dan lipatan, kamu bisa membuat wadah serbaguna untuk menyimpan alat tulis, kosmetik, atau pernak-pernik kecil lainnya.",
                alat: "Alat dan Bahan",
                bahan: ["Kardus bekas (tebal atau double-wall lebih bagus)", "Cutter / gunting", "Penggaris", "Pensil", "Lem kertas / lem tembak", "Kertas kado / kertas warna (opsional untuk dekorasi)"],
                carabuat: "Cara Pembuatan",
                buat: ["Potong kardus menjadi beberapa bagian: dasar, sekat besar, dan sekat kecil sesuai ukuran organizer yang kamu inginkan.", "Rangkai bagian dasar dan dinding, lalu rekatkan dengan lem hingga membentuk kotak utama.", "Pasang sekat-sekat di dalam kotak untuk memisahkan ruang penyimpanan.", "Hias bagian luar menggunakan kertas warna atau kertas kado agar terlihat menarik.", "Organizer meja siap dipakai untuk menyimpan alat tulis, kosmetik, kabel, atau pernak-pernik lainnya."],
                source: "Sumber : Media Indonesia",
        };
        return (
                <div className="">
                       <div className="relative h-[300px] flex flex-col justify-end">
                                <div className="flex text-center items-center justify-center">
                                        <h3 className="font-bold text-[45px]  text-[#121F0B]">Organizer Meja dari Kardus Bekas</h3>
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