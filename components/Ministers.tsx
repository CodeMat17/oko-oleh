import { Award } from "lucide-react";

const Ministers = () => {
  return (
    <div className='relative px-4 py-12 max-w-6xl mx-auto '>
      <h2 className='text-center text-2xl tracking-widest md:text-3xl font-semibold'>
        OFFICIATING MINISTERS
      </h2>

      <div className='text-lg font-normal text-center mt-10 space-y-4'>
        <div className='flex items-center justify-center gap-1'>
          <Award className='w-5 h-5 mt-1 text-sky-600' />{" "}
          <p>Most Rev. Nte Nome Phd</p>
        </div>

        <div className='flex items-center justify-center gap-1'>
          <Award className='w-5 h-5 mt-1 text-sky-600' />{" "}
          <p>Rev. Amb. Comfort Uchanma Ude</p>
        </div>

        <div className='flex items-center justify-center gap-1'>
          <Award className='w-5 h-5 mt-1 text-sky-600' />{" "}
          <p>Pastor Israel Ukor</p>
        </div>
      </div>
    </div>
  );
};

export default Ministers;
