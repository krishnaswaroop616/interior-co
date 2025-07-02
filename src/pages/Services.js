import { useState } from 'react';
import { useForm } from '@formspree/react';

function Services() {
    const [state, handleSubmit] = useForm("xqabneol");

    const services = [
        {
            title: "Residential Interiors",
            img: "/living-room.jpg",
            desc: "Bespoke interior design solutions tailored for apartments, villas, and homes.",
        },
        {
            title: "Commercial Spaces",
            img: "/office.jpg",
            desc: "Functional and stylish designs for offices, stores, and business centers.",
        },
        {
            title: "Interior Consultation",
            img: "/kitchen.jpg",
            desc: "Expert advice and planning sessions to help you shape your dream space.",
        },
        {
            title: "Custom Furniture",
            img: "/custom-furniture.jpg",
            desc: "Built-to-fit furniture designed for comfort, utility, and visual appeal.",
        },
        {
            title: "Renovation & Makeover",
            img: "/makeover.jpg",
            desc: "Revamp existing spaces with modern aesthetics and smart layouts.",
        },
        {
            title: "3D Design & Visualization",
            img: "/3d-visualization.jpg",
            desc: "Preview your space with realistic renders before execution.",
        }
    ];

    return (
        <div className="bg-transparent/70 min-h-screen pt-24 pb-16 px-6 text-white">
            <h1 className="text-5xl font-bold text-center mb-12 mt-5">What We Provide</h1>

            <div className="flex flex-wrap justify-center gap-7 max-w-6xl mx-auto mb-20 ">
                {services.map((service, idx) => (
                    <div key={idx}  className="bg-white/10 backdrop-blur-md p-2 flex flex-col mb-5 rounded-xl shadow-lg text-center  w-[350px] hover:scale-105 transition duration-200">
                        <img src={service.img} className='h-48 mb-5 rounded-xl opacity-80'></img>
                        <h3 className="text-xl font-semibold text-orange-400">{service.title}</h3>
                        <p className='mb-2'>{service.desc}</p>
                    </div>
                ))}
            </div>

            {state.succeeded ? (
                <div className="bg-orange-600 text-white text-center mx-auto w-64 p-6 rounded-xl shadow-xl mt-5">
                    <h3 className="text-2xl font-bold mb-2">Thank you!</h3>
                    <p>We'll get back to you shortly regarding your consultation request.</p>
                </div>
            ) : (
                <div className="max-w-3xl mx-auto mt-20 bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-bold text-center mb-6">Request a Consultation</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <input type="text" name='name' placeholder="Your Name" required className="w-full px-4 py-3 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none" />
                        <input type="email" name='email' placeholder="Your Email" required className="w-full px-4 py-3 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none" />
                        <input type="text" name='phone' placeholder="Your Phone Number" className="w-full px-4 py-3 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none" />
                        <textarea rows="4" name='message' placeholder="Tell us what you're looking for..." required className="w-full px-4 py-3 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none resize-none"></textarea>
                        <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded shadow w-full transition">{state.submitting ? "Sending..." : "Request Consultation"}</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default Services;
