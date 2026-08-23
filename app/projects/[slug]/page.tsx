import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0B1120] text-white">
      {/* Back button */}
      <div className="mx-auto max-w-6xl px-6 pt-8">
        <Link
          href="/#projects"
          className="text-sm text-slate-400 transition hover:text-cyan-400"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <p className="mb-4 text-cyan-400">Featured Project</p>

        <h1 className="max-w-4xl text-4xl font-bold md:text-6xl">
          {project.title}
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-400">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-8 flex flex-wrap gap-3">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300"
            >
              {technology}
            </span>
          ))}
        </div>
      </section>

      {/* Project Image */}
      <section className="mx-auto max-w-6xl px-6">
        <Image
          src={project.image}
          alt={project.title}
          width={1400}
          height={800}
          className="w-full rounded-3xl border border-white/10 shadow-2xl"
        />
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div>
          <p className="mb-3 text-cyan-400">01</p>

          <h2 className="text-3xl font-bold">The Challenge</h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            {project.challenge}
          </p>
        </div>

        <div className="mt-16">
          <p className="mb-3 text-cyan-400">02</p>

          <h2 className="text-3xl font-bold">The Solution</h2>

          <p className="mt-5 text-lg leading-8 text-slate-400">
            {project.solution}
          </p>
        </div>

        <div className="mt-16">
          <p className="mb-3 text-cyan-400">03</p>

          <h2 className="text-3xl font-bold">Key Features</h2>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {project.features.map((feature) => (
              <div
                key={feature}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-slate-300"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-16 flex flex-wrap gap-4">
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-blue-500 px-7 py-3 font-semibold transition hover:bg-blue-600"
          >
            Live Demo →
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-white/10 px-7 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
          >
            GitHub →
          </a>
        </div>
      </section>
    </main>
  );
}