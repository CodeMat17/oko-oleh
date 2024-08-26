import Advert from "@/components/Advert";
import Appreciation from "@/components/Appreciation";
import Biography from "@/components/Biography";
import CondolenceCarousel from "@/components/CondolenceCarousel";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Ministers from "@/components/Ministers";
import Order from "@/components/Order";
import Tributes from "@/components/Tributes";
import { images } from "@/data/condolence";
import { tributes } from "@/data/tributes";

const Home = () => {
  return (
    <div>
      <Hero />
      <Order />
      <Ministers />
      <Biography />
      <Tributes tributes={tributes} />
      <CondolenceCarousel images={images} />
      <Appreciation />
      <Advert />
      <Footer />                   
    </div>
  );
};

export default Home;
