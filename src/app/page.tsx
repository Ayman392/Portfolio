"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger, viewport } from "@/lib/motion";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-6">
      <section className="flex h-screen items-center text-4xl">Scroll down</section>
      <motion.ul
        variants={stagger()}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="space-y-6 py-40 text-3xl"
      >
        <motion.li variants={fadeUp}>First</motion.li>
        <motion.li variants={fadeUp}>Second</motion.li>
        <motion.li variants={fadeUp}>Third</motion.li>
      </motion.ul>
      <section className="h-screen" />
    </main>
  );
}