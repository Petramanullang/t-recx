import Navbar from '../components/Navbars';
import Footer from '../components/Footer';
import React from 'react';
import ContactForm from '../components/ui/ContactForm';
import ThanksContact from '../components/ui/ThanksContact';
export default function Contact() {
    const inputClass = "border-2 border-[#4E9574] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#4E9574] transition duration-200";
    return (
        <div className="relative h-[520px] ">
            <Navbar />
            <img
                src="/images/contactKami.png"
                alt="Latar Belakang Halaman"
                className="absolute inset-0 w-full h-full object-cover z-0"
            />

            <div className="relative z-10 h-full flex flex-col">
                <div className="flex-grow flex items-center justify-center">
                    <h1 className="text-[80px] font-bold text-white text-center mt-20">
                        Kontak Kami
                    </h1>
                </div>
            </div>
            <div className="mt-5">
                <div className="flex mx-65">
                    <ContactForm />
                    <ThanksContact />
                </div>
                <div className="mx-84 rounded-2xl overflow-hidden shadow-lg" style={{ width: '1298px' , height: '269px'}} >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.805142326198!2d106.72523371108306!3d-6.156846693804564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f78bc6bb1291%3A0x56c06565169b7ee1!2sJl.%20Outer%20Ring%20Road%2C%20Kota%20Jakarta%20Barat%2C%20Daerah%20Khusus%20Ibukota%20Jakarta!5e0!3m2!1sid!2sid!4v1764141776712!5m2!1sid!2sid"
                        // Gunakan 100% agar mengisi penuh wrapper
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Lokasi Kantor T-Recx"
                    ></iframe>
                </div>
                <Footer/>
            </div>
        </div>
    );
}