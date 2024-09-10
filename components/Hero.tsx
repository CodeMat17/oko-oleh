import { BackgroundLines } from "@/components/ui/background-lines";
import { FlipWords } from "@/components/ui/flip-words";
import { Rock_Salt } from "next/font/google";
import Image from "next/image";

const rock_salt = Rock_Salt({ subsets: ["latin"], weight: "400" });

const Hero = () => {
  const words = ["a rare gem", "a legend", "a hero of two wars"];

  return (
    <>
      <div id='home' className='scroll-mt-16 sm:scroll-mt-20 py-6 w-full bg-gray-800  dark:bg-grid-white/[0.1] bg-grid-white/[0.1] relative flex flex-col sm:flex-row items-center lg:justify-around'>
        {/* Radial gradient for the container to give a faded look */}
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]'></div>

        <div className='relative'>
          <Image
            alt=''
            quality={100}
            sizes='(max-width: 768px) 100vw, 400px'
            priority
            width={400}
            height={450}
            // style={{ width: "auto", height: "auto" }}
            src='/oko.webp'
            className="w-full"
          />
          <Image
            alt=''
            priority
            width={70}
            height={70}
            quality={100}
            sizes='(max-width: 768px) 50vw'
            src='/cross.gif'
            className='absolute top-0 -left-4'
          />
        </div>
        <BackgroundLines className='lg:mr-4 space-y-12 mt-2 py-6'>
          <div className='relative py-4 flex justify-center items-center px-4 text-center'>
            <div className='absolute text-3xl mx-auto font-medium text-neutral-300 dark:text-neutral-400'>
              The exit of
              <br />
              <FlipWords words={words} />
            </div>
          </div>
          <div className='relative text-center '>
            <p className='text-3xl text-white font-medium'>Late Chief</p>
            <h1
              className={`${rock_salt.className}  px-2 mt-2.5 text-[33px] sm:text-5xl lg:text-6xl font-extrabold text-sky-500`}>
              HORI OKO AGBI OLEH
            </h1>
          </div>
        </BackgroundLines>
      </div>
    </>
  );
};

export default Hero;
