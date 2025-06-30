function Testimonials() {
  const testimonials = [
    {
      name: "Anita Sharma",
      review: "Absolutely loved the transformation! Professional team and top-notch design sense.",
    },
    {
      name: "Rahul Mehta",
      review: "Very satisfied with their timely execution and attention to detail. Highly recommend!",
    },
    {
      name: "Priya Kapoor",
      review: "They turned our vision into reality — flawless design and execution.",
    },
    {
      name: "Karan Verma",
      review: "Their design work exceeded our expectations. Elegant finishes and thoughtful layout.",
    },
  ];

  return (
    <div className="py-24 px-6 bg-transparent/30 ">
      <h2 className="text-4xl font-bold text-center mb-16">What Our Clients Say</h2>

      <div className="space-y-12 max-w-5xl mx-auto">
        {testimonials.map((el, idx) => (
          <div key={idx} className={`flex flex-col md:flex-row items-center gap-6 ${idx % 2 !== 0 ? "md:flex-row-reverse" : ""}`}>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl w-full md:w-2/3">
              <p className="italic text-lg text-gray-200 mb-4">"{el.review}"</p>
              <h4 className="font-semibold text-white text-right">– {el.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Testimonials;