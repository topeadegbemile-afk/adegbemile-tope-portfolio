import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "@/data/projects";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0B1120] text-white">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <Image
          src={project.image}
          alt={project.title}
          width={1200}
          height={700}
          className="rounded-3xl border border-white/10"
        />

        <h1 className="mt-10 text-5xl font-bold">{project.title}</h1>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          {project.description}
        </p>

        <div className="mt-10">
          <h2 className="text-2xl font-bold">The Challenge</h2>
          <p className="mt-3 text-slate-400">{project.challenge}</p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold">My Solution</h2>
          <p className="mt-3 text-slate-400">{project.solution}</p>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-bold">Key Features</h2>

          <ul className="mt-4 space-y-3">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-slate-300"
              >
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-12 flex gap-4">
          <a
            href={project.demo}
            className="rounded-full bg-blue-500 px-6 py-3 font-semibold hover:bg-blue-600"
          >
            Live Demo
          </a>

          <a
            href={project.github}
            className="rounded-full border border-white/10 px-6 py-3 font-semibold hover:border-cyan-400"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}