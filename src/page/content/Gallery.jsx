import CraftCard from "../../components/ui/CraftCard";
const craftData = [
        {
                title: "Vas Bunga",
                description: "Botol plastik bekas yang biasanya jadi sampah ternyata bisa disulap jadi vas bunga cantik dan estetik. Kerajinan ini mudah dibuat dan cocok sebagai...",
                imageSrc: "/images/vas.png",
                slug: "vas",
        },
        {
                title: "Wadah Pensil",
                description: "Kaleng bekas bisa jadi tempat pensil yang rapi dan unik kalau dihias dengan sedikit kreativitas. Kerajinan ini membantu mengurangi sampah...",
                imageSrc: "/images/pen.png",
                slug: "pen",
        },
        {
                title: "Pot Tanaman Mini",
                description: "Cup plastik bekas minuman bisa kamu ubah menjadi pot tanaman mini yang lucu dan dekoratif. Cocok untuk meja belajar, rak buku, atau hadiah kecil...",
                imageSrc: "/images/plant.png",
                slug: "plant",
        },
        {
                title: "Dompet Koin",
                description: "Kemasan kopi tebal punya struktur kuat yang pas untuk dijadikan dompet koin fungsional. Dengan sedikit lipatan dan resteting, sampah kemasan...",
                imageSrc: "/images/wallet.png",
                slug: "wallet",
        },


        {
                title: "Lampion",
                description: "Kertas atau karton bekas bisa jadi lampion cantik untuk dekorasi kamar atau acara kecil. Kerajinannya ringan, hemat bahan, dan mudah dibuat...",
                imageSrc: "/images/lamp.png",
                slug: "lamp",
        },
        {
                title: "Hiasan Dinding",
                description: "CD lama yang sudah tidak terpakai masih bisa bersinar lewat kerajinan mozaik dinding. Dengan pantulan cahaya dari pecahannya, hasil...",
                imageSrc: "/images/wall.png",
                slug: "wall",
        },
        {
                title: "Keranjang Mini",
                description: "Koran bekas yang biasanya menumpuk di rumah bisa diubah menjadi keranjang mini yang kuat dan multifungsi. Teknik anyamannya ....",
                imageSrc: "/images/bucket.png",
                slug: "bucket",
        },
        {
                title: "Organizer Meja",
                description: "Kardus bekas yang sering kita anggap tidak berguna ternyata bisa diubah menjadi organizer meja yang rapi dan fungsional. Dengan sedikit potongan",
                imageSrc: "/images/table.png",
                slug: "table",
        },
];
export default function Gallery() {

        return (
                <div className="">
                        <div className="relative h-[400px]">
                                <div className="bg-[#4E9574] h-[311px] w-[1522px] shadow-xl overflow-hidden">
                                        <div className="flex w-full h-full  items-center justify-center mt-10">
                                                <h1 className="font-bold text-6xl text-white mr-80">Galeri Kerajinan Kreatif</h1>
                                                <img
                                                        src="/icons/logo_about.png"
                                                        alt="T-Recx Character"
                                                        className="w-[201px] h-[303px] absolute translate-x-70 translate-y-10"
                                                />
                                        </div>
                                </div>
                        </div>
                        <div className="mt-10">
                                <h3 className="text-[22px] font-[#808181] font-normal text-center items-center justify-center mx-41">
                                        Lihat pameran kerajinan daur ulang barang sampah anorganik  di bawah ini dan buatlah versi kamu, sekarang  dan
                                        Ubah sampah anorganik menjadi barang yang bernilai!
                                </h3>
                        </div>
                        <div className="mt-20">
                                <div className="max-w-7xl mx-auto px-4 py-16">

                                        {/* 🌟 Menggunakan Grid: Ini adalah cara yang benar 🌟 */}
                                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-20">
                                                {craftData.map((craft, index) => (
                                                        <CraftCard
                                                                key={index}
                                                                title={craft.title}
                                                                description={craft.description}
                                                                imageSrc={craft.imageSrc}
                                                                slug={craft.slug}
                                                        />
                                                ))}
                                        </div>

                                </div>
                        </div>
                </div>
        );
}