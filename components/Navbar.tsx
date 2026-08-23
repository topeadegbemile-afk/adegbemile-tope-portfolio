"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-4 left-1/2 z-50 w-[92%] max-w-6xl -translate-x-1/2 rounded-full border border-white/10 bg-white/5 px-6 py-4 backdrop-blur-xl"
      >
        <div className="flex items-center justify-between">
          <a href="#" className="font-bold tracking-wide text-white">
            Adegbemile Tope
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="transition hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="text-white md:hidden"
          >
            {open ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </motion.nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-24 left-1/2 z-40 w-[92%] max-w-md -translate-x-1/2 rounded-3xl border border-white/10 bg-[#111827]/95 p-6 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-slate-300 transition hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </>
  );
}