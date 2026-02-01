"use client";

import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: FaGithub, href: "https://github.com/sameul-islam", label: "GitHub", color: "hover:text-slate-300" },
    { icon: FaLinkedin, href: "https://www.linkedin.com/in/sameul-islam/", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: FaFacebook, href: "https://www.facebook.com/share/1EvVk8tm8E/", label: "Facebook", color: "hover:text-blue-500" },
    { icon: FaWhatsapp, href: "https://wa.me/8801320694376", label: "WhatsApp", color: "hover:text-emerald-400" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Premium Background - Matching Testimonials Style */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-[#0b1220] via-[#0e1629] to-[#020617]" />
      
      {/* Animated Grid Pattern */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 128, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 128, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
        }}
      />

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      {/* Top Border Glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-emerald-500/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Brand Section - Takes more space */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5 space-y-5"
            >
              {/* Logo/Name with gradient */}
              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-white via-emerald-100 to-cyan-100 bg-clip-text text-transparent font-Outfit">
                  Sameul Islam
                </h2>
                <p className="text-emerald-400 font-medium text-sm sm:text-base">
                  Full-Stack Web Developer
                </p>
              </div>

              {/* Brief Description */}
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-md">
                Crafting scalable, production-ready web solutions with modern technologies. 
                Specialized in React, Next.js, and full-stack development.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 text-sm text-slate-400">
                <a 
                  href="mailto:sameulislam479@gmail.com" 
                  className="flex items-center gap-2 hover:text-emerald-400 transition-colors group"
                >
                  <HiMail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span>sameulislam479@gmail.com</span>
                </a>
                <div className="flex items-center gap-2">
                  <HiLocationMarker className="w-4 h-4" />
                  <span>Dhaka,Bangladesh</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <h3 className="text-white font-semibold text-lg mb-4 sm:mb-6">
                Quick Links
              </h3>
              <ul className="space-y-2.5">
                {navLinks.map((link, index) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <a
                      href={link.href}
                      className="text-slate-400 hover:text-emerald-400 transition-all duration-300 inline-flex items-center gap-2 group text-sm sm:text-base"
                    >
                      <span className="w-0 h-px bg-emerald-400 group-hover:w-4 transition-all duration-300" />
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Social & CTA */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-4 space-y-6"
            >
              <div>
                <h3 className="text-white font-semibold text-lg mb-4 sm:mb-6">
                  Connect With Me
                </h3>
                
                {/* Social Icons Grid */}
                <div className="grid grid-cols-4 gap-3 mb-6">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`w-12 h-12 sm:w-14 sm:h-14 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex items-center justify-center text-slate-400 ${social.color} transition-all duration-300 group`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-emerald-700 to-cyan-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 hover:scale-105 group w-full sm:w-auto text-sm sm:text-base"
              >
                Start a Project
                <svg 
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </motion.div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center sm:text-left"
            >
              © {currentYear} <span className="text-slate-400 font-medium">Sameul Islam</span>. All rights reserved.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-4 sm:gap-6"
            >
              <a 
                href="#privacy" 
                className="hover:text-emerald-400 transition-colors"
              >
                Privacy
              </a>
              <span className="text-slate-700">•</span>
              <a 
                href="#terms" 
                className="hover:text-emerald-400 transition-colors"
              >
                Terms
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
