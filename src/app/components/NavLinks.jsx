"use client";
import React, { useState } from "react";
import { NavData } from "../constants/Index";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const NavLinks = ({ className, onClick }) => {
  const [hoverIndex, setHoverIndex] = useState(null);

  return (
    <div className={className}>
      {NavData.map(({ _id, title, href }) => (
        <Link
          key={_id}
          href={href}
          className="relative mx-3 my-2 rounded-xl px-3 py-2 text-base text-white transition-colors"
          onMouseEnter={() => setHoverIndex(_id)}
          onMouseLeave={() => setHoverIndex(null)}
          onClick={onClick} // Close menu on click
        >
          <AnimatePresence>
            {hoverIndex === _id && (
              <motion.span
                className="absolute inset-0 rounded-full bg-[#2C66C3]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
              />
            )}
          </AnimatePresence>
          <span className="relative z-10">{title}</span>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
