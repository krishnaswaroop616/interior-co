function FeaturedProjects() {
  const projects = [
    {
      title: "Modern Living Room",
      desc: "A calm and stylish living room with clean lines. Designed for comfortable, modern living.",
      image: "/modern-living-room.jpg"
    },
    {
      title: "Luxury Office Space",
      desc: "A high-end office built for success and comfort. Perfect for leaders who value great design.",
      image: "/luxury-office.jpg"
    },
    {
      title: "Contemporary Kitchen",
      desc: "A smart and beautiful kitchen with top-quality materials. Where cooking becomes an art.",
      image: "/kitchen.jpg"
    }
  ];

  return (
    <div className="py-16 px-4 sm:px-6 md:px-12 bg-black/70 text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
        Our Projects
      </h2>

      <div className="max-w-6xl mx-auto space-y-16">
        {projects.map((proj, idx) => (
          <div key={idx} className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${idx % 2 !== 0 ? "md:grid-flow-col-dense" : ""}`}>
            <div className={`rounded-lg overflow-hidden shadow-xl border border-white/10 transform transition duration-300 hover:scale-[1.03] ${idx % 2 !== 0 ? "md:order-2" : "md:order-1"}`}>
              <img src={proj.image} alt={proj.title} className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover" />
            </div>

            <div className={`p-2 sm:p-4 md:p-6 ${idx % 2 !== 0 ? "md:order-1" : "md:order-2"}`}>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">{proj.title}</h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-4">{proj.desc}</p>
              <button className="text-orange-400 flex items-center text-sm hover:underline transition">View Details <span className="ml-1">→</span></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProjects;
