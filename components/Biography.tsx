"use client";

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { motion, useInView } from "framer-motion";
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

const headerText = "BIOGRAPHY";

const Biography = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.08 }); // Trigger animation only once

  const sections = [
    {
      title: "Birth and Early Life",
      content: [
        `Chief Oko Oleh was born into the humble family of Oko Agbi Oleh and Ogeri Oko Oleh in Ezi Agbi, Ukpa Village, Afikpo North of Ebonyi State. The second child and first son of four siblings, Oko Oleh, was destined for greatness from an early age. Tragically, his life was marked by the loss of both parents at a tender age—his mother passed away when he was just seven years old, and his father died when he was thirteen. Despite these challenges, Chief Oko Oleh’s brilliance shone through, propelling him to remarkable achievements.`,
      ],
    },
    {
      title: "Education and Early Achievements",
      content: [
        `A child prodigy, Chief Oko Oleh, began his formal education early, attending Government Primary School, Afikpo. His extraordinary intelligence earned him a distinction in Standard 6, making him the best student in the entire old Ogoja province. However, the death of his parents left him without financial support for further education. His teacher, a compassionate whiteman, organized a meeting of Oko Oleh’s kinsmen to solicit funds for his secondary education. Unfortunately, the plea was unsuccessful. Determined to succeed, Oko Oleh went to live with his teacher, AkwaIsua, and attended Macgregor Teacher’s Training College in Afikpo, where he obtained Teachers Grade Three and Two certificates with flying colours.`,
        `Despite not attending a formal secondary school, Chief Oko Oleh’s insatiable thirst for knowledge led him to write the London General Certificate of Education (GCE) in 1967. He passed with exceptional results, surpassing his peers worldwide, especially in English Language, earning him the nickname "Imperial Majesty" among his friends and peers. This achievement was so extraordinary that he received a telegram congratulating him with the message, “congratulations most English.”`,
      ],
    },
    {
      title: "Military Service and the Biafran War",
      content: [
        `In a display of unmatched bravery and patriotism, Chief Oko Oleh left the classroom as a teacher and volunteered for the Biafran Army during the Nigerian Civil War, enlisting as a Subaltern His courage and strategic brilliance during the war quickly earned him promotions, ultimately rising to the rank of Major and Battalion Commander. He was the acting commander of the 54 Brigade Biafran Army in Onitsha, where his fearless leadership in ambushes and victories earned him titles such as “Imperial Son of Darkness” and the “Mad Major.” His service was marked by valour, leading Biafran troops to numerous successes. At the war's end, Chief Oko Oleh was entrusted with the honourable yet somber task of surrendering to the Nigerian troops at Onitsha, where he was subsequently arrested, tried, and acquitted by Colonel Olusegun Obasanjo.`,
      ],
    },
    {
      title: " Academic Pursuits and University Life",
      content: [
        `After the war, Chief Oko Oleh channelled his focus towards education. He was admitted to the University of Nigeria, Nsukka (UNN), where he studied History and Archaeology as part of the pioneer set. Despite financial challenges, he persevered, taking on the role of Chairman of the Editorial Board of the Student Historical Society at UNN. He graduated in 1976 and subsequently served his nation in Eket, now in Akwa Ibom State, between 1976 and 1977.`,
      ],
    },
    {
      title: "Professional Life and Journalism Career",
      content: [
        `Chief Oko Oleh’s professional journey began in 1977 when he joined the Nigeria Broadcasting Corporation (NBC), now Federal Radio Corporation of Nigeria (FRCN). He quickly rose through the ranks, holding significant positions such as Controller Reportorial, Manager of News and Current Affairs at the Enugu National Station, and Senior Producer in 1979. In 1987, he was appointed Controller of Current Affairs at FRCN Enugu.`,
        `In 1990, at the peak of Liberia's civil war, Chief Oko Oleh was drafted by the federal government to lead the first news crew of ECOMOG to Liberia. He chose this national call over a Law program he was pursuing at the University of Lagos.Upon his return in 1991, he was transferred to the FRCN Headquarters in Lagos, where he headed the News Department of FRCN Training School, Shogunle. His expertise and leadership were further recognized in 1993 when the former governor of Abia State, late Dr. Ogbonnaya Onu pulled him out of Federal Radio Corporation of Nigeria to Abia State to become the pioneer Director of News and Current Affairs at the Broadcasting Corporation of Abia State, Umuahia.`,
        `In 1997, following the creation of Ebonyi State, Chief Oko Oleh was appointed the pioneer General Manager of the Ebonyi Broadcasting Service (EBBS) by the Military Administrator of Ebonyi State, Commander Walter Feghabo. His steadfast integrity led to his retirement in 1999, after he refused to engage in unethical practices, standing firm against the government.`,
      ],
    },
    {
      title: "Publications and Leadership Roles",
      content: [
        `Chief Oleh was a prolific writer, with many published and unpublished works, including “The Shadow Monarchy,” “The Mad Major,”and “The Liberian War (The Experience of A Nigerian Journalist).”He contributed to various publications, including an article titled “The Mystery and Splendour of Mkpurunkem” in Untapped Treasure, a publication by the Ministry of Culture and Tourism of Ebonyi State. “Matrilineal System of Inheritance in Afikpo” a paper he presented at the Federal College of  Education Eha-Amufu during their cultural lecture – day ceremony.`,
        `Beyond his professional career, Chief Oleh was deeply involved in various leadership roles. He was elected chairman of the Afikpo branch of the Nigerian Union of Pensioners in 2004 and was conferred with the chieftaincy title of Akaraka Isingwu by the Isingwu Autonomous Community of Umuahia, Abia State in 1995. He served as the Branch Chairman of the Radio Television and Theatre Workers Union of Nigeria (RATTAWU) in Lagos in 1979. He was also conferred with a Fellowship of the Institute of Industrial Administration in 1999 and received a leadership merit award from the same Institute.`,
        `After his retirement from the Civil Service, he became the Chief Editor of the newspaper ‘Nigerian Mandate’ in 2002. His brief foray into politics saw him elected as Secretary of the United Nigeria People’s Party (UNPP), a role he left due to his uncompromising integrity.`,
        `In 2013, he was among the eighteen wise men co opted by the Ebonyi State Government to codify Ehugbo Customary Laws and Traditions.
`,
      ],
    },
    {
      title: "Marriage and Family Life",
      content: [
        `In 1979, Chief Oleh married Lolo Mary Oleh in a traditional ceremony. The marriage was later blessed in the Methodist Church. Together, they raised six children and fostered another, all of whom have become pacesetters in their respective fields. Despite the challenges he faced in his early life, Chief Oleh created a loving and supportive family environment, ensuring that his children had the opportunities he lacked. He also maintained close ties with his surviving sister and numerous cousins, remaining a pillar of support for his extended family.`,
      ],
    },
    {
      title: "Religious Beliefs and Later Life",
      content: [
        `Chief Oko Oleh believed deeply in the existence of a supreme being who governed the affairs of men. He held a deep reverence for the Afikpo deity Mkpurukem, a belief that earned him the nickname “Mkpurukem” among his FRCN colleagues. Known for his unwavering integrity, Chief Oleh lived a life dedicated to justice, never taking what did not belong to him and always advocating for the downtrodden and less privileged. In his later years, he found Christ and communicated with God in a direct and honest manner.`,
      ],
    },
  ];

  return (
    <motion.div id='bio' ref={ref} className='scroll-mt-16'>
      <BackgroundBeamsWithCollision>
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
          className='mt-8 max-w-4xl mx-auto space-y-4 rounded-lg'>
          {sections.map((section, i) => (
            <motion.div
              key={i}
              className='bg-sky-50 dark:bg-gray-950 p-4 sm:p-6 md:p-7 rounded-lg shadow-md hover:shadow-lg'>
              <motion.h3 className='text-sky-500 text-xl rounded-lg uppercase font-medium mb-3'>
                {section.title}
              </motion.h3>

              {section.content.map((paragraph, i) => (
                <motion.p key={i} className='mb-4'>
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </BackgroundBeamsWithCollision>
    </motion.div>
  );
};

export default Biography;
