"use client";

import { useEffect, useRef } from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delayMs?: number;
};

/**
 * Adds `.reveal` (from globals.css) to its wrapper and flips on `.is-visible`
 * the first time the element crosses into the viewport. Any element inside
 * that also carries `.frame-corner` or `.thread-line` will animate in sync,
 * since we toggle the same class on this wrapper's descendants too.
 */
export default function Reveal({
  children,
  className = "",
  as = "div",
  delayMs = 0,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => {
              node.classList.add("is-visible");
              node
                .querySelectorAll(".frame-corner, .thread-line, .grow-v")
                .forEach((el) => el.classList.add("is-visible"));
            }, delayMs);
            observer.unobserve(node);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [delayMs]);

  const Tag = as as any;

  return (
    <Tag ref={ref} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
