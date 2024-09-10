"use client";

import Marquee from "@/components/magicui/marquee";
import { cn } from "@/lib/utils";
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

const headerText = "COMMENTS FROM FACEBOOK USERS";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

const testimonials = [
  {
    quote: "Rest on my great in-law",
    name: "Princess Adaora",
    img: "/fb_users/p_adaora.jpg",
  },
  {
    quote: "rest in peace my uncle",
    name: "Nnam Kelechukwu",
    img: "/fb_users/nnam_k.jpg",
  },
  {
    quote:
      "May Papa's soul rest in perfect peace Amen. He was indeed a great man. I used to visit him when I was in UNEC. This life no bi am at all",
    name: "Patrick Oleh",
    img: "/fb_users/pat_3.jpg",
  },
  {
    quote: "May the soul of the legend continue to rest in peace.",
    name: "Joyce Egwu",
    img: "/fb_users/joyce.jpg",
  },
  {
    quote: "Continue to rest in peace Dad",
    name: "Martha Nne Bekee Chiadi",
    img: "/fb_users/nnenna.jpg",
  },
  {
    quote: "Continue to rest in peace",
    name: "Orji Christiana",
    img: "/fb_users/orji_c.jpg",
  },
  {
    quote: "Ogo rest in peace",
    name: "Onovo Michael",
    img: "/fb_users/pastor_m.jpg",
  },
  {
    quote: "A Legend indeed! Rest on Sir.",
    name: "Onyekachi Kalu",
    img: "/fb_users/onyekachi.jpg",
  },
  {
    quote: "May his soul rest in peace",
    name: "Emmanuel Bishop Onovo",
    img: "/fb_users/emma_onovo.jpg",
  },
  {
    quote: "So sorry ma'am. Please accept my condolences.",
    name: "Dalintin Smart Onovo",
    img: "/fb_users/dalintin_onovo.jpg",
  },
  {
    quote:
      "May his soul find peace and his spirit return to the Most High CHUKWU OKIKE OBIAMA 🤲 iseeeeee 🙌",
    name: "Azuka Oledimma",
    img: "/fb_users/azuka.jpg",
  },
  {
    quote: "My God keep keeping your soul in peace, Amen.",
    name: "Oko Fastidious",
    img: "/fb_users/fastidious.jpg",
  },
  {
    quote: "May he continue resting in Lord",
    name: "Johnpaul Ezeani",
    img: "/fb_users/ezeani.jpg",
  },
  {
    quote: "Rest on sir. Your legacy lives on!",
    name: "Uchechy Amaks Anyanwu-Osegbo",
    img: "/fb_users/amaks.jpg",
  },
  {
    quote:
      "May His soul rest in peace My deepest Condolences to You Chukwu Uchanta and your entire family",
    name: "Lorretta Duruji Ihemadu",
    img: "/fb_users/lorretta.jpg",
  },
  {
    quote:
      "Nwanyioma. It’s well with you and family . May God grant your father’s soul eternal rest and may the burial be a success in Jesus name. Amen Jisike oh 🙏 Be strong",
    name: "Nancy Akpan",
    img: "/fb_users/nancy_akpan.jpg",
  },
  {
    quote:
      "My condolences dear. May God continue to uphold your entire family.",
    name: "Chioma Jane Okonkwo Adighibe",
    img: "/fb_users/chioma_jane.jpg",
  },
  {
    quote: "MAY HE CONTINUE TO REST IN THE BOSSUM OF THE LORD.",
    name: "Emmanuel Chukwu",
    img: "/fb_users/emm_chukwu.jpg",
  },
  {
    quote:
      "Rest on my good friend and colleague in the Fourth Estate of the Realm. Rest in peace Mkpurukem",
    name: "Andrew Nnebedum",
    img: "/fb_users/nebedum.jpg",
  },
  {
    quote:
      "May his Gentle soul continue to rest in peace of the lord,Amen. Take heart dear.God is your strength.",
    name: "Uche Francis KC",
    img: "/fb_users/uche_francis.jpg",
  },
  {
    quote: "Oh! Papa rest in peace",
    name: "Gift Ofem",
    img: "/fb_users/ofem.jpg",
  },
  {
    quote:
      "May his gentle soul rest in peace amen please uchanta My sister accept my condolences",
    name: "Ubagu Obiageli Ezeobi",
    img: "/fb_users/oby.jpg",
  },
  {
    quote:
      "Be consoled nwere nee as the Lord grants a sweet repose to ur Dad!!",
    name: "Iyke Nnali",
    img: "/fb_users/nnali.jpg",
  },
  {
    quote: "May his soul rest in peace",
    name: "Uchendu Uchechi",
    img: "/fb_users/uchechi.jpg",
  },
  {
    quote: "Rest in peace sir. I pray for a successful ceremony, Amen.",
    name: "Emem Akpan B Unuigbe",
    img: "/fb_users/emem.jpg",
  },
  {
    quote:
      "Rest in peace super major Oko you come, you saw and you conquer. Good bye great Legend.",
    name: "Las Tony",
    img: "/fb_users/las_tony.jpg",
  },
  {
    quote: "May perpetual light shine upon his illustrious soul.",
    name: "Benjamin Achi",
    img: "/fb_users/ben_achi.jpg",
  },
  {
    quote:
      "Rest on big daddy, we love you but God loves you most. You will be fondly remembered. May ur soul continue to rest in perfect peace. Amen.",
    name: "Uzoma Ogeri Okole",
    img: "/fb_users/uzoma.jpg",
  },
  {
    quote: "May your soul rest in peace in Jesus name Amen",
    name: "Azubuike Margaret",
    img: "/fb_users/magret.jpg",
  },
  {
    quote: "May His Gentle Soul Rest In Perfect Peace, 🙏",
    name: "Obinna Agha",
    img: "/fb_users/obinna_agha.jpg",
  },
  {
    quote: "Go well sir. May your works on Earth speak for you.",
    name: "Peter Ahamefule",
    img: "/fb_users/peter_afam.jpg",
  },
  {
    quote: "May his soul rest in peace 😭😭😭",
    name: "Mbah Ochiaghia",
    img: "/fb_users/ochiagha.webp",
  },
  {
    quote: "Keep resting Sir till the resurrection morning 🌄🙏",
    name: "Aghaokoro Ann",
    img: "/fb_users/aghaokoro.jpg",
  },
  {
    quote: "Ewooo, good Papa, rest in peace till we meet to part no more...",
    name: "Cecilia Okeh",
    img: "/fb_users/cecilia.jpg",
  },
  {
    quote:
      "Please accept my condolence ma, may the soul of our father in law continue to rest in peace!!",
    name: "Chijioke Ogbonnaya",
    img: "/fb_users/chijioke.jpg",
  },
  {
    quote: "Continue to rest in peace,Nna ọma!",
    name: "Chioma Olugh",
    img: "/fb_users/chioma_olu.jpg",
  },
  {
    quote:
      "May his soul rest in peace and quiet. May the family and friends be consoled.",
    name: "Vincent Oshigbo",
    img: "/fb_users/vincent.jpg",
  },
  {
    quote: "Continue to rest in peace uncle dearest",
    name: "Blossom Glory",
    img: "/fb_users/blossom.jpg",
  },
  {
    quote: "May his gentle soul rest with God.",
    name: "Ogboñnaya Inya",
    img: "/fb_users/ogbonnaya_inya.jpg",
  },
  {
    quote: "May his soul rest in peace in the bossom of the Almighty God 🙏🙏",
    name: "Ude Omah",
    img: "/fb_users/ude_omah.jpg",
  },
  {
    quote: "May his soul rest in peace 😭😭😭😭😭",
    name: "Nnam Chinyere",
    img: "/fb_users/nnam_chinyere.jpg",
  },
  {
    quote: "May his gentle soul rest in perfect peace, Amen.",
    name: "Nkeiru Onyeanwu Achugwo",
    img: "/fb_users/nkeiru.jpg",
  },
  {
    quote: "May His Gentle Soul Rest In Perfect Peace, 🙏",
    name: "Paul Kelly",
    img: "/fb_users/paul_kelly.webp",
  },
  {
    quote:
      "May his gentle soul rest in perfect peace through Christ our Lord Amen and Amen 🙏. Accept my sympathies.",
    name: "Anthonymary Ogene",
    img: "/fb_users/anthonymary.jpg",
  },
  {
    quote: "Take heart dear. May his soul rest in peace 🙏",
    name: "Angela Ogeri Eluu Iduma",
    img: "/fb_users/angela_ogeri.jpg",
  },
  {
    quote: "May his soul rest in perfect peace",
    name: "Patricia Udosen",
    img: "/fb_users/udosen.jpg",
  },
  {
    quote: "May his soul rest in peace. Amen",
    name: "Idaresit Oboko",
    img: "/fb_users/idaresit.jpg",
  },
  {
    quote: "May his gentle soul rest in peace",
    name: "Ngozi Doris Ijomah Nwajei",
    img: "/fb_users/nwajei.jpg",
  },
  {
    quote: "Farewell sir, may his soul rest in peace.",
    name: "Orji Kelechi",
    img: "/fb_users/orji_kelechi.jpg",
  },
];

const firstRow = testimonials.slice(0, testimonials.length / 2);
const secondRow = testimonials.slice(testimonials.length / 2);

const ReviewCard = ({
  img,
  name,
  quote,
}: {
  img: string;
  name: string;
  quote: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}>
      <div className='flex flex-row items-center gap-2'>
        <Image
          alt=''
          priority
          width={35}
          height={35}
          src={img}
          className='object-cover rounded-full'
        />
        <div className='flex flex-col'>
          <figcaption className='text-sm font-medium dark:text-white'>
            {name}
          </figcaption>
          {/* <p className='text-xs font-medium dark:text-white/40'>{username}</p> */}
        </div>
      </div>
      <blockquote className='mt-2 text-sm'>{quote}</blockquote>
    </figure>
  );
};

export function FbComments() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 }); // Trigger animation only once

  return (
    <motion.div id='comments'
      ref={ref}
      className='scroll-mt-16 relative mt-12 py-8 flex h-[600px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background max-w-6xl mx-auto'>
      {/* Header text */}
      <motion.h2
        initial='hidden'
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: {
            transition: { staggerChildren: 0.1 }, // Delay between letters
          },
        }}
              className={`
         text-center text-3xl font-semibold text-black dark:text-white md:leading-[5rem] mb-12`}>
        {headerText.split("").map((char, i) => (
          <motion.span key={i} variants={letterVariants}>
            {char}
          </motion.span>
        ))}
      </motion.h2>
      {/* Header text */}

      <motion.div
        initial='hidden'
        animate={isInView ? "visible" : "hidden"}
        variants={bodyVariants} className="">
        <Marquee pauseOnHover className='[--duration:120s]'>
          {firstRow.map((review) => (
            <ReviewCard key={review.img} {...review} />
          ))}
        </Marquee>
        <Marquee reverse pauseOnHover className='[--duration:120s]'>
          {secondRow.map((review) => (
            <ReviewCard key={review.img} {...review} />
          ))}
        </Marquee>
        <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background'></div>
        <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background'></div>
      </motion.div>
    </motion.div>
  );
}
