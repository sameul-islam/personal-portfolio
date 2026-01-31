"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GiLeafSkeleton } from "react-icons/gi";
import { SiMongodb } from "react-icons/si";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("");

  const ticking = useRef(false);

  const detectActiveSection = () => {
  navItems.forEach((item) => {
    const section = document.querySelector(item.href);
    if (!section) return;

    const rect = section.getBoundingClientRect();

    if (rect.top <= 120 && rect.bottom >= 120) {
      setActive(item.href);
    }
  });
};

const onScroll = () => {
  if (!ticking.current) {
    window.requestAnimationFrame(() => {
      detectActiveSection();
      ticking.current = false;
    });
    ticking.current = true;
  }
};

useEffect(() => {
  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, []);







  // let ticking = false;
  // const onScroll = () => {
  //   if (!ticking) {
  //     window.requestAnimationFrame(() => {
  //       ticking = false;
  //     })
  //     ticking = true;
  //   }
  // }



  //   useEffect(() => {
  //     const handler = () => {
  //       navItems.forEach((item) => {
  //         const section = document.querySelector(item.href);
  //         if (!section) return;
  
  //         const rect = section.getBoundingClientRect();
  //         if (rect.top <= 120 && rect.bottom >= 120) {
  //           setActive(item.href);
  //         }
  //       });
  //     };
  
  //     window.addEventListener("scroll", handler);
  //     return () => window.removeEventListener("scroll", handler);
  //   }, []);


  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      {/* Glass Container */}
      <div className=" hidden md:block mx-auto max-w-7xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 py-4">
          
          {/* Logo */}
          <Link
            href="#home"
            className="text-lg font-semibold tracking-wide bg-linear-to-r from-[#00C853] via-[#14F1A6] to-[#38BDF8] bg-clip-text text-transparent"
          >
           <span className="flex items-center"><SiMongodb size={20} className="text-green-400"/>SI.dev</span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`relative text-sm font-medium group  transition ${ active === item.href ? "text-[#14F1A6]" : "text-white/70 hover:text-white"}`}
              >
                {item.label}

                {/* Subtle underline */}
                 <span className='absolute left-0 -bottom-1 h-px w-full bg-[#14F1A6] scale-x-0 origin-right transition-transform duration-300 ease-out group-hover:scale-x-100 group-hover:origin-left'/>
              </Link>
            ))}
          </nav>

          {/* Resume Button */}
          <Link
            href="/sameul_islam_resume.pdf"
            target="_blank"
            className="hidden md:inline-flex items-center rounded-md border border-[#14F1A6]/40 px-4 py-2 text-sm font-medium text-[#14F1A6] transition-all hover:bg-[#14F1A6]/10"
          >
            Resume
          </Link>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
