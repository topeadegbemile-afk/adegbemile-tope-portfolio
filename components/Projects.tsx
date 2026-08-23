"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12">
        <p className="mb-3 text-cyan-400">Featured Projects</p>

        <h2 className="text-4xl font-bold">
          Things I've built
        </h2>

        <p className="mt-4 max-w-2xl text-slate-400">
          A selection of projects I've worked on while developing my
          full-stack web development skills.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl"
          >
            <div className="relative h-48 overflow-hidden">
 <Image
  src={project.image}
  alt={project.title}
  fill
  className="object-cover transition duration-500 group-hover:scale-105"
/>


</div>

            <div className="p-6">
              <a href={`/projects/${project.slug}`}>
  <h3 className="text-xl font-bold transition hover:text-cyan-400">
    {project.title}
  </h3>
</a>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-4">
                <a
                  href={project.demo}
                  className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  Live Demo →
                </a>

                <a
                  href={project.github}
                  className="text-sm font-semibold text-slate-300 hover:text-white"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}