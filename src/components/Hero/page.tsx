"use client";

import { motion } from "framer-motion";
import { Button as HeroButton } from "@heroui/react";
import { Button } from "@/components/ui/button";

// Change these to your own skills
const tech = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"];

// Scroll smoothly to a section on the page
function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

// Fade up from below, one element after another
function fadeIn(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay },
  };
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-28 text-center"
    >
      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-blue-600/40 blur-[140px]"
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-40 top-20 h-[600px] w-[600px] rounded-full bg-orange-500/40 blur-[140px]"
          animate={{ x: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Fade into the page at the bottom */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Everything above the glow */}
      <div className="relative z-10 flex w-full flex-col items-center">
        {/* Badge */}
        <motion.div
          {...fadeIn(0)}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/70 backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
          Full-Stack Developer
        </motion.div>

        {/* Name */}
        <motion.h1
          {...fadeIn(0.1)}
          className="max-w-4xl bg-gradient-to-b from-white to-white/50 bg-clip-text text-6xl font-bold leading-[1.02] tracking-tighter text-transparent md:text-8xl"
        >
          Ayman Nasir Uddin
        </motion.h1>

        {/* Intro line: change this to your own words */}
        <motion.p
          {...fadeIn(0.2)}
          className="mt-6 max-w-xl text-lg font-medium tracking-tight text-white/60 md:text-xl"
        >
          I build fast, modern web apps, from the database to the interface.
        </motion.p>

        {/* Two buttons */}
        <motion.div
          {...fadeIn(0.3)}
          className="mt-10 flex flex-col gap-3 sm:flex-row"
        >
          <HeroButton
            variant="primary"
            size="lg"
            className="h-12 rounded-full bg-white! px-7 text-black!"
            onPress={() => scrollTo("projects")}
          >
            View my projects
          </HeroButton>

          <Button
            variant="outline"
            size="lg"
            className="h-12 rounded-full border-white/20 bg-white/5 px-7 text-white backdrop-blur hover:bg-white/10"
            onClick={() => scrollTo("contact")}
          >
            Contact me
          </Button>
        </motion.div>

        {/* Tech row */}
        <motion.div
          {...fadeIn(0.4)}
          className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-white/40"
        >
          {tech.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </motion.div>

        {/* Window card peeking up from the bottom */}
        <motion.div
          {...fadeIn(0.5)}
          className="mt-14 w-full max-w-3xl overflow-hidden rounded-t-2xl border border-b-0 border-white/15 bg-white/5 backdrop-blur-md"
        >
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-400" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
            <span className="ml-3 text-xs text-white/40">portfolio.tsx</span>
          </div>
          <div className="space-y-3 p-6">
            <div className="h-3 w-2/3 rounded bg-white/15" />
            <div className="h-3 w-1/2 rounded bg-white/10" />
            <div className="h-3 w-3/4 rounded bg-white/10" />
            <div className="h-3 w-2/5 rounded bg-white/15" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}