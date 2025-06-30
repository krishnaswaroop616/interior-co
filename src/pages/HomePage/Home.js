import HeroSection from "./HeroSection";
import CompanyIntro from "./CompanyIntro";
import FeaturedProjects from "./FeaturedProjects";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <div className="bg-black bg-opacity-70 min-h-screen w-full">
      <HeroSection/>
      <CompanyIntro/>
      <FeaturedProjects/>
      <Testimonials/>
    </div>
  );
}

export default Home;
