import type { Transition, Variants } from "framer-motion";

// One easing curve for the whole site (smooth, fast start, soft landing)
export const ease = [0.22, 1, 0.36, 1] as const;

// Standard durations in seconds
export const duration = {
  fast: 0.25,
  base: 0.6,
  slow: 1,
} as const;

export const baseTransition: Transition = {
  duration: duration.base,
  ease,
};

// Fade in while sliding up 16px
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: baseTransition },
};

// Plain fade
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: baseTransition },
};

// Slight scale-up, good for cards and images
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: baseTransition },
};

// Parent container: staggers its children one after another
export const stagger = (delayChildren = 0, staggerChildren = 0.08): Variants => ({
  hidden: {},
  visible: { transition: { delayChildren, staggerChildren } },
});

// Scroll-reveal settings: animate once, when 25% of the element is visible
export const viewport = { once: true, amount: 0.25 } as const;