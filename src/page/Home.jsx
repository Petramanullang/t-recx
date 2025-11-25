import React, { useState, useEffect } from "react";
import Carousel from "../components/hero/Carousel";

export default function Home() {
  
  const yearData = {
    2019: { generated: 500, processed: 300 },
    2020: { generated: 520, processed: 310 },
    2021: { generated: 540, processed: 330 },
    2022: { generated: 560, processed: 350 },
    2023: { generated: 580, processed: 380 },
    2024: { generated: 600, processed: 420 },
  };
  const [year, setYear] = useState(2019);
  const [sim, setSim] = useState(yearData[year]);

  useEffect(() => {
    setSim(yearData[year]);
  }, [year]);

  function simulateYear(y) {
    setYear(y);
    setSim(yearData[y] || { generated: 0, processed: 0 });
  }

  function percentProcessed() {
    if (!sim || !sim.generated) return 0;
    return Math.round((sim.processed / sim.generated) * 100);
  }

  const ranking = [
    { country: "Indonesia", ton: 1000 },
    { country: "Indonesia", ton: 1000 },
    { country: "Indonesia", ton: 1000 },
    { country: "Indonesia", ton: 1000 },
  ];

  function fmt(n) {
    return n.toLocaleString();
  }

  return (
    <main className="font-sans text-gray-800">
      <section className="relative h-[520px] md:h-[480px] lg:h-[560px]">
        <img
          src="/public/img/home/bg-hero.png"
          alt="hero"
          className="absolute inset-0 w-full h-screen object-cover brightness-45"
        />
        <div className="absolute mt-42 inset-0 mx-auto px-6 lg:px-12 flex items-center">
          <div className="w-full lg:w-1/2 text-white">
            <h1 className="text-3xl md:text-[65px] font-extrabold leading-tight mt-16 text-text-title">
              Lingkungan bersih,
              <br /> nyaman terkendali
            </h1>
            <p className="mt-4 text-sm md:text-[20px] max-w-xl text-text-secondary">
              Temukan cara mudah memilah sampah, lokasi bank sampah, hingga
              inspirasi daur ulang yang bisa kamu lakukan sekarang juga.
            </p>
            <div className="mt-6 flex gap-3">
              <button className="bg-bg-secondary rounded-full hover:bg-green-700 px-4 py-2 font-bold text-white text-lg">
                Pelajari lebih lanjut
              </button>
            </div>
            <img
              className="absolute top-0 translate-x-32 h-56"
              src="/public/img/home/mascot-1.png"
              alt=""
            />
          </div>

          {/* Right Carousel */}
          <div className="hidden lg:block w-1/2 pl-8 mt-20">
            <Carousel />
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="mx-10 mt-72">
        <div className="flex justify-between">
          <p className="text-sm text-text-primary text-[22px] translate-y-6">
            Penumpukan sampah yang terus bertambah kini <br /> menjadi ancaman
            nyata bagi lingkungan dan kehidupan <br /> sehari-hari.
          </p>
          <h2 className="text-[42px] font-semibold mt-4 text-right">
            Masalah lingkungan yang <br /> kian meresahkan <br /> masyarakat
          </h2>
        </div>

        <div className="bg-white rounded-2xl flex justify-between gap-28 mt-24">
          {/* Left column: stats + image */}

          <div className="-translate-y-24">
            <div className="bg-bg-secondary p-4 z-10 relative flex items-center w-[70%] mx-auto translate-y-4">
              <div className="text-5xl font-bold text-text-secondary">300</div>
              <div className="text-[16px] text-text-secondary ml-2">
                ton sampah <br /> diproduksi dunia <br /> setiap tahun
              </div>

              <div className="border-l-3 border-white h-20 mx-5"></div>

              <div className="text-5xl font-bold text-text-secondary">500</div>
              <div className="text-[16px] text-text-secondary ml-2">
                ton sampah per <br /> hari menumpuk <br /> tanpa dikelola <br />{" "}
                dengan benar
              </div>
            </div>

            <img
              src="/public/img/home/gunung-sampah.png"
              alt="garbage"
              className="min-w-[812px] h-[514px] object-cover rounded-xl shadow-md -translate-y-10 z-10"
            />
            <p className="text-center text-text-gray -translate-y-7">
              Sumber : detik.com
            </p>
          </div>

          {/* Right column */}
          <div class="flex w-full ml-10 -translate-y-5 translate-x-5">
            <div className="border-l-6 border-dotted border-bg-secondary h-[60%] translate-y-3"></div>

            <div class="space-y-6  pl-5">
              <div class="relative w-full">
                <img
                  className="absolute -translate-x-10 top-2.5 z-10 -ml-3.5 h-15 w-15 p-[18px] flex justify-center rounded-full bg-bg-secondary"
                  src="/public/svg/home/trash-outline.svg"
                  alt=""
                />
                <div class="ml-6 translate-y-1">
                  <h4 class="font-bold text-3xl">
                    Sistem Pemilahan yang <br /> Buruk
                  </h4>
                  <p class="mt-2 max-w-screen-sm text-xl text-gray-500">
                    Sebagian besar masyarakat masih <br /> mencampur sampah
                    organik dan anorganik <br /> sehingga menyulitkan proses
                    daur ulang.
                  </p>
                </div>
              </div>
              <div class="relative w-full mt-10">
                <img
                  className="absolute -translate-x-10 top-2.5 z-10 -ml-3.5 h-15 w-15 p-[18px] flex justify-center rounded-full bg-bg-secondary"
                  src="/public/svg/home/warning-line.svg"
                  alt=""
                />
                <div class="ml-6 translate-y-2">
                  <h4 class="font-bold text-3xl">
                    Minimnya Fasilitas <br /> Pengelolaan
                  </h4>
                  <p class="mt-2 max-w-screen-sm text-xl text-gray-500">
                    Tidak semua wilayah memiliki bank sampah <br /> atau drop
                    point yang mudah diakses.
                  </p>
                </div>
              </div>
              <div class="relative w-full">
                <img
                  className="absolute -translate-x-10 top-2.5 z-10 -ml-3.5 h-15 w-15 p-[18px] flex justify-center rounded-full bg-bg-secondary"
                  src="/public/svg/home/solid_disease.svg"
                  alt=""
                />
                <div class="ml-6 mt-10 translate-y-2">
                  <h4 class="font-bold text-3xl">
                    Kurangnya Edukasi dan <br /> Kesadaran
                  </h4>
                  <p class="mt-2 max-w-screen-sm text-xl text-gray-500">
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
      
      <div className="w-full h-[189px] bg-bg-secondary flex justify-between items-center pl-16 pr-36">
        <img
          className="translate-x-20 translate-y-3"
          src="/public/img/home/mascot-2.png"
          alt=""
        />
        <p className="text-[64px] text-text-secondary font-bold -translate-x-26 translate-y-2">
          Angka Sampah di Indonesia
        </p>
      </div>

      <div className="mt-20 mx-24">
        <p className="text-text-gray text-[22px]/12">
          Indonesia berada di posisi kelima dunia penghasil sampah plastik salah
          kelola. Data ini berdasarkan laporan World Bank tentang <br /> mismanaged
          plastic waste, yaitu plastik yang tidak tertangani dengan baik dan
          berpotensi mencemari sungai dan laut. Setiap <br /> tahun, Indonesia
          menghasilkan sekitar 3,2 juta ton sampah plastik.Dari jumlah ini,
          sekitar 620 ribu ton masuk kategori risiko tinggi <br /> mencemari laut
          menjadikan Indonesia salah satu negara yang paling rentan terhadap
          krisis plastik.
        </p>
        <p className="mt-5 text-text-gray text-[22px]/12">
          UNDP dan World Bank pula mencatat bahwa negara yang menerapkan sistem
          pengelolaan sampah terpadu dapat menurunkan <br /> sampah masuk TPA sebesar
          20–40%. Untuk memahami lebih lanjut, mari coba simulasikan total
          sampah di Indonesia !
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 bg-white rounded-2xl shadow p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">Angka Sampah di Indonesia</h3>
            <p className="text-sm text-gray-500">Source : www.kawankit</p>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded">
              <div className="text-2xl font-semibold">{fmt(300)}</div>
              <div className="text-sm text-gray-600">
                Juta orang belum mengelola sampah dengan baik
              </div>
            </div>
            <div className="bg-white p-4 rounded border">
              <p className="text-sm text-gray-600">
                Simulasi hitung total sampah di Indonesia
              </p>
              <div className="mt-3">
                <div className="flex gap-2 items-center">
                  {Object.keys(yearData).map((y) => (
                    <button
                      key={y}
                      onClick={() => simulateYear(Number(y))}
                      className={`px-3 py-1 rounded text-sm ${
                        year === Number(y)
                          ? "bg-green-600 text-white"
                          : "bg-white text-gray-700 border"
                      }`}
                    >
                      {y}
                    </button>
                  ))}
                </div>

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded bg-gray-50 text-center">
                    <div className="text-2xl font-bold">
                      {fmt(sim.generated)}
                    </div>
                    <div className="text-sm text-gray-500">
                      Sebelum diolah (ton/tahun)
                    </div>
                  </div>
                  <div className="p-4 rounded bg-white border text-center">
                    <div className="text-2xl font-bold">
                      {fmt(sim.processed)}
                    </div>
                    <div className="text-sm text-gray-500">
                      Setelah diolah (ton/tahun)
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-4">
                  <div className="w-24 h-24 rounded-full bg-green-50 flex items-center justify-center">
                    <div className="text-xl font-bold">
                      {percentProcessed()}%
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">
                      Sampah berkurang dan dikelola dengan bijak
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded border">
              <h4 className="font-semibold mb-2">
                Ranking sampah dunia per tahun (ton)
              </h4>
              <table className="w-full text-sm">
                <thead>
                  <tr>
                    <th className="text-left">Urutan</th>
                    <th className="text-left">Negara</th>
                    <th className="text-right">Jumlah Sampah</th>
                  </tr>
                </thead>
                <tbody>
                  {ranking.map((r, i) => (
                    <tr key={i} className="border-t">
                      <td className="py-2">{i + 1}</td>
                      <td>{r.country}</td>
                      <td className="text-right">{fmt(r.ton)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        
        <div className="bg-white rounded-2xl shadow p-6">
          <h4 className="font-semibold">15%</h4>
          <p className="text-sm text-gray-600 mt-2">
            Sampah berkurang dan dikelola dengan bijak
          </p>
        </div>
      </div>

      
      <div className="mt-12 bg-linear-to-r from-green-600 to-green-400 rounded-2xl p-8 text-white flex items-center justify-between">
        <h3 className="text-2xl font-bold">Bersama t-Recx</h3>
        <div className="flex items-center gap-4">
          <img
            src="/mnt/data/Home.png"
            alt="mascot"
            className="w-20 h-20 object-cover rounded"
          />
          <button className="bg-white/20 px-4 py-2 rounded">
            Apa saja yang ada di t-Recx ?
          </button>
        </div>
      </div>

     
      <div className="mt-10 grid grid-cols-1 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="bg-white rounded-lg border p-4 shadow flex gap-4 items-center"
          >
            <img
              src="/mnt/data/Home.png"
              alt="item"
              className="w-24 h-24 object-cover rounded"
            />
            <div>
              <h4 className="font-semibold">Lorem Ipsum</h4>
              <p className="text-sm text-gray-600">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text.
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
