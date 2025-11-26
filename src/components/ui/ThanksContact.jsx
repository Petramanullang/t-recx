
import React from 'react';

const ThanksContact = () => {

        return (
                <div className="my-10">
                        <div className="w-[524px] h-[458px] bg-white rounded-2xl border-2 border-[#4E9574]">
                                <div className="flex px-4">
                                        <h3 className='text-[28px] font-semibold '>Terima Kasih!</h3>
                                        <img
                                                src="/icons/logo_about.png"
                                                alt="T-Recx Character"
                                                className="w-25 absolute top-128 right-124"
                                        />
                                </div>
                                <p className='font-normal text-[18px] text-[#121F0B] p-4'>
                                        t-Recx berterima kasih telah mengunjungi website kami. Semoga anda mendapatkan pengalaman dan pengetahuan yang baik setelah mengunjungi website t-Recx. Silakan masukkan email anda untuk mengisi daftar pengunjung website.
                                </p>
                                <div className="relative px-4">
                                        <input
                                                type="email"
                                                name="email"
                                                placeholder="Email *"
                                                className="px-4 bg-white w-[492px] h-[50px] border-2 border-[#4E9574] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4E9574] transition duration-200"
                                        />
                                </div>
                                <div className="flex justify-start pt-4 px-4">
                                        <button
                                                type="submit"
                                                className="w-[493px] h-[53px]  bg-[#4E9574] text-white text-[25px] font-semibold rounded-[65px] 
                                   shadow-lg hover:bg-[#3C7359] transition duration-300"
                                                // Tambahkan onClick={() => alert('Ini hanya tampilan!')} jika ingin feedback klik
                                                onClick={(e) => { e.preventDefault(); alert('Ini hanya tampilan statis.'); }}
                                        >
                                                Submit
                                        </button>
                                </div>

                                <div className="flex justify-between items-start pt-4 border-t border-gray-200 px-9">

                                        {/* Kolom 1: KONTAK (Telepon & Email) */}
                                        <div className='w-full pr-9'>

                                                {/* Header Kontak (Ikon + Judul) */}
                                                <div className='flex items-center mb-2'>
                                                        <img src="/icons/kontak.png" alt="Kontak" className='w-6 h-6 mr-2' /> {/* w-6 h-6 ≈ 24px */}
                                                        <h3 className='text-[20px] text-black font-semibold ml-2'>Kontak</h3> {/* text-xl ≈ 20px */}
                                                </div>

                                                {/* Detail Kontak */}
                                                <div className='w-48 text-[13px] text-gray-700 text-base'>
                                                        <p>Telepon – 0857 5543 2667,</p>
                                                       <p> Email – tRecxTeam@gmail.com</p>
                                                </div>

                                        </div>

                                        {/* Kolom 2: ALAMAT */}
                                        <div className='w-full pr-9'>

                                                {/* Header Alamat (Ikon + Judul) */}
                                                <div className='flex items-center mb-2'>
                                                        <img src="/icons/alamat.png" alt="Alamat" className='w-6 mr-2' />
                                                        <h3 className='text-[20px] text-black font-semibold ml-2'>Alamat</h3>
                                                </div>

                                                {/* Detail Alamat */}
                                                <div className='w-48 text-[13px] text-gray-700 text-base'>
                                                        <p>Jl. Lingkar Luar, Cengkareng,</p>
                                                        <p>Jakarta Barat, Jakarta</p>
                                                </div>

                                        </div>
                                </div>
                        </div>
                </div>
        );
};

export default ThanksContact;