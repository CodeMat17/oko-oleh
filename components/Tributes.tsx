"use client";


import { motion, useInView } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useRef } from "react";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";

interface Tribute {
  title: string;
  name: string;
  content: string[];
}

type CarouselProps = {
  tributes: Tribute[];
};


const letterVariants = {
  hidden: { opacity: 0, x: -50 }, // Start off-screen to the left
  visible: {
    opacity: 1,
    x: 0, // Slide in to the original position
    transition: {
      type: "spring",
      stiffness: 100, // Adjust for a bouncier spring effect
      damping: 10, // Controls how quickly the spring settles
      duration: 2, // 2 seconds for each letter to appear
    },
  },
};

const bodyVariants = {
  hidden: { opacity: 0, y: 50 }, // Start off-screen from below
  visible: {
    opacity: 1,
    y: 0, // Slide in to the original position
    transition: { duration: 0.6, delay: 2 }, // Delay body content until header animation completes
  },
};

const headerText = "TRIBUTES";

const Tributes = ({ tributes }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 }); // Trigger animation only once

  return (
    <motion.div id='tributes' ref={ref} className='scroll-mt-16 bg-gray-100 dark:bg-gray-950'>
      <div className='relative px-2 py-12 max-w-6xl mx-auto '>
        <motion.h2
          initial='hidden'
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 }, // Delay between letters
            },
          }}
          className={`text-center text-3xl font-semibold text-black dark:text-white md:leading-[5rem]`}>
          {headerText.split("").map((char, i) => (
            <motion.span key={i} variants={letterVariants}>
              {char}
            </motion.span>
          ))}
        </motion.h2>

        <motion.div
          ref={carouselRef}
          initial='hidden'
          animate={isInView ? "visible" : "hidden"}
          variants={bodyVariants}
          className='flex overflow-x-auto space-x-4 scrollbar-hide mt-8'>
          {tributes.map((tribute, index) => (
            <motion.div
              key={index}
              className='relative min-w-[300px] flex-shrink-0 p-2 my-4 bg-white dark:bg-gray-800/20  rounded-2xl shadow-lg '
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <ScrollArea className='relative text-gray-700 dark:text-gray-300 h-[300px] w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto rounded-2xl px-4 pb-4 pt-1 border'>
                <div className=' flex justify-end'>
                  <p className='bg-sky-500 dark:bg-sky-900 text-xs text-sky-50 mt-2 px-1.5 py-0.5 rounded-full italic'>
                    Scroll to read more
                  </p>
                </div>

                <p className='text-center my-3 text-lg font-semibold uppercase'>
                  {tribute.title}
                </p>
                {tribute.content.map((paragraph, i) => (
                  <p key={i} className='mb-2'>
                    {paragraph}
                  </p>
                ))}
                <p className='mt-2 font-medium'>{tribute.name}</p>
              </ScrollArea>
            </motion.div>
          ))}
        </motion.div>
        <div className='flex gap-4 justify-center my-4'>
          <Button
            onClick={scrollLeft}
            size='icon'
            variant='outline'
            className='bg-sky-600 dark:bg-sky-900 text-white hover:bg-sky-200 hover:text-sky-600'>
            <ChevronLeftIcon />
          </Button>

          <Button
            onClick={scrollRight}
            size='icon'
            variant='outline'
            className='bg-sky-600 dark:bg-sky-900 text-white hover:bg-sky-200 hover:text-sky-600'>
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default Tributes;
