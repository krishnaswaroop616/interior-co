import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xqabneol");
  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black/90 text-white px-6">
        <div className="bg-orange-400 text-white p-8 rounded-xl shadow-xl text-center">
          <h2 className="text-2xl font-bold mb-2">Thank you!</h2>
          <p>Your message has been successfully sent.</p>
          <button onClick={() => window.location.href = "/contact"}  className="mt-4 bg-black text-white px-4 py-2 rounded hover:bg-white hover:text-black transition">Close</button>
        </div>
      </div>
    );
  }
  return (

    <div className="bg-transparent/70 text-white min-h-screen pt-24 pb-16 ">
      <h1 className="text-4xl font-bold text-center mb-16">Get in touch</h1>

      <div className="flex flex-col lg:flex-row max-w-5xl mx-auto">
        <div className="flex-1 space-y-8 text-gray-300">
          <div>
            <h3 className="text-xl font-semibold text-orange-400 mb-2 mt-6">Email</h3>
            <p className="text-lg">contact@interiorco.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-orange-400 mb-2">Phone</h3>
            <p className="text-lg">+91 xxxxxxxxxx</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-orange-400 mb-2">Address</h3>
            <p className="text-lg">Bangalore, India</p>
          </div>
        </div>

        <div className="flex-1 bg-white/10 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <input type="text" placeholder="Your Name" name='name' className="w-full px-4 py-3 rounded bg-white/20 text-white placeholder-gray-300 " />
            <input type="email" placeholder="Your Email" name='email' className="w-full px-4 py-3 rounded bg-white/20 text-white placeholder-gray-300 " />
            <textarea rows="4" placeholder="Your Message" name='message' className="w-full px-4 py-3 rounded bg-white/20 text-white placeholder-gray-300  "></textarea>
            <button type='submit' className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded shadow w-full transition">{state.submitting ? "Sending..." : "Submit"}</button>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Contact;
