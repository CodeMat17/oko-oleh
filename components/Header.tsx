import Image from "next/image";
import { ModeToggle } from "./ModeToggle";

const Header = () => {
  return (
    <nav className='bg-gray-900/60 px-4 py-2 sticky top-0 z-50 backdrop-filter backdrop-blur-sm'>
      <div className='w-full max-w-6xl mx-auto text-white flex items-center justify-between'>
        <div className="flex items-center gap-3">
          <Image alt='' priority width={40} height={40} src='/header_logo.webp' className="rounded-full" />
          <div className="leading-4">
            <p className="tracking-widest text-gray-400 font-semibold">GOODBYE,</p>
            <p>Hori, Oko Agbi Oleh</p>
          </div>
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Header;
