export default function Bottom() {
    const items= [
        { "name": "Gamelan", "image": "/images/Hero2.png" },
        { "name": "Gamelan", "image": "/images/Hero2.png" },
        { "name": "Gamelan", "image": "/images/Hero2.png" },
        { "name": "Gamelan", "image": "/images/Hero2.png" }
    ]

    return (
        <div className="py-20 px-10 grid grid-cols-4 gap-10">
            { items.map((item, index) => (
                <div key={index} className="bg-white border border-lime-700 rounded-lg drop-shadow-lg">
                    <div className="text-center items-center py-5">
                        <div className="p-3 h-64 w-64">
                            <img
                                className="h-full w-full object-cover"
                                src={item.image}
                                alt="" />
                        </div>

                        <h5 className="text-lg text-blue-900">{item.name}</h5>
                    </div>
                </div>
            ))}
        </div>
    );
  }
  