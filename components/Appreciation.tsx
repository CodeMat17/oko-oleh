import Image from "next/image";

const Appreciation = () => {
  return (
    <div className='px-4 py-12'>
      <h2 className='text-center text-3xl md:text-4xl font-semibold'>
        Appreciation
      </h2>
      <div className="mt-8 flex justify-center">
        <Image
          alt=''
          priority
          width={150}
          height={150}
          src='/oko_appreciation.jpg'
          className="rounded-full shadow-lg"
        />
      </div>
      <div className='mt-8 flex flex-col gap-4 max-w-2xl mx-auto text-lg'>
        <p>
          We extend our heartfelt gratitude to the Ebonyi State Government, the
          Nigerian Union of Journalists (Ebonyi and Afikpo chapters), Most Rev
          Nte Nome PhD and all the ministers who officiated in the mass. Your
          presence and support during this time have been deeply appreciated.
        </p>
        <p>
          We also wish to express our special thanks to the planning committee,
          the Oleh larger family, and the Chi-Agha family. Your dedication and
          effort made the final farewell truly meaningful.
        </p>
        <p>
          To the countless men and women, institutions, and organizations who
          stood by us during Dad&apos;s lifetime, his transition, and the events
          leading to his last respects, we are profoundly grateful.
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
    </div>
  );
};

export default Appreciation;
