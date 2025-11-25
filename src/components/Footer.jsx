import React from "react";

export default function Footer() {
  return (
    <footer className="text-text-secondary bottom-0 w-full mt-20">
      <div className="bg-bg-primary h-[308px] px-4 lg:pr-56 py-16 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <img
              src="/public/img/logo.png"
              className="mr-5 h-9 sm:h-13"
              alt="logo"
            />
            <p className="max-w-2xl mt-4 text-[15px] text-secondary font-light">
              t-Recx berterima kasih telah mengunjungi website kami. Semoga anda
              mendapatkan pengalaman dan pengetahuan yang baik setelah
              mengunjungi website t-Recx. Silakan masukkan email anda untuk
              mengisi daftar pengunjung website.
            </p>
          </div>
          <div className="flex justify-between mt-5 gap-12 lg:col-span-2 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="font-bold text-2xl">Kontak Kami</p>
              <nav className="flex flex-col mt-4 space-y-2 text-[13px] font-light">
                <a className="hover:opacity-75" href>
                  {" "}
                  0857 8443 0098{" "}
                </a>
                <a className="hover:opacity-75" href>
                  {" "}
                  tRecx@gmail.com{" "}
                </a>
                <a className="hover:opacity-75" href>
                  {" "}
                  Jl. Lingkar Luar, Cengkareng, Jakarta Barat, Jakarta{" "}
                </a>
              </nav>
            </div>
            <div>
              <p className="font-bold text-2xl">Didukung Oleh</p>
              <nav className="flex flex-col mt-4 space-y-2 text-[13px] font-light">
                <a className="hover:opacity-75" href>
                  {" "}
                  Institut Teknologi PLN{" "}
                </a>
              </nav>
            </div>
            <div>
              <p className="font-bold text-2xl">Ikuti Kami</p>
              <div className="flex mt-8 space-x-6 text-text-secondary">
                <a
                  className="hover:opacity-75"
                  href
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Instagram </span>
                  <img className="h-6" src="/public/img/footer/logo-instagram.png" alt="" />
                </a>
                <a
                  className="hover:opacity-75"
                  href
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Email </span>
                  <img
                    className="h-6"
                    src="/public/img/footer/logo-email.png"
                    alt=""
                  />
                </a>
                <a
                  className="hover:opacity-75"
                  href
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="sr-only"> Whatsapp </span>
                  <img className="h-6" src="/public/img/footer/logo-whatsapp.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
