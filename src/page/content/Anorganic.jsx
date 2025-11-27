export default function Anorganic() {

        return (
                <div className="">
                        <div className="relative h-[400px]">
                                <div className="bg-[#4E9574] h-[311px] w-[1522px] shadow-xl overflow-hidden">
                                        <div className="flex w-full h-full  items-center justify-center mt-10">
                                                <h1 className="font-bold text-6xl text-white mr-50">Sampah Anorganik</h1>
                                                <img
                                                        src="/icons/logo_about.png"
                                                        alt="T-Recx Character"
                                                        className="w-[201px] h-[303px] absolute translate-x-70 translate-y-10"
                                                />
                                        </div>
                                </div>
                        </div>
                        <div className="">
                                <div className="flex w-full h-full  items-center justify-center px-10">
                                        <img src="/images/fotoAnorganic.png" className="w-165" alt="" />
                                        <div className="mx-15 mb-30">
                                                <h3 className="text-[40px] font-semibold">Definisi Sampah Anorganik</h3>
                                                <h4 className="text-[22px] font-medium text-[#808181] leading-[1.84]">
                                                        Sampah anorganik adalah sampah yang berasal dari bahan-bahan buatan manusia yang tidak mudah terurai secara alami, seperti plastik, kaca, dan logam. Sampah jenis ini dapat dikelola dengan menerapkan sistem 3R (Reduce, Reuse, Recycle) atau dapat dijual ke bank sampah untuk didaur ulang. Contoh umum sampah anorganik adalah botol plastik, kertas, kaleng, dan pecahan kaca.
                                                </h4>
                                        </div>
                                </div>
                                <h3 className="text-[22px] font-medium text-[#808181] leading-[1.84] mx-12 mb-8 mt-10">
                                        Contoh paling umum dari limbah anorganik adalah plastik. Plastik, yang dibuat dari polimer sintetik yang berasal dari minyak bumi atau gas alam, digunakan dalam berbagai produk konsumen, mulai dari kantong belanja, botol minuman, hingga peralatan rumah tangga. Sifat plastik yang tahan lama dan tidak mudah terurai membuatnya sangat berguna, tetapi juga sangat berbahaya bagi lingkungan. Ketika plastik dibuang, ia dapat terurai menjadi partikel mikroplastik yang kemudian masuk ke rantai makanan dan menyebabkan dampak negatif pada kesehatan manusia dan ekosistem. atau dimanfaatkan sebagai pakan maggot. Beberapa jenis organik bahkan sangat disukai maggot karena teksturnya lembut dan mudah diurai, seperti buah busuk atau sayuran.
                                </h3>
                                <h3 className="text-[30px] font-semibold mx-12">Cara Pengelolaan Sampah Anorganik</h3>
                                <ol className="text-[25px] font-medium text-[#808181] leading-[1.84] mx-12 mb-10  space-y-4 mt-4">

                                        {/* POIN 1: Reduce */}
                                        <li>
                                                {/* Judul Poin (Reduce) */}
                                                <p className="font-medium text-black">
                                                        1. Reduce (Mengurangi)
                                                </p>
                                                {/* Deskripsi */}
                                                <p className="text-base font-normal text-[#808181] leading-relaxed mt-1">
                                                        Mengurangi penggunaan produk sekali pakai dan memilih produk dengan kemasan yang dapat didaur ulang atau diisi ulang.
                                                </p>
                                        </li>

                                        {/* POIN 2: Reuse */}
                                        <li>
                                                <p className="font-medium text-black">
                                                        2. Reuse (Menggunakan Kembali)
                                                </p>
                                                <p className="text-base font-normal text-[#808181] leading-relaxed mt-1">
                                                        Memanfaatkan kembali barang anorganik untuk fungsi yang sama atau atau fungsi lain. Contohnya, menggunakan botol plastik bekas untuk pot tanaman atau menyimpan barang.
                                                </p>
                                        </li>

                                        {/* POIN 3: Recycle */}
                                        <li>
                                                <p className="font-medium text-black">
                                                        3. Recycle (Mendaur Ulang)
                                                </p>
                                                <p className="text-base font-normal text-[#808181] leading-relaxed mt-1">
                                                        Mengolah sampah menjadi produk baru. Contohnya, botol plastik didaur ulang menjadi kerajinan atau biji plastik, dan kertas didaur ulang menjadi kertas lagi.
                                                </p>
                                        </li>

                                        {/* POIN 4: Bank Sampah */}
                                        <li>
                                                <p className="font-medium text-black">
                                                        4. Bank Sampah
                                                </p>
                                                <p className="text-base font-normal text-[#808181] leading-relaxed mt-1">
                                                        Menjual sampah anorganik yang sudah dipilah ke bank sampah untuk kemudian diproses lebih lanjut.
                                                </p>
                                        </li>

                                </ol>
                        </div>
                </div>
        );
}