"use client";

import Hero from "@/components/Hero/page";
import Projects from "@/components/Projects/page";
import About from "@/components/About/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects/>
      <About/>
    </main>
  );
}