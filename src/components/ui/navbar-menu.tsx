"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  link, // Add link to handle routing
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  link?: string; // Optional link for routing
  children?: React.ReactNode;
}) => {
  return (
    <div
      onMouseEnter={() => setActive(item)}
      onMouseLeave={() => setActive(null)}
      className="relative"
    >
      {link ? (
        <Link href={link}>
          <motion.p
            transition={{ duration: 0.3 }}
            className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
          >
            {item}
          </motion.p>
        </Link>
      ) : (
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer text-black hover:opacity-[0.9] dark:text-white"
        >
          {item}
        </motion.p>
      )}
      {active === item && children && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          <div className="absolute top-[calc(100%_+_1.7rem)] left-1/2 transform -translate-x-1/2">
            <motion.div
              transition={transition}
              layoutId="active" // layoutId ensures smooth animation
              className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
            >
              <motion.div
                layout // layout ensures smooth animation
                className="w-max h-full p-4"
              >
                {children}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2] bg-white shadow-input flex justify-center space-x-4 px-8 py-6 "
    >
      {children}
    </nav>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black"
    >
      {children}
    </Link>
  );
};
