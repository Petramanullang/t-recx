export default function Pen() {
        return (
                <div className="">
                        <div className="relative h-[300px]">
                                <div className="flex text-center absolute translate-x-110  translate-y-50  items-center justify-center">
                                        <h3 className="font-bold text-[45px]  text-[#121F0B]">Wadah Pensil dari Kaleng Bekas</h3>
                                </div>
                        </div>
                        <div className="flex items-center justify-center">
                                <img src="/images/penDetail.png" className="w-300  " alt="" />
                        </div>
                        <div className="">
                                <h4 className="text-[22px] font-medium text-[#808181] leading-[1.84] p-10">
                                       Kaleng bekas bisa jadi tempat pensil yang rapi dan unik kalau dihias dengan sedikit kreativitas. Kerajinan ini membantu mengurangi sampah logam sekaligus mempercantik meja belajar atau kerja.
                                </h4>
                                <div className="">
                                        <h3 className="text-[25px] font-semibold mx-12">Alat dan Bahan</h3>
                                        <ol className="text-[25px] font-medium text-[#808181] leading-[1.84] mx-12 mb-10 list-decimal list-inside space-y-2 mt-2">
                                                <li>Kaleng susu / kaleng makanan</li>
                                                <li>Kertas daur ulang / kertas kado</li>
                                                <li>Cat akrilik (opsional)</li>
                                                <li>Kuas</li>
                                                <li>Lem</li>
                                                <li>Tali rami</li>
                                        </ol>
                                        <h3 className="text-[25px] font-semibold mx-12">Cara Pembuatan</h3>
                                        <ol className="text-[25px] font-medium text-[#808181] leading-[1.84] mx-12 mb-10 list-decimal list-inside space-y-2 mt-2">
                                                <li>Bersihkan dan keringkan kaleng.</li>
                                                <li>Bungkus kaleng dengan kertas daur ulang, rekatkan menggunakan lem.</li>
                                                <li>Tambahkan detail cat atau lilitkan tali rami untuk estetika.</li>
                                                <li>Keringkan, tempat pensil siap digunakan.</li>
                                        </ol>
                                </div>
                        </div>
                </div>
        );
}