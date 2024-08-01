export default function Bottom() {
    const items= [
        { "name": "Gamelan", "image": "/images/pariwisata-sejarah/card/Gamelan.jpg" },
        { "name": "Gendurian", "image": "/images/pariwisata-sejarah/card/Gendurian.jpg" },
        { "name": "Pendopo & Sekolah", "image": "/images/pariwisata-sejarah/card/Pendopo-Sekolah.jpg" },
        { "name": "Pondok Meditasi", "image": "/images/pariwisata-sejarah/card/Pondok-Meditasi.jpg" }
    ]

    return (
        <div className="py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            { items.map((item, index) => (
                <div key={index} className="bg-white gradient-border rounded-lg drop-shadow-lg">
                    <div className="text-center items-center py-5">
                        <div className="p-3 h-64 w-64">
                            <img
                                className="h-full w-full object-cover"
                                src={item.image}
                                alt="" />
                        </div>

                        <h5 className="text-lg text-blue-900 font-clash font-medium">{item.name}</h5>
                    </div>
                </div>
            ))}
        </div>
    );
  }
  