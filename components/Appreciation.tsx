
"use client";

import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

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

const headerText = "APPRECIATION";

const Appreciation = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 }); // Trigger animation only once

  return (
    <motion.div ref={ref} className='px-4 py-12'>
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
        variants={bodyVariants}>
        <div className='mt-8 flex justify-center'>
          <Image
            alt=''
            priority
            quality={100}
            width={150}
            height={150}
            sizes='(max-width: 768px) 100vw'
            src='/oko_appreciation.webp'
            className='rounded-full shadow-lg w-[150px] h-[200px]'
          />
        </div>
        <div className='mt-8 flex flex-col gap-4 max-w-2xl mx-auto text-lg'>
          <p>
            We extend our heartfelt gratitude to the Ebonyi State Government,
            the Nigerian Union of Journalists (Ebonyi and Afikpo chapters), Most
            Rev Nte Nome PhD and all the ministers who officiated in the mass.
            Your presence and support during this time have been deeply
            appreciated.
          </p>
          <p>
            We also wish to express our special thanks to the planning
            committee, the Oleh larger family, and the Chi-Agha family. Your
            dedication and effort made the final farewell truly meaningful.
          </p>
          <p>
            To the countless men and women, institutions, and organizations who
            stood by us during Dad&apos;s lifetime, his transition, and the
            events leading to his last respects, we are profoundly grateful.
          </p>
          <p>
            We pray that God blesses each of you and grants you safe journeys to
            your various destinations.
          </p>
          <p>With sincere appreciation,</p>
          <div className='font-medium leading-5'>
            <p>Ikechukwu Oleh</p>
            <p>For the Family</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Appreciation;
