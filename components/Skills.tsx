"use client";

import { motion } from "framer-motion";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiPhp,
  SiMongodb,
  SiMysql,
  SiGit,
  SiGithub,
  SiVercel,
  SiVscodium,
  SiPostman,
  SiPostgresql,
  SiFigma,
} from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "HTML5", icon: SiHtml5 },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express", icon: SiExpress },
      { name: "Laravel", icon: SiLaravel },
      { name: "PHP", icon: SiPhp },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "REST APIs", icon: SiExpress },
      { name: "Authentication", icon: SiExpress },
      { name: "Postgresql", icon: SiPostgresql },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "VS Code", icon: SiVscodium },
      { name: "Postman", icon: SiPostman },
      { name: "Figma", icon: SiFigma },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="mb-3 text-cyan-400">Skills & Technologies</p>

        <h2 className="text-4xl font-bold">Tools I build with</h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-400">
          Technologies I use to build responsive websites, backend APIs, and
          modern web applications.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {skillGroups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
          >
            <h3 className="mb-6 text-xl font-bold text-cyan-400">
              {group.title}
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {group.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-cyan-400/5"
                  >
                    <Icon className="text-xl text-slate-300 transition group-hover:text-cyan-400" />

                    <span className="text-sm text-slate-300 transition group-hover:text-white">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}