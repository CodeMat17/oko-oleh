"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";


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

const headerText = "SURVIVED BY";


export function SurvivedBy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 }); // Trigger animation only once

  return (
    <motion.div id='survive' ref={ref} className='scroll-mt-16 px-4 py-12'>
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
        <BackgroundGradient className='rounded-[22px] p-4 sm:p-10 bg-gray-100 dark:bg-gray-950 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          <div>
            <p className='text-lg sm:text-xl text-black dark:text-neutral-200 font-medium'>
              WIFE
            </p>
            <p className='text-neutral-600 dark:text-neutral-400'>
              Lolo (Ezinne) Mary Ogechukwu Oleh
            </p>
          </div>
          <div>
            <p className='text-lg sm:text-xl text-black dark:text-neutral-200 font-medium'>
              CHILDREN
            </p>
            <div>
              <p className='text-neutral-600 dark:text-neutral-400'>
                Ms. Ogechukwu Ogbonne Oleh
              </p>
              <p className='text-neutral-600 dark:text-neutral-400'>
                Mr. Ikechukwu Oleh
              </p>
              <p className='text-neutral-600 dark:text-neutral-400'>
                Mrs. Uchanta Chukwu (nee Oleh)
              </p>
              <p className='text-neutral-600 dark:text-neutral-400'>
                Dr. Ebere Osinachi Ugwu (nee Oleh)
              </p>
              <p className='text-neutral-600 dark:text-neutral-400'>
                Dr. (Barr) Ngozi Chinwa Ole
              </p>
              <p className='text-neutral-600 dark:text-neutral-400'>
                Engr. Ugonna Queen Ibegwam (nee Oleh)
              </p>
              <p className='text-neutral-600 dark:text-neutral-400'>
                Mr. Ifeanyi Okoh Nnam
              </p>
            </div>
          </div>
          <div>
            <p className='text-lg sm:text-xl text-black dark:text-neutral-200 font-medium'>
              GRAND CHILDREN
            </p>
            <div>
              <p className='text-neutral-600 dark:text-neutral-400'>
                Miss. Michelle Mmachukwu Okoh Chukwu
              </p>
              <p className='text-neutral-600 dark:text-neutral-400'>
                Ikenna Sean Agwu George
              </p>
              <p className='text-neutral-600 dark:text-neutral-400'>
                Miss. Nmesomachukwu Ebere Ugwu
              </p>
              <p className='text-neutral-600 dark:text-neutral-400'>
                Chukwuemeka Ifeanyichukwu Nnam Oko
              </p>
            </div>
          </div>
          <div>
            <p className='text-lg sm:text-xl text-black dark:text-neutral-200 font-medium'>
              SON-IN-LAW
            </p>
            <div>
              <p className='text-neutral-600 dark:text-neutral-400'>
                Engr. Matthew Anthony Chukwu
              </p>
              <p className='text-neutral-600 dark:text-neutral-400'>
                Dr. Ifeanyichukwu Chinedum Ugwu
              </p>
              <p className='text-neutral-600 dark:text-neutral-400'>
                Mr. Chukwuemaka Obioma Ibegwam
              </p>
            </div>
          </div>
          <div>
            <p className='text-lg sm:text-xl text-black dark:text-neutral-200 font-medium'>
              SISTER
            </p>
            <p className='text-neutral-600 dark:text-neutral-400'>
              Mrs. Osinachi Nnam
            </p>
          </div>
          <p className='font-medium'>
            Numerous Nephews, nieces, cousins, extended family members and well
            wishers.
          </p>
        </BackgroundGradient>
      </motion.div>
    </motion.div>
  );
}
