import Image from "next/image";

const Advert = () => {
  return (
    <div className='px-2 py-20'>
      <p className='font-medium text-4xl text-center'>ADVERTISEMENT</p>
      <div className='mt-8 w-full max-w-lg mx-auto flex justify-center'>
        <Image
          alt=''
          priority
          width={320}
          height={320}
          src='/advert.webp'
          className='w-full aspect-square rounded-lg'
        />
      </div>
    </div>
  );
};

export default Advert;
