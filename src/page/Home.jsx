import Carousel from "../components/hero/Carousel";
import Slider from "../components/Slider";

export default function Home() {
  const data = [
    { rank: 1, country: "China", amount: "±8.8 juta" },
    { rank: 2, country: "India", amount: "±4 juta" },
    { rank: 3, country: "Amerika Serikat", amount: "±2.5 juta" },
    { rank: 4, country: "Brazil", amount: "±1.5 juta" },
    { rank: 5, country: "Indonesia", amount: "±3.2  juta" },
    { rank: 6, country: "Rusia", amount: "±1 juta" },
    { rank: 7, country: "Meksiko", amount: "±940 rb" },
    { rank: 8, country: "Jepang", amount: "±830 rb" },
    { rank: 9, country: "Jerman", amount: "±700 rb" },
    { rank: 10, country: "Filipina", amount: "±550 rb" },
  ];

  return (
    <main className="font-sans text-gray-800">
      <section className="relative h-[520px] md:h-[480px] lg:h-[560px]">
        <img
          src="/img/home/bg-hero.png"
          alt="hero"
          className="absolute inset-0 w-full h-[120vh] lg:h-screen object-cover brightness-45"
        />
        <div className="absolute lg:mt-42 inset-0 mx-10 lg:mx-auto lg:px-12 flex items-center">
          <div className="w-full lg:w-1/2 text-white -translate-y-24 lg:translate-0">
            {/* MOBILE MASCOT */}
            <div className="absolute -translate-x-3 translate-y-3 block lg:hidden">
              <p className="text-text-secondary text-bold text-[10px] translate-y-5.5 translate-x-7">
                Mari, peduli lingkungan! Kelola sampah dengan bijak!
              </p>
              <img
                className="w-[90%] ml-4"
                src="/svg/home/mobile/Mascot-text.svg"
                alt=""
              />
              <img
                className="translate-x-[280px] -translate-y-6"
                src="/svg/home/mobile/Mascot.svg"
                alt=""
              />
            </div>

            <div className="absolute block lg:hidden w-1/2 pl-15 mt-20 -translate-y-5">
              <Carousel />
            </div>

            <h1 className="text-3xl md:text-[65px] font-extrabold leading-tight mt-16 text-text-title">
              Lingkungan bersih,
              <br /> nyaman terkendali
            </h1>

            <p className=" mt-4 text-sm md:text-[18px] w-full lg:max-w-xxl text-text-secondary absolute lg:static translate-y-[480px] lg:translate-y-0 text-center lg:text-left lg:w-auto px-2 lg:px-0">
              Temukan cara mudah memilah sampah, lokasi bank sampah, hingga
              inspirasi daur ulang yang bisa kamu lakukan sekarang juga.
            </p>

            <div className="absolute lg:static lg:mt-6 flex gap-3 translate-x-23 lg:translate-x-0 translate-y-[580px] lg:translate-y-0">
              <button className="bg-bg-primary lg:bg-bg-secondary rounded-full hover:bg-green-700 px-3 lg:px-4 py-2 lg:font-bold text-white text-[11px] lg:text-lg">
                Pelajari lebih lanjut
              </button>
            </div>

            {/* DESKTOP MASCOT*/}
            <img
              className="absolute top-0 lg:translate-x-32 h-32 lg:h-56 hidden lg:block"
              src="/img/home/mascot-1.png"
              alt=""
            />
          </div>

          {/* Right Carousel */}
          <div className="hidden lg:block w-1/2 pl-15 mt-20">
            <Carousel />
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mx-4 lg:mx-10 mt-[400px] lg:mt-72">
        <div className="lg:flex justify-between">
          {/* Mobile */}
          <h2 className="text-[20px] font-semibold mt-4 text-center lg:hidden">
            Masalah lingkungan yang kian meresahkan masyarakat
          </h2>

          <p className="text-xs leading-8 text-text-gray lg:text-text-primary translate-y-6 lg:hidden">
            Penumpukan sampah yang terus bertambah kini menjadi ancaman nyata
            bagi lingkungan dan kehidupan sehari-hari.
          </p>

          {/* Desktop */}
          <p className="text-xs lg:text-base leading-8 text-text-gray lg:text-text-primary translate-y-6 hidden lg:block">
            Penumpukan sampah yang terus bertambah kini <br /> menjadi ancaman
            nyata bagi lingkungan dan kehidupan <br /> sehari-hari.
          </p>
          <h2 className="text-[42px] font-semibold mt-4 text-right hidden lg:block">
            Masalah lingkungan yang <br /> kian meresahkan <br /> masyarakat
          </h2>
        </div>

        <div className="bg-white rounded-2xl lg:flex justify-between gap-10 mt-24">
          {/* Left column: stats + image */}

          <div className="-translate-y-16 lg:-translate-y-24">
            <div className="bg-bg-secondary p-2 lg:p-4 z-10 relative flex items-center w-[320px] lg:w-[70%] mx-auto translate-y-4">
              <div className="text-lg lg:text-5xl font-bold text-text-secondary">
                300
              </div>
              <div className="text-[10px] lg:text-[16px] text-text-secondary ml-2">
                ton sampah <br /> diproduksi dunia <br /> setiap tahun
              </div>

              <div className="border-l-3 border-white h-20 mx-5"></div>

              <div className="text-lg lg:text-5xl font-bold text-text-secondary">
                500
              </div>
              <div className="text-[10px] lg:text-[16px] text-text-secondary ml-2">
                ton sampah per <br /> hari menumpuk <br /> tanpa dikelola <br />{" "}
                dengan benar
              </div>
            </div>

            <img
              src="/img/home/gunung-sampah.png"
              alt="garbage"
              className="lg:min-w-[812px] lg:h-[514px] object-cover rounded-3xl lg:rounded-xl shadow-md -translate-y-10 z-10"
            />
            <p className="text-xs lg:text-base text-center text-text-gray -translate-y-7">
              Sumber : detik.com
            </p>
          </div>

          {/* Right column */}
          <div className="border-l-6 border-dotted border-bg-secondary lg:border-none h-[40%] absolute -translate-y-10 translate-x-8 lg:hidden"></div>
          <div className="lg:flex w-full ml-5 lg:ml-10 -translate-y-15 lg:-translate-y-5 translate-x-5 ">
            <div className="border-l-6 border-dotted border-bg-secondary h-[60%] lg:translate-y-3 hidden lg:block"></div>

            <div className="space-y-6 pl-5">
              <div className="relative w-full">
                <img
                  className="absolute -translate-x-10 top-2.5 z-10 -ml-3.5 h-15 w-15 p-[18px] flex justify-center rounded-full bg-bg-secondary"
                  src="/svg/home/trash-outline.svg"
                  alt=""
                />
                <div className="ml-4 translate-y-3 lg:translate-y-1">
                  <h4 className="font-bold text-xl lg:text-3xl">
                    Sistem Pemilahan yang Buruk
                  </h4>
                  <p className="mt-2 max-w-screen-sm text-sm lg:text-xl text-gray-500">
                    Sebagian besar masyarakat masih <br /> mencampur sampah
                    organik dan anorganik <br /> sehingga menyulitkan proses
                    daur ulang.
                  </p>
                </div>
              </div>
              <div className="relative w-full mt-10">
                <img
                  className="absolute -translate-x-10 top-2.5 z-10 -ml-3.5 h-15 w-15 p-[18px] flex justify-center rounded-full bg-bg-secondary"
                  src="/svg/home/warning-line.svg"
                  alt=""
                />
                <div className="ml-4 translate-y-5 lg:translate-y-1">
                  <h4 className="font-bold text-xl lg:text-3xl">
                    Minimnya Fasilitas <br /> Pengelolaan
                  </h4>
                  <p className="mt-2 max-w-screen-sm text-sm lg:text-xl text-gray-500">
                    Tidak semua wilayah memiliki bank sampah <br /> atau drop
                    point yang mudah diakses.
                  </p>
                </div>
              </div>
              <div className="relative w-full">
                <img
                  className="absolute -translate-x-10 top-2.5 z-10 -ml-3.5 h-15 w-15 p-[18px] flex justify-center rounded-full bg-bg-secondary"
                  src="/svg/home/solid_disease.svg"
                  alt=""
                />
                <div className="ml-6 mt-10 translate-y-5 lg:translate-y-2">
                  <h4 className="font-bold text-xl lg:text-3xl">
                    Kurangnya Edukasi dan <br /> Kesadaran
                  </h4>
                  <p className="mt-2 max-w-screen-sm text-sm lg:text-xl text-gray-500">
                    Sebagian besar sampah sebenarnya bisa <br /> diolah, namun
                    informasi mengenai cara <br /> pengelolaannya masih belum
                    merata.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full h-[70px] lg:h-[189px] bg-bg-secondary flex justify-between items-center lg:pl-16 lg:pr-36 px-3">
        <img
          className="lg:translate-x-20 lg:translate-y-3 h-36 lg:h-[200%]"
          src="/img/home/mascot-2.png"
          alt=""
        />
        <p className="text-[20px] lg:text-[60px] text-text-secondary font-bold lg:-translate-x-17 lg:translate-y-2">
          Angka Sampah di Indonesia
        </p>
      </div>
      {/* MOBILE */}
      <div className="lg:hidden mt-5">
        <h3 className="font-semibold text-lg lg:text-3xl ml-[50px]">
          Ranking sampah dunia per tahun{" "}
        </h3>

        <div className="mt-5 mb-2 rounded-[18px] border-2 border-bg-secondary mx-10 p-2 lg:p-6 bg-white shadow-md">
          {/* Header */}
          <div className="bg-[#AEE88C66] rounded-xl w-full px-3 py-3 flex justify-between mb-5">
            <p className="text-sm lg:text-xl font-bold">Urutan</p>
            <p className="text-sm lg:text-xl font-bold">Negara</p>
            <p className="text-sm lg:text-xl font-bold">Jumlah Sampah</p>
          </div>

          {/* Rows */}
          {data.map((item, i) => {
            const colorByRank = {
              5: "bg-[#E38282]",
            };

            return (
              <div
                key={i}
                className={`border-2 border-bg-secondary rounded-xl w-full px-5 lg:px-10 py-1 flex justify-between mb-3 ${
                  colorByRank[item.rank] || "bg-white"
                }`}
              >
                <p className="text-sm lg:text-xl font-bold">{item.rank}</p>
                <p className="text-sm lg:text-xl font-bold -translate-x-3">
                  {item.country}
                </p>
                <p className="text-sm lg:text-xl font-bold">{item.amount}</p>
              </div>
            );
          })}
        </div>
        <p className="text-text-gray text-[10px] lg:text-base mx-10 lg:mx-3 text-center">
          Berdasarkan data World Bank, laporan dikompilasi oleh Jambeck et al.,
          dan Tim Nasional Penanganan Sampah Laut
        </p>
      </div>
      <div className="mt-8 lg:mt-20 mx-5 lg:mx-24">
        <p className="text-text-gray text-xs leading-6 lg:text-[20px]/12">
          Indonesia berada di posisi kelima dunia penghasil sampah plastik salah
          kelola. Data ini berdasarkan laporan World Bank tentang mismanaged
          plastic waste, yaitu plastik yang tidak tertangani dengan baik dan
          berpotensi mencemari sungai dan laut. Setiap tahun, Indonesia
          menghasilkan sekitar 3,2 juta ton sampah plastik.Dari jumlah ini,
          sekitar 620 ribu ton masuk kategori risiko tinggi mencemari laut
          menjadikan Indonesia salah satu negara yang paling rentan terhadap
          krisis plastik.
        </p>
        <p className="text-text-gray text-xs leading-6 lg:text-[20px]/12 mt-4">
          UNDP dan World Bank pula mencatat bahwa negara yang menerapkan sistem
          pengelolaan sampah terpadu dapat menurunkan sampah masuk TPA sebesar
          20-40%. Untuk memahami lebih lanjut, mari coba simulasikan total
          sampah di Indonesia !
        </p>
      </div>
      {/* Slider */}
      <div className="flex justify-center lg:mt-16">
        <div>
          <Slider />
          <div className="lg:w-[595px] mx-7 lg:mx-auto mt-2 mb-32 rounded-[18px] border-2 border-bg-secondary p-6 bg-white shadow-md">
            <div className="flex items-center gap-6">
              <img
                className="h-20"
                src="/img/home/progress-bar-circle.png"
                alt=""
              />
              <div>
                <h3 className="font-bold text-lg lg:text-5xl">20 - 40%</h3>
                <p className="text-text-gray lg:leading-11 lg:my-5 text-[9px] lg:text-[20px]">
                  Sampah berkurang dan dikelola dengan bijak
                </p>
              </div>
              <img
                className=" w-[60px] lg:w-[133px] h-[90px] lg:h-[200px]"
                src="/svg/home/mascot-5.svg"
                alt=""
              />
            </div>

            <div className="w-full bg-[#EEEEEE] border-2 border-bg-secondary rounded-full h-3 mt-5 lg:mt-0">
              <div className="bg-bg-secondary h-2.5 rounded-full w-[30%] -translate-x-[0.5px] -translate-y-[0.5px]"></div>
            </div>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="hidden lg:block">
          <h3 className="font-semibold text-3xl ml-[50px]">
            Ranking sampah dunia per tahun{" "}
          </h3>

          <div className="mt-5 mb-2 rounded-[18px] border-2 border-bg-secondary p-6 bg-white shadow-md">
            {/* Header */}
            <div className="bg-[#AEE88C66] rounded-xl w-full px-3 py-3 flex justify-between mb-5">
              <p className="text-xl font-bold">Urutan</p>
              <p className="text-xl font-bold">Negara</p>
              <p className="text-xl font-bold">Jumlah Sampah</p>
            </div>

            {/* Rows */}
            {data.map((item, i) => {
              const colorByRank = {
                5: "bg-[#E38282]",
              };

              return (
                <div
                  key={i}
                  className={`border-2 border-bg-secondary rounded-xl w-full px-10 py-1 flex justify-between mb-3 ${
                    colorByRank[item.rank] || "bg-white"
                  }`}
                >
                  <p className="text-xl font-bold">{item.rank}</p>
                  <p className="text-xl font-bold -translate-x-3">
                    {item.country}
                  </p>
                  <p className="text-xl font-bold">{item.amount}</p>
                </div>
              );
            })}
          </div>
          <p className="text-text-gray text-base mx-3 text-center">
            Berdasarkan data World Bank, laporan dikompilasi oleh Jambeck et
            al., dan Tim <br /> Nasional Penanganan Sampah Laut
          </p>
        </div>
      </div>

      <div className="w-full h-[70px] lg:h-[189px] bg-bg-secondary flex justify-between items-center lg:pl-16 lg:pr-36 px-3">
        <p className="text-[64px] text-text-secondary font-bold text-center">
          Bersama t-Recx
        </p>
        <img
          className="right-42 translate-x-13 translate-y-2 absolute"
          src="/img/home/mascot-3.png"
          alt=""
        />
      </div>
      <div className="mt-44 mx-24 flex gap-10">
        <div>
          <iframe
            className="rounded-2xl"
            width="321"
            height="194"
            src="https://www.youtube.com/embed/U77req16xE4?si=GOug6i8e-piX5CF5"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <p className="text-text-gray mt-5">
            Cara mengubah sampah menjadi nilai <br /> yang menghasilkan
            kuntungan
          </p>
        </div>
        <div>
          <img
            className="w-[332px] h-[431px] object-cover object-left rounded-2xl"
            src="/img/home/timbang-pilah-sampah.png"
            alt=""
          />
        </div>
        <div className="w-[50%] ml-8">
          <h3 className="text-4xl font-semibold">
            Website pengelola sampah <br /> t-Recx
          </h3>
          <p className="text-text-gray leading-11 my-5 text-[22px]">
            t-Recx merupakan website pengelolaan sampah yang <br /> membantu
            masyarakat memilah, mengenali, dan <br /> mengolah sampah secara
            bijak. Website ini dilengkapi <br /> edukasi, pencarian bank sampah,
            dan inspirasi daur <br /> ulang yang mudah dipahami siapa saja.
          </p>
          <span className="px-4 py-2 rounded-full bg-bg-secondary text-text-secondary text-xl">
            Apa saja yang ada di t-Recx
          </span>
        </div>
      </div>
      <div className="w-full h-[189px] flex justify-center items-center pl-16 pr-36 mt-20">
        <img
          className="translate-x-13 translate-y-2 "
          src="/img/home/mascot-4.png"
          alt=""
        />
        <div className="mx-auto text-center">
          <p className="text-[64px] font-bold ">Apa yang ada di t-Recx ?</p>
          <p className="text-text-gray text-xl">
            t-Trecx dilengkapi dengan konten edukasi pengelolaan sampah yang
            lengkap mulai dari cara <br /> memilah, mengenali jenis sampah,
            hingga mengolahnya menjadi sesuatu yang lebih bermanfaat.
          </p>
        </div>
      </div>

      <div className="mx-24 mt-20">
        <div className="flex justify-between gap-8">
          <img
            className="w-[238px] h-[220px] rounded-3xl object-cover"
            src="/img/home/memilah-sampah.png"
            alt=""
          />
          <div className="border-3 border-bg-secondary rounded-2xl w-full p-5">
            <h3 className="font-bold text-3xl">Memilah Sampah</h3>{" "}
            <p className="leading-8 text-text-gray text-[22px] mt-4">
              Mulai dari kebiasaan kecil di rumah. Pelajari jenis-jenis sampah
              dan bagaimana cara <br /> menanganinya dengan mudah dan
              menyenangkan.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-24 mt-20">
        <div className="flex justify-between gap-8">
          <div className="border-3 border-bg-secondary bg-bg-secondary rounded-2xl w-full p-5">
            <h3 className="font-bold text-3xl text-text-secondary">
              Temukan Bank Sampah{" "}
            </h3>{" "}
            <p className="leading-8 text-text-secondary text-[22px] mt-4">
              Temukan tempat terbaik untuk menyetorkan sampahmu. Dengan input
              lokasi, kamu bisa <br /> mengetahui lokasi bank sampah di
              sekitarmu dan mulai berkontribusi dari mana saja.
            </p>
          </div>
          <img
            className="w-[238px] h-[220px] rounded-3xl object-cover"
            src="/img/home/temukan-bank-sampah.png"
            alt=""
          />
        </div>
      </div>
      <div className="mx-24 mt-20">
        <div className="flex justify-between gap-8">
          <img
            className="w-[238px] h-[220px] rounded-3xl object-cover"
            src="/img/home/galeri-kerajinan-kreatif.png"
            alt=""
          />
          <div className="border-3 border-bg-secondary rounded-2xl w-full p-5">
            <h3 className="font-bold text-3xl">Galeri Kerajinan Kreatif</h3>{" "}
            <p className="leading-8 text-text-gray text-[22px] mt-4">
              Ubah limbah jadi sesuatu yang bernilai. Lihat berbagai ide DIY (Do
              It Yourself) dari bahan bekas, <br /> lengkap dengan tutorial
              langkah demi langkah untuk kamu coba di rumah.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
