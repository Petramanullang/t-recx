import React from "react";

export default function Anorganik() {
  const title = "font-semibold text-[40px]";
  const paragraph = "text-text-gray text-[20px] leading-11";
  return (
    <div>
      <div className="w-full h-[311px] bg-bg-secondary flex justify-center items-center pt-20">
        <h1 className="text-6xl text-text-secondary font-bold">
          Sampah Anorganik
        </h1>
        <img
          className="translate-y-10"
          src="/img/content/mascot-6.png"
          alt=""
        />
      </div>

      <main className="mt-30 mx-20">
        <div className="flex justify-between gap-2">
          <img src="/img/content/sampah-anorganik.png" alt="" />
          <div className="w-[56%]">
            <h2 className={title}>Definisi Sampah Anorganik</h2>
            <p className={paragraph}>
              Sampah anorganik adalah sampah yang berasal dari bahan-bahan
              buatan manusia yang tidak mudah terurai secara alami, seperti
              plastik, kaca, dan logam. Sampah jenis ini dapat dikelola dengan
              menerapkan sistem 3R (Reduce, Reuse, Recycle) atau dapat dijual ke
              bank sampah untuk didaur ulang. Contoh umum sampah anorganik
              adalah botol plastik, kertas, kaleng, dan pecahan kaca.
            </p>
          </div>
        </div>

        <div>
          <p className={`${paragraph} mt-10`}>
            Contoh paling umum dari limbah anorganik adalah plastik. Plastik,
            yang dibuat dari polimer sintetik yang berasal dari minyak bumi atau
            gas alam, digunakan dalam berbagai produk konsumen, mulai dari
            kantong belanja, botol minuman, hingga peralatan rumah tangga. Sifat
            plastik yang tahan lama dan tidak mudah terurai membuatnya sangat
            berguna, tetapi juga sangat berbahaya bagi lingkungan. Ketika
            plastik dibuang, ia dapat terurai menjadi partikel mikroplastik yang
            kemudian masuk ke rantai makanan dan menyebabkan dampak negatif pada
            kesehatan manusia dan ekosistem. atau dimanfaatkan sebagai pakan
            maggot. Beberapa jenis organik bahkan sangat disukai maggot karena
            teksturnya lembut dan mudah diurai, seperti buah busuk atau sayuran.
          </p>

          <h2 className={`${title} my-10`}>
            Cara Pengelolaan Sampah Anorganik
          </h2>
          <ol className={`${paragraph} list-decimal list-inside`}>
            <li className="font-semibold">Reduce (Mengurangi)</li>
            <p className={paragraph}>
              Mengurangi penggunaan produk sekali pakai dan memilih produk
              dengan kemasan yang dapat didaur ulang atau diisi ulang.
            </p>

            <li className="font-semibold">Reuse (Menggunakan Kembali)</li>
            <p className={paragraph}>
              Memanfaatkan kembali barang anorganik untuk fungsi yang sama atau
              fungsi lain. Contohnya, menggunakan botol plastik bekas untuk pot
              tanaman atau menyimpan barang.
            </p>

            <li className="font-semibold">Recycle (Mendaur Ulang)</li>
            <p className={paragraph}>
              Mengolah sampah menjadi produk baru. Contohnya, botol plastik
              didaur ulang menjadi kerajinan atau biji plastik, dan kertas
              didaur ulang menjadi kertas lagi.
            </p>

            <li className="font-semibold">Bank Sampah</li>
            <p className={paragraph}>
              Menjual sampah anorganik yang sudah dipilah ke bank sampah untuk
              kemudian diproses lebih lanjut.
            </p>
          </ol>
        </div>
      </main>
    </div>
  );
}
