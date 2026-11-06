"use client";

import { useState } from "react";
// We can remove the HeroUI Button import since you are using your custom button now
import { AlignLeft, Mail, Menu, X } from "lucide-react";
import BreezyButton from "../ui/breezy-button/breezy-button";


// Change these to match your own sections
const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Resume", href: "#resume" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll to the contact section when the button is pressed
  function goToContact() {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  return (
    <nav
      className="fixed top-5 left-1/2 z-50 -translate-x-1/2"
      style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
    >
      {/* Full width on mobile, exactly 704px on desktop */}
      <div className="w-[calc(100vw-2rem)] rounded-[24px] border border-white/20 bg-black/30 shadow-[0_8px_32px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-[28px] backdrop-saturate-150 md:w-[704px]">
        <header className="flex h-[50px] items-center justify-between pr-[9px] pl-[10px]">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5">
            {/* Tile with a thin blue-to-orange edge */}
            <div className="rounded-lg bg-gradient-to-br from-blue-500 via-neutral-700 to-orange-500 p-px">
              <div className="flex h-[28px] w-[28px] items-center justify-center rounded-[7px] bg-neutral-950">
                <AlignLeft size={16} strokeWidth={2.5} className="text-white" />
              </div>
            </div>
            <span className="text-[15px] font-semibold tracking-tight text-white">
              Ayman Nasir Uddin
            </span>
          </a>

          {/* Links (hidden on mobile) */}
          <ul className="hidden items-center gap-5 md:flex">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium tracking-tight text-white/55 transition hover:text-white"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Button + mobile menu toggle */}
          <div className="flex items-center gap-2">
            
            {/* NEW: Replaced the old white button with your custom BreezyButton */}
            <div className="hidden md:block">
              <BreezyButton onClick={goToContact}>
                <span className="flex items-center gap-2">
                  <Mail size={14} />
                  Resume
                </span>
              </BreezyButton>
            </div>

            <button
              className="rounded-lg p-2 text-white/80 md:hidden"
              aria-label="Toggle menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </header>

        {/* Mobile menu */}
        {menuOpen && (
          <ul className="flex flex-col gap-4 border-t border-white/10 px-4 py-4 md:hidden">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-white/70"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          {/* Mobile Button at the very bottom */}
            {/* Mobile menu button */}
            <li className="mt-4 w-full">
              {/* Added !w-full to override the max-content CSS rule */}
              <BreezyButton className="!w-full" onClick={goToContact}>
                <span className="flex w-full items-center justify-center gap-2">
                  <Mail size={14} />
                  Resume
                </span>
              </BreezyButton>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}