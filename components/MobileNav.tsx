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
      <div className='lg:hidden'>
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
          <DropdownMenuContent className='mr-4 space-y-4'>
            <Link href='#home'>
              <DropdownMenuItem className='text-2xl tracking-wide font-medium'>
                HOME
              </DropdownMenuItem>
            </Link>

            <Link href='#order'>
              <DropdownMenuItem className='text-2xl tracking-wide font-medium'>
                ORDER OF SERVICE
              </DropdownMenuItem>
            </Link>

            <Link href='#ministers'>
              <DropdownMenuItem className='text-2xl tracking-wide font-medium'>
                MINISTERS
              </DropdownMenuItem>
            </Link>

            <Link href='#bio'>
              <DropdownMenuItem className='text-2xl tracking-wide font-medium'>
                BIOGRAPHY
              </DropdownMenuItem>
            </Link>

            <Link href='#survive'>
              <DropdownMenuItem className='text-2xl tracking-wide font-medium'>
                SURVIVED BY
              </DropdownMenuItem>
            </Link>

            <Link href='#tributes'>
              <DropdownMenuItem className='text-2xl tracking-wide font-medium'>
                TRIBUTES
              </DropdownMenuItem>
            </Link>

            <Link href='#condolences'>
              <DropdownMenuItem className='text-2xl tracking-wide font-medium'>
                CONDOLENCES
              </DropdownMenuItem>
            </Link>

            <Link href='#gallery'>
              <DropdownMenuItem className='text-2xl tracking-wide font-medium'>
                GALLERY
              </DropdownMenuItem>
            </Link>

            <Link href='#comments' >
              <DropdownMenuItem className='text-2xl tracking-wide font-medium'>
                FB COMMENTS
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
};

export default MobileNav;
