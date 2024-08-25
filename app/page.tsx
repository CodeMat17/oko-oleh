import Appreciation from "@/components/Appreciation";
import Biography from "@/components/Biography";
import CondolenceCarousel from "@/components/CondolenceCarousel";
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
    </div>
  );
};

export default Home;
