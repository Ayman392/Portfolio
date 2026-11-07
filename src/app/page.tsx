import Hero from "@/components/Hero/page";
import About from "@/components/About/page";
import Projects from "@/components/Projects/page";
import Skills from "@/components/Skills/page";
import Contact from "@/components/Contact/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact/>
    </main>
  );
}