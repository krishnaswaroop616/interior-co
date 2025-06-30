function FeaturedProjects() {
  const projects = [
    {
      title: "Modern Living Room",
      desc: "A cozy space with minimalist furniture and warm lighting.",
      image: "/modern-living-room.jpg",
    },
    {
      title: "Luxury Office Space",
      desc: "Elegant, productive workspace with customized interiors.",
      image: "/luxury-office.jpg",
    },
    {
      title: "Contemporary Kitchen",
      desc: "Sleek modular design with premium finishes.",
      image: "/kitchen.jpg",
    },
  ];

  return (
    <div className="py-24 px-6 text-white text-center bg-transparent/30">
      <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <div key={idx} className="rounded-2xl overflow-hidden shadow-xl bg-white/10 backdrop-blur-sm transition-transform hover:scale-[1.02] duration-300">
            <div className="relative group">
              <img src={proj.image} alt={proj.title} className="w-full h-56 object-cover transition duration-300 group-hover:brightness-110"/>
            </div>

            <div className="p-6 text-left">
              <h3 className="text-xl font-bold mb-2 text-white">{proj.title}</h3>
              <p className="text-gray-300 text-sm">{proj.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProjects;
