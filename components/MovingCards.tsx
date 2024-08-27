"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function MovingCards() {
  return (
    <div
      className='py-12
     rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden'>
      <h2 className='text-center text-3xl md:text-4xl font-semibold mb-8'>
        COMMENTS FROM FACEBOOK USERS
      </h2>
      <InfiniteMovingCards
        items={testimonials}
        direction='right'
        speed='slow'
      />
    </div>
  );
}

const testimonials = [
  {
    quote: "Rest on my great in-law",
    name: "Princess Adaora",
    img: '/fb_users/p_adaora.jpg',
  },
  {
    quote: "rest in peace my uncle",
    name: "Nnam Kelechukwu",
     img: '/fb_users/nnam_k.jpg',
  },
  {
    quote:
      "May Papa's soul rest in perfect peace Amen. He was indeed a great man. I used to visit him when I was in UNEC. This life no bi am at all",
    name: "Patrick Oleh",
     img: '/fb_users/pat_3.jpg',
  },
  {
    quote: "May the soul of the legend continue to rest in peace.",
    name: "Joyce Egwu",
     img: '/fb_users/joyce.jpg'
  },
  {
    quote: "Continue to rest in peace Dad",
    name: "Martha Nne Bekee Chiadi",
     img: '/fb_users/nnenna.jpg',
  },
  {
    quote: "Continue to rest in peace",
    name: "Orji Christiana",
     img: '/fb_users/orji_c.jpg',
  },
  {
    quote: "Ogo rest in peace",
    name: "Onovo Michael",
     img: '/fb_users/pastor_m',
  },
  {
    quote: "A Legend indeed! Rest on Sir.",
    name: "Onyekachi Kalu",
     img: '/fb_users/onyekachi.jpg',
  },
  {
    quote: "May his soul rest in peace",
    name: "Emmanuel Bishop Onovo",
     img: '/fb_users/emma_onovo.jpg',
  },
  {
    quote: "So sorry ma'am. Please accept my condolences.",
    name: "Dalintin Smart Onovo",
     img: '/fb_users/dalintin_onovo.jpg',
  },
  {
    quote:
      "May his soul find peace and his spirit return to the Most High CHUKWU OKIKE OBIAMA 🤲 iseeeeee 🙌",
    name: "Azuka Oledimma",
     img: '/fb_users/azuka.jpg',
  },
  {
    quote: "My God keep keeping your soul in peace, Amen.",
    name: "Oko Fastidious",
     img: '/fb_users/fastidious.jpg',
  },
  {
    quote: "May he continue resting in Lord",
    name: "Johnpaul Ezeani",
    img: '/fb_users/ezeani.jpg',
  },
  {
    quote: "Rest on sir. Your legacy lives on!",
    name: "Uchechy Amaks Anyanwu-Osegbo",
     img: '/fb_users/amaks.jpg',
  },
  {
    quote:
      "May His soul rest in peace My deepest Condolences to You Chukwu Uchanta and your entire family",
    name: "Lorretta Duruji Ihemadu",
     img: '/fb_users/lorretta.jpg',
  },
  {
    quote:
      "Nwanyioma. It’s well with you and family . May God grant your father’s soul eternal rest and may the burial be a success in Jesus name. Amen Jisike oh 🙏 Be strong",
    name: "Nancy Akpan",
     img: '/fb_users/nancy_akpan.jpg',
  },
  {
    quote:
      "My condolences dear. May God continue to uphold your entire family.",
    name: "Chioma Jane Okonkwo Adighibe",
     img: '/fb_users/chioma_jane.jpg',
  },
  {
    quote: "MAY HE CONTINUE TO REST IN THE BOSSUM OF THE LORD.",
    name: "Emmanuel Chukwu",
     img: '/fb_users/emm_chukwu.jpg',
  },
  {
    quote:
      "Rest on my good friend and colleague in the Fourth Estate of the Realm. Rest in peace Mkpurukem",
    name: "Andrew Nnebedum",
     img: '/fb_users/nebedum.jpg',
  },
  {
    quote:
      "May his Gentle soul continue to rest in peace of the lord,Amen. Take heart dear.God is your strength.",
    name: "Uche Francis KC",
     img: '/fb_users/uche_francis.jpg',
  },
  {
    quote: "Oh! Papa rest in peace",
    name: "Gift Ofem",
     img: '/fb_users/ofem.jpg',
  },
  {
    quote:
      "May his gentle soul rest in peace amen please uchanta My sister accept my condolences",
    name: "Ubagu Obiageli Ezeobi",
     img: '/fb_users/oby.jpg',
  },
  {
    quote:
      "Be consoled nwere nee as the Lord grants a sweet repose to ur Dad!!",
    name: "Iyke Nnali",
     img: '/fb_users/nnali.jpg',
  },
  {
    quote: "May his soul rest in peace",
    name: "Uchendu Uchechi",
     img: '/fb_users/uchechi.jpg',
  },
  {
    quote: "Rest in peace sir. I pray for a successful ceremony, Amen.",
    name: "Emem Akpan B Unuigbe",
     img: '/fb_users/emem.jpg',
  },
  {
    quote:
      "Rest in peace super major Oko you come, you saw and you conquer. Good bye great Legend.",
    name: "Las Tony",
     img: '/fb_users/las_tony.jpg',
  },
  {
    quote: "May perpetual light shine upon his illustrious soul.",
    name: "Benjamin Achi",
     img: '/fb_users/ben_achi.jpg',
  },
  {
    quote:
      "Rest on big daddy, we love you but God loves you most. You will be fondly remembered. May ur soul continue to rest in perfect peace. Amen.",
    name: "Uzoma Ogeri Okole",
     img: '/fb_users/uzoma.jpg',
  },
  {
    quote: "May your soul rest in peace in Jesus name Amen",
    name: "Azubuike Margaret",
     img: '/fb_users/magret.jpg',
  },
  {
    quote: "May His Gentle Soul Rest In Perfect Peace, 🙏",
    name: "Obinna Agha",
     img: '/fb_users/obinna_agha.jpg',
  },
  {
    quote: "Go well sir. May your works on Earth speak for you.",
    name: "Peter Ahamefule",
     img: '/fb_users/peter_afam.jpg',
  },
  {
    quote: "May his soul rest in peace 😭😭😭",
    name: "Mbah Ochiaghia",
     img: '/fb_users/ochiagha.webp',
  },
  {
    quote: "Keep resting Sir till the resurrection morning 🌄🙏",
    name: "Aghaokoro Ann",
     img: '/fb_users/aghaokoro.jpg',
  },
  {
    quote: "Ewooo, good Papa, rest in peace till we meet to part no more...",
    name: "Cecilia Okeh",
     img: '/fb_users/cecilia.jpg',
  },
  {
    quote:
      "Please accept my condolence ma, may the soul of our father in law continue to rest in peace!!",
    name: "Chijioke Ogbonnaya",
     img: '/fb_users/chijioke.jpg',
  },
  {
    quote: "Continue to rest in peace,Nna ọma!",
    name: "Chioma Olugh",
     img: '/fb_users/chioma_olu.jpg',
  },
  {
    quote:
      "May his soul rest in peace and quiet. May the family and friends be consoled.",
    name: "Vincent Oshigbo",
     img: '/fb_users/vincent.jpg',
  },
  {
    quote: "Continue to rest in peace uncle dearest",
    name: "Blossom Glory",
     img: '/fb_users/blossom.jpg',
  },
  {
    quote: "May his gentle soul rest with God.",
    name: "Ogboñnaya Inya",
     img: '/fb_users/ogbonnaya_inya.jpg',
  },
  {
    quote: "May his soul rest in peace in the bossom of the Almighty God 🙏🙏",
    name: "Ude Omah",
     img: '/fb_users/ude_omah.jpg',
  },
  {
    quote: "May his soul rest in peace 😭😭😭😭😭",
    name: "Nnam Chinyere",
     img: '/fb_users/nnam_chinyere.jpg',
  },
  {
    quote: "May his gentle soul rest in perfect peace, Amen.",
    name: "Nkeiru Onyeanwu Achugwo",
     img: '/fb_users/nkeiru.jpg',
  },
  {
    quote: "May His Gentle Soul Rest In Perfect Peace, 🙏",
    name: "Paul Kelly",
     img: '/fb_users/paul_kelly.webp',
  },
  {
    quote:
      "May his gentle soul rest in perfect peace through Christ our Lord Amen and Amen 🙏. Accept my sympathies.",
    name: "Anthonymary Ogene",
     img: '/fb_users/anthonymary.jpg',
  },
  {
    quote: "Take heart dear. May his soul rest in peace 🙏",
    name: "Angela Ogeri Eluu Iduma",
     img: '/fb_users/angela_ogeri.jpg',
  },
  {
    quote: "May his soul rest in perfect peace",
    name: "Patricia Udosen",
     img: '/fb_users/udosen.jpg',
  },
  {
    quote: "May his soul rest in peace. Amen",
    name: "Idaresit Oboko",
     img: '/fb_users/idaresit.jpg',
  },
  {
    quote: "May his gentle soul rest in peace",
    name: "Ngozi Doris Ijomah Nwajei",
     img: '/fb_users/nwajei.jpg',
  },
  {
    quote: "Farewell sir, may his soul rest in peace.",
    name: "Orji Kelechi",
     img: '/fb_users/orji_kelechi.jpg',
  },
];
