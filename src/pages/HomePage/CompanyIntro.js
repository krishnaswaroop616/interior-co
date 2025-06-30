function CompanyIntro() {
  return (
    <div className="py-24 px-6 flex justify-center bg-transparent/30 text-white">
      <div className="bg-white/10 backdrop-blur-lg p-10 rounded-2xl shadow-2xl max-w-4xl w-full space-y-10">

        <div>
          <h2 className="text-3xl font-bold border-l-4 border-orange-500 pl-4 mb-4">Who We Are</h2>
          <p className="text-gray-200 leading-relaxed text-lg">At InteriorCo, we transform spaces into elegant, functional environments that reflect your personality and lifestyle. <br /><br />Our philosophy combines creativity, attention to detail, and premium craftsmanship — whether it's a cozy home, a luxurious apartment, or a modern villa, we turn your vision into reality.</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold border-l-4 border-orange-500 pl-4 mb-4">Why Choose Us</h2>
          <ul className="text-gray-300 space-y-4 list-disc list-inside text-lg">
            <li>Tailored Design Solutions for Every Client</li>
            <li>Experienced & Certified Interior Designers</li>
            <li>Complete Project Management from Concept to Completion</li>
          </ul>
        </div>

      </div>
    </div>
  );
}

export default CompanyIntro;
