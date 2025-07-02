function CompanyIntro() {
  return (
    <div id="intro" className="py-24 px-6 text-white bg-black/70 bg-opacity-80 ">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-transparent/10 backdrop-blur-sm p-8 rounded-lg  order-2 md:order-1">
          <h2 className="text-3xl font-bold border-l-4 border-orange-500 pl-4 mb-6">Crafting Your Vision into Reality</h2>
          <div className="text-gray-300 text-lg leading-relaxed  space-y-6">
            <p>At <span className="text-orange-300 font-semibold">InteriorCo</span>, we don't just decorate spaces — we shape environments that resonate with who you are. Whether it’s a modern apartment, a warm family home, or a luxury villa, we believe every space should tell a story — <span className="italic">your story</span>.</p>
            <p>With a team of experienced designers, architects, and creatives, we approach each project with a balance of elegance, functionality, and attention to the smallest details. Our work blends timeless aesthetics with modern comfort.</p>
            <p><span className="text-orange-300 font-semibold">Why choose us?</span> From concept to completion, we provide end-to-end design services tailored to your lifestyle. Our clients trust us not just for how things look — but how they feel when they walk into their dream space.</p>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden transform transition duration-300 hover:scale-[1.03] order-1 ">
          <video
            src="/compIntroVid.mp4" autoPlay loop muted playsInline className="w-full h-[370px] rounded-xl object-cover"/>
        </div>
      </div>
    </div>
  );
}

export default CompanyIntro;