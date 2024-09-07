import Advert from "@/components/Advert";
import Appreciation from "@/components/Appreciation";
import Biography from "@/components/Biography";
import CondolenceCarousel from "@/components/CondolenceCarousel";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";

import Ministers from "@/components/Ministers";
import { MovingCards } from "@/components/MovingCards";
import Order from "@/components/Order";
import Tributes from "@/components/Tributes";
import { images } from "@/data/condolence";
import { tributes } from "@/data/tributes";

const Home = () => {

  return (
    <div>
      <div className="w-full h-screen text-center px-4 py-32 text-3xl font-medium tracking-wide">
        Coming Soon!
      </div>
      {/* <Hero /> */}
      {/* <Order /> */}
      {/* <Ministers /> */}
      {/* <Biography /> */}
      {/* <Tributes tributes={tributes} /> */}
      {/* <CondolenceCarousel images={images} /> */}
    
      {/* <MovingCards /> */}
      {/* <Appreciation /> */}
      {/* <Advert /> */}
      {/* <Footer /> */}
    </div>
  );
};

const items = [
  { id: 1, content: "Card 1" },
  { id: 2, content: "Card 2" },
  { id: 3, content: "Card 3" },
  { id: 4, content: "Card 4" },
  { id: 5, content: "Card 5" },
  { id: 6, content: "Card 6" },
  { id: 7, content: "Card 7" },
  { id: 8, content: "Card 8" },
  { id: 9, content: "Card 9" },
  { id: 10, content: "Card 10" },
  { id: 11, content: "Card 11" },
  { id: 12, content: "Card 12" },
];

export default Home;
