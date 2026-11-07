"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger, viewport } from "@/lib/motion";

// Get a free key at web3forms.com (see the steps after the code), then paste it here
const ACCESS_KEY = "YOUR_ACCESS_KEY_HERE";

const email = "ayman1nasir@gmail.com";

// The rows in the list. Change or remove any of them
const links = [
  {
    label: "Email",
    value: email,
    href: `mailto:${email}`,
    icon: <Mail size={16} />,
    color: "from-sky-500 to-blue-600",
    canCopy: true,
  },
  {
    label: "Phone",
    value: "+880 1760-977865",
    href: "tel:+8801760977865",
    icon: <Phone size={16} />,
    color: "from-green-500 to-emerald-600",
    canCopy: false,
  },
  {
    label: "GitHub",
    value: "github.com/Ayman392",
    href: "https://github.com/Ayman392",
    icon: "G",
    color: "from-neutral-500 to-neutral-700",
    canCopy: false,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aymannasir1",
    href: "https://www.linkedin.com/in/aymannasir1/",
    icon: "in",
    color: "from-blue-600 to-sky-700",
    canCopy: false,
  },
];

// Shared look for the form fields
const fieldStyle =
  "w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 outline-none transition focus:border-white/30 focus:bg-white/10";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [copied, setCopied] = useState(false);

  // Copy the email address
  async function copyEmail() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  // Send the form to Web3Forms
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-28">
      <h2 className="text-4xl font-bold tracking-tighter text-white md:text-5xl">
        Contact
      </h2>
      <p className="mt-3 text-white/60">
        Have a project or an opportunity in mind? Send me a message.
      </p>

      <motion.div
        variants={stagger()}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="mt-12 grid gap-8 md:grid-cols-5"
      >
        {/* Left: contact list, like iOS Settings */}
        <motion.div variants={fadeUp} className="md:col-span-2">
          <p className="mb-2 ml-4 text-xs font-medium uppercase tracking-wider text-white/40">
            Reach me
          </p>

          <ul className="divide-y divide-white/10 overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl">
            {links.map((link) => (
              <li key={link.label} className="flex items-center transition hover:bg-white/5">
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex flex-1 items-center gap-4 px-5 py-4"
                >
                  {/* Colored tile */}
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-gradient-to-br ${link.color} text-sm font-semibold text-white`}
                  >
                    {link.icon}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-white/40">{link.label}</span>
                    <span className="block truncate text-sm text-white">{link.value}</span>
                  </span>
                </a>

                {link.canCopy ? (
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="mr-4 shrink-0 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-sky-400 transition hover:bg-white/20"
                  >
                    {copied ? "Copied" : "Copy"}
                  </button>
                ) : (
                  <ArrowUpRight size={16} className="mr-5 shrink-0 text-white/30" />
                )}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right: the form */}
        <motion.div variants={fadeUp} className="md:col-span-3">
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:p-8"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/40">
                Name
              </label>
              <input id="name" name="name" type="text" required placeholder="Your name" className={fieldStyle} />
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/40">
                Email
              </label>
              <input id="email" name="email" type="email" required placeholder="you@example.com" className={fieldStyle} />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-white/40">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="How can I help?"
                className={`${fieldStyle} resize-none`}
              />
            </div>

            <Button
              type="submit"
              size="lg"
              disabled={status === "sending"}
              className="h-12 w-full rounded-full bg-white text-black hover:bg-white/90"
            >
              <Send size={16} />
              {status === "sending" ? "Sending..." : "Send message"}
            </Button>

            {status === "success" && (
              <p className="text-center text-sm text-emerald-400">
                Message sent. Thank you, I&apos;ll reply soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-center text-sm text-rose-400">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}