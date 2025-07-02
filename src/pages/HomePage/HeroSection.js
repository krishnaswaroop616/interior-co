function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video className="absolute top-0 left-0 w-full h-full object-cover " autoPlay loop muted playsInline src="/heroVid.mp4"/>

      <div className="absolute inset-0 bg-black bg-opacity-20 z-10 flex flex-col justify-end items-start text-white py-[60px] px-2 md:px-10 ">
        <h1 className="text-5xl font-bold leading-tight mb-2 ">Design Dream Home <br></br>With Us</h1>
        <p className="max-w-md text-xl  mb-5 opacity-95 px-1">Create stunning spaces that reflect your vision with our expert team.</p>
        <a href="#intro" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-xl shadow transition duration-200">EXPLORE OUR PORTFOLIO</a>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
    </div>
  );
}

export default HeroSection;