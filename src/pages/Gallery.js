import React, { useState } from 'react';
import galleryImages from '../data';

function Gallery() {
    const [showAll, setShowAll] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [category, setCategory] = useState("All");

    const categories = ["All", "Living Area", "Dining Area", "Foyer", "Guest Room", "Kitchen", "Kids Room", "Master Bedroom", "Parents Room", "Pooja Unit", "Study Room", "Utility"];

    const handleCategory = (val) => {
        setCategory(val);
        setShowAll(false);
    }


    const images = galleryImages.filter(img =>
        category === "All" ? true : img.category === category
    );

    const imageToDisp =category === "All" && !showAll? images.slice(0, 15): images;

    return (
        <div className="pt-24 pb-16 px-6 bg-transparent/70 text-white min-h-screen">
            <h1 className="text-4xl font-bold text-center mb-4 mt-8">Image gallery</h1>
            <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">A showcase of our completed residential interior projects — including kitchens, bedrooms, living spaces, and more.</p>

            <div className="mb-12 text-center">
                <select value={category} onChange={(e) => handleCategory(e.target.value)} className="bg-white/90 text-black px-4 py-2 rounded text-lg focus:outline-none">
                    {categories.map((item, idx) => (
                        <option key={idx} value={item}>{item}</option>
                    ))}
                </select>
            </div>

            <div className="flex flex-wrap justify-center gap-7">
                {
                    imageToDisp.map((img, idx) => (
                        <div key={idx}>
                            <img src={img.src} alt='interior' className="w-[350px] h-[250px] object-cover rounded-lg shadow-lg hover:scale-105 transition cursor-pointer" onClick={() => { setSelectedImage(img.src); setIsOpen(true); }}></img>
                        </div>
                    ))
                }
            </div>
            {category === "All" && !showAll && images.length > 15 && (
                <div className="text-center mt-10">
                    <button onClick={() => setShowAll(true)} className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition">
                        Show More
                    </button>
                </div>
            )}
            {category === "All" && showAll && images.length > 15 && (
                <div className="text-center mt-6">
                    <button onClick={() => setShowAll(false)} className="px-6 py-3 bg-orange-500 hover:bg-gray-200 text-black rounded-lg font-semibold transition">
                        Show Less
                    </button>
                </div>
            )}

            {isOpen && selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
                    <div className="relative">
                        <img src={selectedImage} alt="Full View" className="max-w-[90vw] max-h-[90vh] rounded-lg " />
                        <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2 bg-white text-black px-3 py-2 rounded-full font-sm shadow">close</button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default Gallery;