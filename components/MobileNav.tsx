"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { AlignRight, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

const MobileNav = () => {
  const [open, setOpen] = useState(false);

    return (
      <div className="lg:hidden">
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              size='icon'
              className={`transition-all transform duration-500 rounded-full  ${
                open ? "rotate-[360deg]" : ""
              }`}>
              {open ? <X className='text-red-500' /> : <AlignRight />}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='mr-4'>
            <Link href='#home' className='text-xl font-medium'>
              <DropdownMenuItem>HOME</DropdownMenuItem>
            </Link>

            <Link href='#order' className='text-xl font-medium'>
              <DropdownMenuItem>ORDER OF SERVICE</DropdownMenuItem>
            </Link>

            <Link href='#ministers' className='text-xl font-medium'>
              <DropdownMenuItem>MINISTERS</DropdownMenuItem>
            </Link>

            <Link href='#bio' className='text-xl font-medium'>
              <DropdownMenuItem>BIOGRAPHY</DropdownMenuItem>
            </Link>

            <Link href='#survive' className='text-xl font-medium'>
              <DropdownMenuItem>SURVIVED BY</DropdownMenuItem>
            </Link>

            <Link href='#tributes' className='text-xl font-medium'>
              <DropdownMenuItem>TRIBUTES</DropdownMenuItem>
            </Link>

            <Link href='#condolences' className='text-xl font-medium'>
              <DropdownMenuItem>CONDOLENCES</DropdownMenuItem>
            </Link>

            <Link href='#gallery' className='text-xl font-medium'>
              <DropdownMenuItem>GALLERY</DropdownMenuItem>
            </Link>

            <Link href='#comments' className='text-xl font-medium'>
              <DropdownMenuItem>FB COMMENTS</DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
};

export default MobileNav;
