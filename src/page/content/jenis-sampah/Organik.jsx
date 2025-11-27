import React from "react";

export default function Organik() {
  const title = "font-semibold text-[40px]";
  const subtitle = "font-semibold text-[25px] mt-10";
  const paragraph = "text-text-gray text-[20px] leading-11";
  return (
    <div>
      <div className="w-full h-[311px] bg-bg-secondary flex justify-center items-center pt-20">
        <h1 className="text-6xl text-text-secondary font-bold">
          Sampah Organik
        </h1>
        <img
          className="translate-y-10"
          src="/img/content/mascot-6.png"
          alt=""
        />
      </div>

      <main className="mt-30 mx-20">
        <div className="flex justify-between gap-2">
          <img src="/img/content/sampah-organik.png" alt="" />
          <div className="w-[56%]">
            <h2 className={title}>Definisi Sampah Organik</h2>
            <p className={paragraph}>
              Sampah organik adalah jenis sampah yang berasal dari makhluk hidup
              seperti sisa makanan, tumbuhan, atau bagian hewan dan dapat
              terurai secara alami dalam waktu yang relatif cepat. Karena
              sifatnya yang mudah membusuk, sampah organik sebenarnya bisa
              menjadi sumber manfaat besar jika dikelola dengan tepat.
            </p>
          </div>
        </div>

        <div>
          <p className={`${paragraph} mt-10`}>
            Dari dapur rumah tangga seperti kulit buah, nasi sisa, hingga
            dedaunan di halaman, semua itu bisa kembali ke alam sebagai kompos
            atau dimanfaatkan sebagai <br /> pakan maggot. Beberapa jenis
            organik bahkan sangat disukai maggot karena teksturnya lembut dan
            mudah diurai, seperti buah busuk atau sayuran.
          </p>

          <p className={`${paragraph} mt-10`}>
            Namun, tidak semua sampah organik bisa diproses sama. Tulang keras
            atau bahan berserat tinggi membutuhkan waktu lebih lama untuk
            terurai dan biasanya tidak cocok untuk maggot. Dengan memahami
            jenis-jenisnya, kita bisa mengelola sampah organik dengan lebih
            bijak mengubah limbah menjadi sesuatu yang berguna, sekaligus
            mengurangi beban lingkungan.
          </p>

          <h2 className={`${title} my-10`}>Sampah Organik Ramah Maggot</h2>
          <p className={paragraph}>
            Sampah organik ramah maggot adalah jenis sampah yang mudah diurai
            dan aman dikonsumsi oleh maggot, seperti sisa makanan, buah busuk,
            sayuran, atau bahan organik bertekstur lembut. Jenis sampah ini
            sangat bermanfaat karena bisa diolah menjadi sumber nutrisi untuk
            budidaya maggot, sekaligus membantu mempercepat proses daur ulang
            alami. Maggot sangat rakus memakan sampah organik seperti sisa
            sayur, buah, dan limbah dapur. Berikut contoh sampah organik ramah
            maggot.
          </p>

          <h3 className={subtitle}>Sisa Makanan Rumah Tangga</h3>
          <ol className={`${paragraph} list-decimal ml-5`}>
            <li>Nasi</li>
            <li>Bubur</li>
            <li>Sayur Matang</li>
            <li>Sisa lauk lembut (ikan, ayam tanpa tulang keras)</li>
            <li>Telur busuk</li>
            <li>Roti basi</li>
          </ol>

          <h3 className={subtitle}>Sisa Limbah Industri Makanan</h3>
          <ol className={`${paragraph} list-decimal ml-5`}>
            <li>Daun-daunan kering</li>
            <li>Rumput</li>
            <li>Ranting dan potongan kayu</li>
            <li>Bonggol jagung</li>
            <li>Jerami</li>
            <li>Serabut Kelapa</li>
            <li>Cangkang buah kopi</li>
          </ol>

          <h3 className={subtitle}>Sisa Bahan Lainnya</h3>
          <ol className={`${paragraph} list-decimal ml-5`}>
            <li>Ampas kopi dan kantong teh bekas</li>
            <li>Ampas tahu</li>
            <li>Kotoran hewan (ayam, sapi, kambing, puyuh)</li>
            <li>Bulu hewan yang rontok</li>
            <li>Bangkai hewan (bisa membantu mengurangi bangkai tanpa menimbulkan polusi)</li>
          </ol>
        </div>
      </main>
    </div>
  );
}
