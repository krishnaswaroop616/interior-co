function About() {
  const team = [
    {
      name: "Anita Sharma",
      role: "Creative Director",
    },
    {
      name: "Rahul Mehta",
      role: "Lead Designer",
    },
    {
      name: "Priya Kapoor",
      role: "Architectural Consultant",
    },
  ];

  return (
    <div className="bg-transparent/70 text-white min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-5xl mx-auto space-y-24">

        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-playfair-display font-bold mb-8 leading-tight">
            About <span className="text-orange-400 font-semibold">InteriorCo</span>
          </h1>
          <p className="text-lg text-gray-300 font-lato max-w-3xl mx-auto leading-relaxed">
            At InteriorCo, we craft personalized living environments
            that balance elegance, comfort, and functionality — turning everyday spaces into lasting impressions.
          </p>
        </div>

        <div className="space-y-8">
          <h2 className="text-3xl font-playfair-display font-bold border-l-4 border-orange-500 pl-4">
            Our Story & Design Philosophy
          </h2>
          <div className="text-gray-300 font-lato text-lg leading-relaxed space-y-5">
            <p>
              Founded in 2015, InteriorCo began with a vision to reimagine interior spaces — not just as beautiful rooms,
              but as experiences that reflect individuality and purpose.
            </p>
            <p>
              Our approach is rooted in collaboration and detail. We listen closely, design thoughtfully,
              and execute with precision to ensure every space aligns with your lifestyle and aspirations.
            </p>
            <p>
              From concept to completion, we handle every step with care — blending timeless design with modern sensibilities.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-playfair-display font-bold text-center mb-14">
            Meet Our Core Team
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="bg-white/10 border border-white/10 rounded-2xl p-6 text-center backdrop-blur-sm shadow-lg hover:shadow-2xl hover:scale-[1.03] transition"
              >
                <h3 className="text-xl font-playfair-display font-bold mb-1 text-orange-300">
                  {member.name}
                </h3>
                <p className="text-md font-lato text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
