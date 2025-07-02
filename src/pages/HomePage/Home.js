// Home.js
import HeroSection from "./HeroSection";
import CompanyIntro from "./CompanyIntro";
import FeaturedProjects from "./FeaturedProjects";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <div className=" min-h-screen w-full font-sans antialiased"> 
      <HeroSection/>
      <CompanyIntro />
      <FeaturedProjects/>
      <Testimonials/>
    </div>
  );
}

export default Home;