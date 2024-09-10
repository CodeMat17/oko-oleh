import Image from "next/image";
import { ModeToggle } from "./ModeToggle";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Header = () => {
  return (
    <nav className='bg-sky-950/80 px-4 py-2 sticky top-0 z-50 backdrop-filter backdrop-blur-sm'>
      <div className='w-full text-white flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <Image
            alt=''
            priority
            width={40}
            height={40}
            sizes="(max-width: 768px) 50vw"
            src='/header_logo.webp'
            className='rounded-full'
          />
          <div className='leading-5 text-lg'>
            <p className='tracking-widest text-gray-400 font-semibold'>
              GOODBYE,
            </p>
            <p>Hori, Oko Agbi Oleh</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
          <MobileNav />
          <DesktopNav />
        </div>
      </div>
    </nav>
  );
};

export default Header;
