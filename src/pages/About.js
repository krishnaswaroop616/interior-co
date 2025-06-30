function About() {
  const team = [
    { name: "Anita Sharma", role: "Creative Director" },
    { name: "Rahul Mehta", role: "Lead Designer" },
    { name: "Priya Kapoor", role: "Architectural Consultant" },
  ];

  return (
    <div className="bg-transparent/70 text-white min-h-screen pt-24 pb-16 px-6">
      <h1 className="text-4xl font-bold text-center mb-16">About Us</h1>
      <div className="max-w-4xl mx-auto space-y-12 text-gray-200 leading-relaxed">
        <div>
            <h2 className="text-2xl font-semibold mb-3 text-orange-400">Our History</h2>
            <p>Founded in 2015, InteriorCo was born from a vision to merge creativity with comfort. From small apartment projects to expansive villa transformations, we’ve grown by delivering interiors that resonate with personality and purpose.</p>
        </div>
         
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-orange-400">Our Mission</h2>
          <p>To deliver refined, functional, and aesthetically compelling spaces that reflect our clients unique identities and enhance everyday living.</p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-orange-400">Our Vision</h2>
          <p>To become a national leader in sustainable, innovative, and tailored interior solutions — setting new standards in design excellence.</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-24">
        <h2 className="text-3xl font-bold text-center mb-12">Meet Our Leadership</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center md:items-stretch">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl p-8 text-center w-full md:w-1/3 hover:scale-[1.02] transition">
              <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl font-bold text-orange-400">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-orange-300">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
