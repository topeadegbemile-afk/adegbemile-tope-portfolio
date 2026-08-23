"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const tech = [
  { name: "Next.js", x: -120, y: -70 },
  { name: "React", x: 120, y: -50 },
  { name: "Laravel", x: -100, y: 90 },
  { name: "Node.js", x: 110, y: 80 },
];

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-24">
      <div className="grid w-full items-center gap-14 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-cyan-400">Hello, I'm</p>

          <h1 className="whitespace-nowrap text-3xl font-bold sm:text-4xl md:text-7xl">
  Adegbemile Tope
</h1>

<h2 className="mt-4 text-xl font-semibold leading-relaxed text-slate-300 sm:text-2xl md:text-3xl">
  Full-Stack Web Developer & Motion Designer
</h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-400">
            I build responsive web applications, backend APIs, and engaging
            digital experiences using Next.js, Laravel, Node.js, and modern web technologies.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-blue-500 px-6 py-3 font-semibold transition hover:bg-blue-600"
            >
              View Projects
            </a>

           <a
  href="/Adegbemile-Tope-CV.docx"
  download
  className="rounded-full border border-white/10 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
>
  Download CV
</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto flex h-[420px] w-[420px] items-center justify-center"
        >
          <div className="absolute h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

          <div className="relative h-72 w-72 overflow-hidden rounded-full border border-cyan-400/40 shadow-[0_0_40px_rgba(34,211,238,0.35)]">
            <Image
              src="/profile/tope.d_adegbemile.png"
              alt="Adegbemile Tope"
              fill
              className="object-cover"
              priority
            />
          </div>

          {tech.map((item, index) => (
            <motion.div
              key={item.name}
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3 + index,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: `calc(50% + ${item.x}px)`,
                top: `calc(50% + ${item.y}px)`,
              }}
              className="absolute rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm backdrop-blur-xl"
            >
              {item.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}