"use client";

import { motion, useAnimation } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import CondolenceModal from "./CondolenceModal";
import { Button } from "./ui/button";

interface CarouselProps {
  images: { src: string; title: string }[];
}

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

  return (
    <div className='bg-gray-50'>
      <div ref={ref} className='relative py-12 px-4  max-w-6xl mx-auto'>
        <h2 className='text-center text-2xl font-semibold'>
          CONDOLENCE MESSAGES
        </h2>
        <div
          ref={carouselRef}
          className='flex overflow-x-auto space-x-4 scrollbar-hide mt-8'>
          {images.map((image, index) => (
            <motion.div
              key={index}
              className='relative min-w-[300px] flex-shrink-0'
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}>
              <div className='relative'>
                <Image
                  src={image.src}
                  alt={image.title}
                  width={300}
                  height={200}
                  className='rounded-lg cursor-pointer shadow-lg border'
                  onClick={() => openModal(image.src)}
                />
                {/* <div className='absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-2 text-center rounded-b-lg'>
                {image.title}
              </div> */}
              </div>
            </motion.div>
          ))}
        </div>
        <div className='flex gap-4 justify-end my-4'>
          <Button
            onClick={scrollLeft}
            size='icon'
            variant='outline'
            className='bg-gray-100'>
            <ChevronLeftIcon />
          </Button>

          <Button
            onClick={scrollRight}
            size='icon'
            variant='outline'
            className='bg-gray-100'>
            <ChevronRightIcon />
          </Button>
        </div>
        <CondolenceModal imageSrc={selectedImage} onClose={closeModal} />
      </div>
    </div>
  );
};

export default Carousel;
