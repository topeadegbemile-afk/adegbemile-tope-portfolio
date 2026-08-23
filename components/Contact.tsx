"use client";

import { motion } from "framer-motion";

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

        <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
          I'm open to web development opportunities, freelance projects,
          collaborations, and interesting products.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="mailto:your-email@example.com"
            className="rounded-full bg-blue-500 px-6 py-3 font-semibold transition hover:bg-blue-600"
          >
            Email Me
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
          >
            GitHub
          </a>

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
          >
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}