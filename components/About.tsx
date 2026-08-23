"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="mx-auto max-w-6xl px-6 py-24"
    >
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-3 text-cyan-400">About Me</p>

          <h2 className="mb-6 text-4xl font-bold">
            Turning ideas into real digital products.
          </h2>

          <p className="mb-5 leading-8 text-slate-400">
            I'm a Full-Stack Web Developer with a background in Motion Design.
            I enjoy building responsive web applications, REST APIs, and
            user-focused interfaces that solve real business problems.
          </p>

          <p className="leading-8 text-slate-400">
            My experience in animation and design helps me create applications
            that are not only functional but also visually polished and easy to
            use.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-3xl font-bold text-cyan-400">8+</h3>
              <p className="text-slate-400">Years in Motion Design</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">3+</h3>
              <p className="text-slate-400">Full-Stack Projects</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">Node.js</h3>
              <p className="text-slate-400">Backend Development</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">Laravel</h3>
              <p className="text-slate-400">Web Applications</p>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}