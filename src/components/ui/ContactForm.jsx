
import React from 'react';

const ContactForm = () => {
    
    

    return (
            <form className="space-y-4 mx-20 my-10">

                        <div className="flex gap-4">

                            <div className="relative">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email *"
                                    className="p-4 bg-[#F6F9F6] w-[274px] h-[50px] border-2 border-[#4E9574] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4E9574] transition duration-200"
                                />
                            </div>

                            <div className="relative">
                                <input
                                    type="text"
                                    name="nama"
                                    placeholder="Nama *"
                                    className="p-4 bg-[#F6F9F6] w-[389px] h-[50px] border-2 border-[#4E9574] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4E9574] transition duration-200"
                                />
                            </div>
                        </div>

                        <div className="relative">
                            <input
                                type="text"
                                name="subjek"
                                placeholder="Subjek *"
                                className="p-4 bg-[#F6F9F6] w-[681px] h-[63px] border-2 border-[#4E9574] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4E9574] transition duration-200"
                            />
                        </div>

                        <div className="relative">
                            <textarea
                                name="pesan"
                                placeholder="Pesan *"
                                rows="1"
                                className="p-4 bg-[#F6F9F6] w-[681px] h-[220px] border-2 border-[#4E9574] rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#4E9574] transition duration-200"
                            />
                        </div>

                        <div className="flex justify-start pt-4">
                            <button
                                type="submit"
                                className="px-10 py-3 bg-[#4E9574] text-white text-lg font-semibold rounded-xl 
                                   shadow-lg hover:bg-[#3C7359] transition duration-300"
                                // Tambahkan onClick={() => alert('Ini hanya tampilan!')} jika ingin feedback klik
                                onClick={(e) => { e.preventDefault(); alert('Ini hanya tampilan statis.'); }}
                            >
                                Submit
                            </button>
                        </div>

                    </form>
    );
};

export default ContactForm;