import Link from "next/link";

const DesktopNav = () => {
  return (
    <div className='hidden xl:flex gap-5'>
      <Link href='#home' className=''>
        HOME
      </Link>

      <Link href='#order' className=''>
        ORDER
      </Link>

      <Link href='#ministers' className=''>
        MINISTERS
      </Link>

      <Link href='#bio' className=''>
        BIOGRAPHY
      </Link>

      <Link href='#survive' className=' whitespace-nowrap'>
        SURVIVED BY
      </Link>

      <Link href='#tributes' className=''>
        TRIBUTES
      </Link>

      <Link href='#condolences' className=''>
        CONDOLENCES
      </Link>

      <Link href='#gallery' className=''>
        GALLERY
      </Link>

      <Link href='#comments' className=' whitespace-nowrap'>
        FB COMMENTS
      </Link>
    </div>
  );
};

export default DesktopNav;
