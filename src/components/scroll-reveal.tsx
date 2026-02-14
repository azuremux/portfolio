"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
  className?: string;
  as?: "div" | "section" | "span";
}

export function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  duration = 800,
  distance = 60,
  once = true,
  threshold = 0.15,
  rootMargin = "0px 0px -60px 0px",
  className = "",
  as: Tag = "div",
}: ScrollRevealProps) {
  const { ref, isVisible } = useScrollReveal({ threshold, rootMargin, once });

  const translateMap = {
    up: `translateY(${distance}px)`,
    down: `translateY(-${distance}px)`,
    left: `translateX(${distance}px)`,
    right: `translateX(-${distance}px)`,
  };

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translate(0, 0)" : translateMap[direction],
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}

/* ---- Dramatic text reveal: clips from below with slight rotation ---- */
interface TextRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function TextReveal({
  children,
  delay = 0,
  duration = 1000,
  className = "",
}: TextRevealProps) {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px",
  });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "translateY(0) rotate(0deg)"
            : "translateY(110%) rotate(3deg)",
          transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
          transformOrigin: "bottom left",
          willChange: "opacity, transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ---- Staggered children reveal ---- */
interface StaggerRevealProps {
  children: React.ReactNode;
  staggerDelay?: number;
  baseDelay?: number;
  direction?: "up" | "left";
  duration?: number;
  distance?: number;
  className?: string;
}

export function StaggerReveal({
  children,
  staggerDelay = 100,
  baseDelay = 0,
  direction = "up",
  duration = 800,
  distance = 40,
  className = "",
}: StaggerRevealProps) {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px",
  });

  const childArray = Array.isArray(children) ? children : [children];

  const getTransform = (visible: boolean) => {
    if (visible) return "translate(0, 0)";
    if (direction === "left") return `translateX(${distance}px)`;
    return `translateY(${distance}px)`;
  };

  return (
    <div ref={ref} className={className}>
      {childArray.map((child, index) => (
        <div
          key={index}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: getTransform(isVisible),
            transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${baseDelay + index * staggerDelay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${baseDelay + index * staggerDelay}ms`,
            willChange: "opacity, transform",
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
}

/* ---- Marquee reveal: fades in and starts animation ---- */
interface MarqueeRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function MarqueeReveal({
  children,
  delay = 0,
  className = "",
}: MarqueeRevealProps) {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.05,
    rootMargin: "0px 0px -20px 0px",
  });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transition: `opacity 1000ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: "opacity",
      }}
    >
      {children}
    </div>
  );
}

/* ---- Scale reveal: for dramatic headings ---- */
interface ScaleRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScaleReveal({
  children,
  delay = 0,
  duration = 1200,
  className = "",
}: ScaleRevealProps) {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px",
  });

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible
            ? "translateY(0) scale(1)"
            : "translateY(80%) scale(0.95)",
          transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
          transformOrigin: "bottom center",
          willChange: "opacity, transform",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ---- Word-by-word reveal for bio text ---- */
interface WordByWordRevealProps {
  text: string;
  delay?: number;
  wordDelay?: number;
  className?: string;
}

export function WordByWordReveal({
  text,
  delay = 0,
  wordDelay = 40,
  className = "",
}: WordByWordRevealProps) {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px",
  });

  const words = text.split(" ");

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <span key={index} className="inline-block overflow-hidden mr-[0.3em] align-top">
          <span
            className="inline-block"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(100%)",
              filter: isVisible ? "blur(0px)" : "blur(3px)",
              transition: `opacity 600ms cubic-bezier(0.16, 1, 0.3, 1) ${delay + index * wordDelay}ms, transform 600ms cubic-bezier(0.16, 1, 0.3, 1) ${delay + index * wordDelay}ms, filter 600ms cubic-bezier(0.16, 1, 0.3, 1) ${delay + index * wordDelay}ms`,
              willChange: "opacity, transform, filter",
            }}
          >
            {word}
          </span>
        </span>
      ))}
    </div>
  );
}

/* ---- Choreographed project row (CSS class-based for projects page) ---- */
interface ProjectRowRevealProps {
  children: React.ReactNode;
  className?: string;
}

export function ProjectRowReveal({
  children,
  className = "",
}: ProjectRowRevealProps) {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px",
  });

  return (
    <div
      ref={ref}
      className={`project-row-enter ${isVisible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
