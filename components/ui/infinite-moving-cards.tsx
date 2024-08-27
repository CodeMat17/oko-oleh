"use client";

import { cn } from "@/lib/utils";
import { Facebook } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string;
    name: string;
    img: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow" | "verySlow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "1600s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "1600s");
      } else if (speed === "slow") {
        containerRef.current.style.setProperty("--animation-duration", "1600s");
      } else if (speed === "verySlow") {
        containerRef.current.style.setProperty("--animation-duration", "1600s"); // Slower scrolling speed
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ",
        className
      )}>
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}>
        {items.map((item) => (
          <li
            key={item.name}
            className='w-[350px] max-w-full relative rounded-2xl flex-shrink-0 px-8 py-5 md:w-[450px] border bg-slate-600/10 dark:bg-black/50'
            // style={{
            //   background:
            //     "linear-gradient(180deg, var(--slate-800), var(--slate-500))",
            // }}
          >
            <blockquote>
              <div
                aria-hidden='true'
                className='user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)] '></div>
              <Facebook className="mb-2 text-blue-500 w-8 h-8" />
              <span className='relative z-20 leading-[1.6] text-gray-700 dark:text-gray-100 font-normal'>
                {item.quote}
              </span>
              <div className='relative z-20 mt-4 flex flex-row items-center'>
                <div className='flex items-center gap-2'>
                  <Image alt="" priority width={20} height={20} src={item.img} className="w-[60px] aspect-square rounded-full" />
                  <span className='text-lg leading-[1.6] text-gray-600 dark:text-gray-400 font-normal'>
                    {item.name}
                  </span>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
