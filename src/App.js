import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/HomePage/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div className="bg-fixed bg-cover bg-center text-white" style={{ backgroundImage: "url('/home-page.jpg')" }}><div>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </div>
      </>
    </Router>
  );
}

export default App;
