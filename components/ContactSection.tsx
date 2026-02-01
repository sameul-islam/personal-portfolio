"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { RiMailLine, RiMapPinLine, RiPhoneLine } from "react-icons/ri";
import { playSound } from "@/app/hooks/useSound";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
     await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
    {
     from_name: formData.name,
     from_email: formData.email,
     message: formData.message,
    },
     process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
   );

      playSound("/sounds/thanks.wav");
      setStatus({ type: "success", message: "Your message has been sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus({ type: "error", message: "Oops! Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Background - MongoDB-inspired grid */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-[#0b1220] via-[#0e1629] to-[#011107]" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 128, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 128, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at center, black 35%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 35%, transparent 75%)",
        }}
      />

      <div className="w-full mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Get in Touch
            </span>
        </motion.div>
        
        {/* Content */}
        <div className="w-full lg:max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
          {/* Left Column - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >

          <div className="space-y-6">

            <p className="text-white/70 text-base font-Outfit max-w-2xl leading-relaxed">
            I'm available for freelance work or project collaborations. You can reach me through the details below or send a message using the form.
          </p>
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-linear-to-br from-emerald-600 to-cyan-600 text-white text-lg sm:text-xl shadow-lg">
                <RiPhoneLine />
              </div>
              <div className="text-white/90 font-medium font-Open text-base sm:text-lg">
               <a href="tel:+8801320694376">+880 1320-694376</a> 
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-linear-to-br from-emerald-600 to-cyan-600 text-white text-lg sm:text-xl shadow-lg">
                <RiMailLine />
              </div>
              <div className="text-white/90 font-medium font-Outfit text-base sm:text-lg">
               <a href="mailto:sameulislam479@gmail.com">sameulislam479@gmail.com</a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-linear-to-br from-emerald-600 to-cyan-600 text-white text-lg sm:text-xl shadow-lg">
                <RiMapPinLine />
              </div>
              <div className="text-white/90 font-medium font-Outfit text-base sm:text-lg">
                Dhaka, Bangladesh
              </div>
            </div>
          </div>
        </motion.div>


         {/* Contact Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full bg-linear-to-br from-slate-900/90 via-slate-800/70 to-slate-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-12 lg:p-8 xl:p-12 shadow-2xl max-w-2xl mx-auto flex flex-col gap-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-white/10 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 transition resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="mt-2 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/40 border border-emerald-400 text-white font-semibold text-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* Status Message */}
          {status && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className={`mt-4 text-center ${
                status.type === "success" ? "text-emerald-400" : "text-rose-400"
              }`}
            >
              {status.message}
            </motion.p>
          )}
        </motion.form>
        </div>

       
      </div>
    </section>
  );
}











