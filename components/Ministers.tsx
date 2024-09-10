"use client";

import { motion, useInView } from "framer-motion";
import { Award } from "lucide-react";
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

const headerText = "OFFICIATING MINISTERS";

const Ministers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 }); // Trigger animation only once

  return (
    <motion.div id='ministers' ref={ref} className='scroll-mt-16 relative px-4 py-12 max-w-6xl mx-auto '>
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
        className='text-lg font-normal flex flex-col gap-4 mt-10 max-w-sm mx-auto'>
        <div className='flex  gap-1'>
          <Award className='w-5 h-5 mt-1 text-sky-600' />
          <p>Most Rev. Nte Nome Phd</p>
        </div>

        <div className='flex  gap-1'>
          <Award className='w-5 h-5 mt-1 text-sky-600' />{" "}
          <p>Rev. Amb. Comfort Uchanma Ude</p>
        </div>

        <div className='flex  gap-1'>
          <Award className='w-5 h-5 mt-1 text-sky-600' />{" "}
          <p>Pastor Israel Ukor</p>
        </div>

        <div className='flex  gap-1'>
          <Award className='w-5 h-5 mt-1 text-sky-600' />{" "}
          <p>Pastor Blossom Okoye</p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Ministers;
