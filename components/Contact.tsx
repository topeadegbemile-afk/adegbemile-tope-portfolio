"use client";

import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl md:p-12"
      >
        <p className="mb-3 text-cyan-400">Get In Touch</p>

        <h2 className="text-4xl font-bold">
          Let's build something together.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-slate-400 leading-8">
          I'm open to web development opportunities, freelance projects,
          collaborations, and interesting products.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {/* Email */}
          <a
            href="mailto:tope@adegbemile.com"
            className="flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 font-semibold transition hover:bg-blue-600"
          >
            <HiOutlineMail className="text-xl" />
            Email Me
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/topeadegbemile-afk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <SiGithub className="text-lg" />
            GitHub
          </a>

          {/* LinkedIn */}
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 font-semibold text-slate-400 transition hover:border-cyan-400 hover:text-cyan-400"
          >
            <FaLinkedin className="text-lg" />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
