import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Navbar() {
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (name) => {
    setActive(name);
    setMenuOpen(false); 
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/40 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-white">Foyerbloom</div>

        <div className="space-x-6 hidden md:flex">
          <Link to="/" className={active === "home" ? "text-orange-400" : "hover:text-orange-400"} onClick={() => handleLinkClick("home")}>Home</Link>
          <Link to="/about" className={active === "about" ? "text-orange-400" : "hover:text-orange-400"} onClick={() => handleLinkClick("about")}>About</Link>
          <Link to="/services" className={active === "services" ? "text-orange-400" : "hover:text-orange-400"} onClick={() => handleLinkClick("services")}>Services</Link>
          <Link to="/gallery" className={active === "gallery" ? "text-orange-400" : "hover:text-orange-400"} onClick={() => handleLinkClick("gallery")}>Gallery</Link>
          <Link to="/contact" className={active === "contact" ? "text-orange-400" : "hover:text-orange-400"} onClick={() => handleLinkClick("contact")}>Contact</Link>
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <HiX className="text-3xl" /> : <HiMenu className="text-3xl" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden px-6 pb-6 space-y-4  text-white text-center">
          <Link to="/" onClick={() => handleLinkClick("home")} className="block hover:text-orange-400">Home</Link>
          <Link to="/about" onClick={() => handleLinkClick("about")} className="block hover:text-orange-400">About</Link>
          <Link to="/services" onClick={() => handleLinkClick("services")} className="block hover:text-orange-400">Services</Link>
          <Link to="/gallery" onClick={() => handleLinkClick("gallery")} className="block hover:text-orange-400">Gallery</Link>
          <Link to="/contact" onClick={() => handleLinkClick("contact")} className="block hover:text-orange-400">Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
