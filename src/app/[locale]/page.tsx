import FAQ from "@/components/partials/faq";
import HeroSection from "@/components/partials/hero";
import Reviews from "@/components/partials/review";
import Services from "@/components/partials/services";
import Stats from "@/components/partials/stats";

const Home = () => (
  <>
    <HeroSection />
    <Stats />
    <Services />
    <Reviews />
    {/* <Quote /> */}
    <FAQ />
  </>
);

export default Home;
