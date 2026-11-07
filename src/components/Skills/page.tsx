"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";

// Add or edit your skills here
const groups = [
  {
    title: "Frontend",
    color: "from-sky-500 to-indigo-600",
    skills: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Languages",
    color: "from-amber-400 to-orange-600",
    skills: ["JavaScript", "TypeScript", "Python", "PHP"],
  },
  {
    title: "Backend & data",
    color: "from-emerald-500 to-teal-600",
    skills: ["Express.js", "Laravel", "Supabase", "MongoDB"],
  },
  {
    title: "Tools & AI",
    color: "from-rose-500 to-pink-600",
    skills: ["Git", "GitHub", "VS Code", "TensorFlow"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-28">
      <h2 className="text-4xl font-bold tracking-tighter text-white md:text-5xl">
        Skills
      </h2>
      <p className="mt-3 text-white/60">Tools and technologies I work with.</p>

      <motion.div
        variants={stagger()}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-12 grid gap-8 md:grid-cols-2"
      >
        {groups.map((group) => (
          // Outer box fades in, inner list has the glass look and hover
          <motion.div key={group.title} variants={fadeUp}>
            {/* Small header above the list, like iOS Settings */}
            <p className="mb-2 ml-4 text-xs font-medium uppercase tracking-wider text-white/40">
              {group.title}
            </p>

            <ul className="divide-y divide-white/10 overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl transition duration-300 hover:border-white/20">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-4 px-5 py-3.5 transition hover:bg-white/5"
                >
                  {/* Colored tile with the first letter */}
                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-[10px] bg-gradient-to-br ${group.color} text-sm font-semibold text-white`}
                  >
                    {skill[0]}
                  </span>
                  <span className="text-white">{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}