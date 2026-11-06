"use client";

import { ReactLenis } from "lenis/react";
import "lenis/dist/lenis.css";
import { useReducedMotion } from "framer-motion";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion();

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        anchors: true,
        smoothWheel: !reduceMotion,
      }}
    >
      {children}
    </ReactLenis>
  );
}
