"use client";

import { motion } from "framer-motion";
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

  return (
    <div className='bg-gray-100 dark:bg-gray-950'>
      <div className='relative px-2 py-12 max-w-6xl mx-auto '>
        <h2 className='text-center text-3xl md:text-4xl font-semibold'>
          TRIBUTES
        </h2>

        <div
          ref={carouselRef}
          className='flex overflow-x-auto space-x-4 scrollbar-hide mt-8'>
          {tributes.map((tribute, index) => (
            <motion.div
              key={index}
              className='relative min-w-[300px] flex-shrink-0 p-2 my-4 bg-white dark:bg-gray-800/20  rounded-xl shadow-lg '
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <ScrollArea className='relative text-gray-700 dark:text-gray-300 h-[300px] w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto rounded-md px-4 pb-4 pt-1 border'>
                <div className=' flex justify-end'>
                  <p className='bg-sky-500 text-xs text-sky-50 px-1 pb-0.5 rounded-full italic'>
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
        </div>
        <div className='flex gap-4 justify-center my-4'>
          <Button
            onClick={scrollLeft}
            size='icon'
            variant='outline'
            className='bg-sky-600 text-white hover:bg-sky-200 hover:text-sky-600'>
            <ChevronLeftIcon />
          </Button>

          <Button
            onClick={scrollRight}
            size='icon'
            variant='outline'
            className='bg-sky-600 text-white hover:bg-sky-200 hover:text-sky-600'>
            <ChevronRightIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Tributes;
