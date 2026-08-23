import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B1120] text-white">
      <Navbar />

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />
        <div className="absolute right-10 bottom-20 h-80 w-80 rounded-full bg-cyan-400/15 blur-[140px]" />
      </div>

      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}