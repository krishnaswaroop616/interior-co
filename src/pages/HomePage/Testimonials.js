// Testimonials.js
function Testimonials() {
  const testimonials = [
    { name: "Anita Sharma", review: "Absolutely loved the transformation! Professional team and top-notch design sense. They made our home feel truly special." },
    { name: "Rahul Mehta", review: "Very satisfied with their timely execution and attention to detail. Highly recommend InteriorCo for their exceptional service and results!" },
    { name: "Priya Kapoor", review: "They turned our vision into reality — flawless design and execution. Our new space is beyond what we imagined." },
    { name: "Karan Verma", review: "Their design work exceeded our expectations. Elegant finishes and thoughtful layout created a truly inspiring environment." },
  ];

  return (
    <div className="py-24 px-6 text-white bg-black/70">
      <h2 className="text-4xl font-playfair-display font-bold text-center mb-16">
        What Our Clients Say
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"> {/* Adjusted to 2 columns for better readability/spacing */}
        {testimonials.map((t, idx) => (
          <div key={idx} className="relative bg-white/10 p-8 rounded-lg shadow-lg border border-white/5 group transform transition duration-300 hover:scale-[1.01] hover:shadow-xl">
            {/* Subtle large quote icon in background */}
            <span className="absolute top-4 left-6 text-7xl text-white/5 opacity-70 select-none font-serif">“</span>

            <p className="italic text-lg text-gray-200 mb-6 leading-relaxed font-lato relative z-10">
                "{t.review}"
            </p>
            <h4 className="font-semibold text-white text-right text-base relative z-10">– {t.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;