"use client";

import { motion, useAnimation, useInView as useView } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import CondolenceModal from "./CondolenceModal";
import { Button } from "./ui/button";

interface CarouselProps {
  images: { src: string; title: string }[];
}

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

const headerText = "CONDOLENCE MESSAGES";

const Carousel: React.FC<CarouselProps> = ({ images }) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

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

  const openModal = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // Optionally reset to hidden when out of view
    }
  }, [controls, inView]);

  const motionRef = useRef(null);
  const isInView = useView(motionRef, { once: true, amount: 0.15 }); // Trigger animation only once

  return (
    <motion.div
      id='condolences'
      ref={motionRef}
      className='scroll-mt-16 bg-gray-50 dark:bg-gray-950'>
      <div ref={ref} className='relative py-12 px-4  max-w-6xl mx-auto'>
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
          {images.map((image, index) => (
            <motion.div
              key={index}
              className='relative min-w-[300px] flex-shrink-0 py-6'
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <div className='relative'>
                <Image
                  src={image.src}
                  alt={image.title}
                  width={300}
                  height={200}
                  className='rounded-lg cursor-pointer shadow-lg border  h-[400px]'
                  onClick={() => openModal(image.src)}
                />
                {/* <div className='absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-2 text-center rounded-b-lg'>
                {image.title}
              </div> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className='flex gap-4 justify-center my-4'>
          <Button
            onClick={scrollLeft}
            size='icon'
            variant='outline'
            className='bg-sky-500 dark:bg-sky-900 text-white hover:bg-sky-200 hover:text-sky-600'>
            <ChevronLeftIcon />
          </Button>

          <Button
            onClick={scrollRight}
            size='icon'
            variant='outline'
            className='bg-sky-500 dark:bg-sky-900 text-white hover:bg-sky-200 hover:text-sky-600'>
            <ChevronRightIcon />
          </Button>
        </div>
        <CondolenceModal imageSrc={selectedImage} onClose={closeModal} />
      </div>
    </motion.div>
  );
};

export default Carousel;
