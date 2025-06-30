import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [active,setActive] =useState("");
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">InteriorCo</div>
        <div className="space-x-6 hidden md:flex">
          <Link to="/" className={active==="home"?"text-orange-400 ":"hover:text-orange-400"} onClick={()=>setActive("home")}>Home</Link>
          <Link to="/about" className={active==="about"?"text-orange-400":"hover:text-orange-400"} onClick={()=>setActive("about")}>About</Link>
          <Link to="/services" className={active==="services"?"text-orange-400":"hover:text-orange-400"} onClick={()=>setActive("services")}>Services</Link>
          <Link to="/gallery" className={active==="gallery"?"text-orange-400":"hover:text-orange-400"} onClick={()=>setActive("gallery")}>Gallery</Link>
          <Link to="/contact" className={active==="contact"?"text-orange-400":"hover:text-orange-400"} onClick={()=>setActive("contact")}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
