import { FlipWords } from "@/components/ui/flip-words";
import { Rock_Salt } from "next/font/google";
import Image from "next/image";

const rock_salt = Rock_Salt({ subsets: ["latin"], weight: "400" });

const Hero = () => {
  const words = ["rare gem", "legend", "hero of two wars"];

  return (
    <>
      <div className='py-6 w-full dark:bg-black bg-gray-700  dark:bg-grid-white/[0.2] bg-grid-white/[0.2] relative flex flex-col sm:flex-row items-center lg:justify-around'>
        {/* Radial gradient for the container to give a faded look */}
        <div className='absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-gray-950 [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]'></div>

        <div className='relative'>
          <Image alt='' priority width={400} height={450} src='/oko.webp' />
          <Image
            alt=''
            priority
            width={80}
            height={80}
            src='/cross.gif'
            className='absolute top-2 left-4'
          />
        </div>
        <div className='lg:mr-4 space-y-12 mt-6'>
          <div className='relative py-4 flex justify-center items-center px-4 text-center'>
            <div className='absolute text-3xl mx-auto font-medium text-neutral-300 dark:text-neutral-400'>
              The exit of a
              <br />
              <FlipWords words={words} />
            </div>
          </div>
          <div className='text-center '>
            <p className='text-3xl text-white font-medium'>Late Chief</p>
            <h1
              className={`${rock_salt.className} mt-2.5 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-sky-500`}>
              HORI OKO AGBI OLEH
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
