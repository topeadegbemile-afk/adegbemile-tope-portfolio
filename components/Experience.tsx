"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Fluidé Homes",
    role: "Motion Designer",
    period: "Professional Experience",
    description:
      "Created motion graphics, product animations, visual content, and digital experiences for marketing and brand communication.",
  },
  {
    company: "Freelance / Client Projects",
    role: "Web Developer",
    period: "Full-Stack Development",
    description:
      "Built web applications, REST APIs, authentication systems, dashboards, and database-driven applications using modern web technologies.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12">
        <p className="mb-3 text-cyan-400">Experience</p>

        <h2 className="text-4xl font-bold">
          Where I've been building
        </h2>

        <p className="mt-4 max-w-2xl text-slate-400">
          My professional experience across motion design and web development.
        </p>
      </div>

      <div className="relative ml-3 border-l border-white/10">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.company}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="relative mb-10 pl-8"
          >
            <div className="absolute -left-[7px] top-2 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-sm text-cyan-400">
                {experience.period}
              </p>

              <h3 className="mt-2 text-2xl font-bold">
                {experience.role}
              </h3>

              <h4 className="mt-1 text-lg text-slate-300">
                {experience.company}
              </h4>

              <p className="mt-4 leading-7 text-slate-400">
                {experience.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}