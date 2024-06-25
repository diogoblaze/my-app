"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name?: string; // Make name optional since we might have an image instead
    link: string;
    icon?: JSX.Element;
    image?: string; // New optional property for image URL
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-white border-opacity-50 rounded-full bg-black text-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link-${idx}`}
            href={navItem.link}
            className={cn(
              "text-white items-center flex space-x-1 text-white-500 hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-red-500 hover:to-yellow-500 px-4"
            )}
          >
            {navItem.image ? (
              <img src={navItem.image} alt={navItem.name || 'Navigation Item'} className="h-8 w-8" /> // Render image if available
            ) : (
              <>
                <span className="block sm:hidden">{navItem.icon}</span>
                <span className="hidden sm:block text-sm">{navItem.name}</span>
              </>
            )}
          </Link>
        ))}

    <Link href="#contactos"className="border text-sm font-medium relative border-white/[0.2] text-white px-4 py-2 rounded-full">
      <span>Contacta-nos</span>
      <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent  h-px" />
      <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-red-500 to-transparent h-px w-3/4 blur-sm" />
      <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-red-500 to-transparent h-px w-3/4" />
      <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px w-1/4 blur-sm" />
      <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px w-1/4" />
    </Link>
    
      </motion.div>
    </AnimatePresence>
  );
};
