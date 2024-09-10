"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

const headerText = "GALLERY";

const gallery = [
  "/gallery/2.webp",
  "/gallery/3.webp",
  "/gallery/4.webp",
  "/gallery/5.webp",
  "/gallery/6.webp",
  "/gallery/7.webp",
  "/gallery/8.webp",
  "/gallery/9.webp",
  "/gallery/10.webp",
  "/gallery/12.webp",
  "/gallery/13.webp",
  "/gallery/14.webp",
  "/gallery/15.webp",
  "/gallery/16.webp",
  "/gallery/17.webp",
  "/gallery/19.webp",
  "/gallery/20.webp",
  "/gallery/22.webp",
  "/gallery/23.webp",
  "/gallery/26.webp",
  "/gallery/27.webp",
  "/gallery/28.webp",
  "/gallery/29.webp",
];

const Gallery = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 }); // Trigger animation only once

  const [visibleImages, setVisibleImages] = useState(5); // Start by loading 10 images
  const observerRef = useRef<HTMLDivElement | null>(null); // Ref to the observer trigger element

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisibleImages((prevCount) =>
            Math.min(prevCount + 10, gallery.length)
          ); // Load 10 more images
        }
      },
      { threshold: 1 }
    );

    const currentRef = observerRef.current; // Store the current ref value

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [visibleImages, gallery.length]); // Add visibleImages to dependencies

  return (
    <motion.div id='gallery' ref={ref} className='scroll-mt-16 px-2 sm:px-4 py-12'>
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
        initial='hidden'
        animate={isInView ? "visible" : "hidden"}
        variants={bodyVariants}
        className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mx-auto w-full max-w-6xl'>
        {gallery.slice(0, visibleImages).map((src, i) => (
          <div
            key={i}
            className='relative w-full aspect-video rounded-xl overflow-hidden shadow-md'>
            <Image
              alt=''
              // priority
              // width={200}
              // height={150}
              quality={100}
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              loading='lazy'
              placeholder='blur'
              blurDataURL='data:image/jpeg;base64,...'
              src={src}
              className=' w-full object-cover'
            />
          </div>
        ))}
        {/* Ensure there is a target for the observer */}
        {visibleImages < gallery.length && (
          <div ref={observerRef} style={{ height: "1px" }} />
        )}
      </motion.div>
    </motion.div>
  );
};

export default Gallery;
