"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { fadeUp, stagger, viewport } from "@/lib/motion";
import Image from "next/image";

// Add or edit your projects here
const projects = [
  {
    name: "Oikyo",
    description:
      "A community platform where people create, discover and join social service events across Bangladesh, with an event map, calendar and list views, and an owner-only dashboard.",
    tech: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "HeroUI",
      "shadcn/ui",
      "Better Auth",
      "Leaflet",
    ],
    github:
      "https://github.com/Ayman392/Oikyo-Social-Development-Events-Platform-Client",
    live: "https://oikyo-psi.vercel.app",
    image: "/Assets/oikyo.png", // set to "" if you don't have a picture yet
    gradient: "from-sky-500 to-indigo-600",
  },
  {
    name: "Bazar Dor",
    description:
      "A Bengali market-price application for exploring daily prices, comparing markets, and tracking price changes.",
    tech: [], // add your tech here, for example ["Next.js", "TypeScript"]
    github: "https://github.com/Ayman392/Bazar-Dor",
    live: "", // add a live link here if you have one
    image: "/Assets/bazar-dor.png",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    name: "Fitlog",
    description: "A workout tracking app.",
    tech: [], // add your tech here
    github: "https://github.com/Ayman392/Fitlog",
    live: "", // add a live link here if you have one
    image: "/Assets/fitlog.png",
    gradient: "from-orange-500 to-rose-600",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-28">
      <h2 className="text-4xl font-bold tracking-tighter text-white md:text-5xl">
        Projects
      </h2>
      <p className="mt-3 text-white/60">A few things I&apos;ve built.</p>

      <motion.ul
        variants={stagger()}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-12 grid gap-6 md:grid-cols-2"
      >
        {projects.map((project, index) => (
          <motion.li
            key={project.name}
            variants={fadeUp}
            className={index === 0 ? "md:col-span-2" : ""}
          >
            <article className="h-full overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:-translate-y-1.5 hover:border-white/20">
              {/* Banner: the project picture, or a gradient if there is none */}
              <div
                className={`relative overflow-hidden bg-gradient-to-br ${project.gradient} ${
                  index === 0 ? "h-56 md:h-72" : "h-44 md:h-56"
                }`}
              >
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.name} landing page`}
                    fill
                    sizes="(min-width: 1024px) 1024px, 100vw"
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <div className="flex h-20 w-20 items-center justify-center rounded-[22px] bg-white/20 text-3xl font-bold text-white shadow-lg backdrop-blur">
                      {project.name[0]}
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-white">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/60">
                      {project.description}
                    </p>
                  </div>

                  {/* Like the App Store "GET" button */}
                  <a
                    href={project.live || project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 rounded-full bg-white/10 px-5 py-1.5 text-sm font-semibold text-sky-400 transition hover:bg-white/20"
                  >
                    View
                  </a>
                </div>

                {/* Tech tags (hidden when the list is empty) */}
                {project.tech.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((name) => (
                      <span
                        key={name}
                        className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50"
                      >
                        {name}
                      </span>
                    ))}
                  </div>
                )}

                {/* Source link, only when the View button goes to a live site */}
                {project.live && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1 text-sm text-white/50 transition hover:text-white"
                  >
                    Source code <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </article>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
