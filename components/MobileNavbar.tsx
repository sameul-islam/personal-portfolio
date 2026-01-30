"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { playSound } from "@/app/hooks/useSound";
import { SiMongodb } from "react-icons/si";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [visible, setVisible] = useState(true);
  const lastScroll = useRef(0);




 useEffect(() => {
  const onHashChange = () => setOpen(false);
  window.addEventListener("hashchange", onHashChange);
  return () => window.removeEventListener("hashchange", onHashChange);
}, []);



  // Body Scroll Lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  },[open]);


  
  useEffect(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);


// Navbar hide / show on scroll 
const handleScroll = () => {
  const currentScroll = window.scrollY;

  // Navbar show / hide
  setVisible(currentScroll < lastScroll.current || currentScroll < 60);
  lastScroll.current = currentScroll;

  // Active section detect
  navItems.forEach((item) => {
    const section = document.querySelector(item.href);
    if (!section) return;

    const rect = section.getBoundingClientRect();
    if (rect.top <= 120 && rect.bottom >= 120) {
      setActive(item.href);
    }
  });
};





  // Toggle with sound

  const toggleMenu = () => {
    playSound(open ? "/sounds/nav-close.wav" : "/sounds/nav-open.wav");
    setOpen(!open);
  };

  return (
    <motion.div
    initial={{ y: 0 }}
    animate={{ y: visible ? 0 : -120 }}
    transition={{ duration: 0.35 }}
    className="md:hidden fixed top-0 left-0 z-50 w-full">
      {/* Top Bar */}
        <div className="mx-auto px-5">
          <div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-4">
            
            {/* Logo */}
            <Link
              href="#home"
              className="text-base font-semibold tracking-wide bg-linear-to-r from-[#00C853] via-[#14F1A6] to-[#38BDF8] bg-clip-text text-transparent"
            >
              <span className="flex items-center"><SiMongodb size={20} className="text-green-400"/>SI.dev</span>
            </Link>

            {/* Hamburger */}
            <button
              onClick={toggleMenu}
              className="relative flex h-4 w-7 flex-col justify-between"
            >
              <span
                className={`h-0.5 w-full bg-white transition-all duration-300 ${
                  open ? "translate-y-1.75 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-white transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-full bg-white transition-all duration-300 ${
                  open ? "-translate-y-1.75 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed left-0 top-24 z-40 w-full overflow-hidden"
          >
            <div className="mx-auto px-5">
              <div className="rounded-xl border border-white/10 bg-[#0B0F1A]/95 backdrop-blur-xl">
                <nav className="flex flex-col divide-y divide-white/10">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={toggleMenu}
                      className={`block px-6 py-5 text-sm transition ${active === item.href ? "text-[#14F1A6]": "text-white/70 hover:text-white"}`}
                    >
                      {item.label}
                    </Link>
                  ))}

                  {/* Resume */}
                  <Link
                    href="/sameul_islam_resume.pdf"
                    target="_blank"
                    className="px-6 py-5 text-sm font-medium text-[#14F1A6]"
                  >
                    Resume
                  </Link>
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MobileNavbar;
