"use client";

import Link from "next/link";
import Image from "next/image";
import { projects, personalInfo } from "@/lib/data";
import {
  TextReveal,
  ScrollReveal,
  MarqueeReveal,
  WordByWordReveal,
} from "@/components/scroll-reveal";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const brandLogos = [
  { src: "/logos/hawx.png", alt: "Hawx" },
  { src: "/logos/advisermatch.png", alt: "AdviserMatch" },
  { src: "/logos/canopy.png", alt: "Canopy" },
  { src: "/logos/yesbrands.png", alt: "YES Brands" },
  { src: "/logos/trustedservicepros.png", alt: "Trusted Service Pros" },
];

const skillsMarquee =
  "DESIGN \u00B7 CODE \u00B7 FIGMA \u00B7 REACT \u00B7 NEXT.JS \u00B7 UX RESEARCH \u00B7 PROTOTYPING \u00B7 DESIGN SYSTEMS \u00B7 CSS \u00B7 REACT NATIVE \u00B7 ";

const ctaMarquee =
  "AVAILABLE FOR NEW PROJECTS \u00B7 LET\u2019S COLLABORATE \u00B7 azurem.ux@gmail.com \u00B7 ";

function HomeProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px",
  });

  const num = String(index + 1).padStart(2, "0");

  return (
    <div ref={ref}>
      <Link
        href={`/projects/${project.slug}`}
        className="group flex items-start md:items-center gap-4 md:gap-8 py-8 border-b border-border-line transition-colors"
      >
        {/* Outline number */}
        <span
          className="font-display text-5xl md:text-7xl font-bold text-outline shrink-0 leading-none"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition:
              "opacity 800ms cubic-bezier(0.16, 1, 0.3, 1) 0ms, transform 800ms cubic-bezier(0.16, 1, 0.3, 1) 0ms",
          }}
        >
          {num}
        </span>

        {/* Title + subtitle */}
        <div
          className="flex-1 min-w-0"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
            transition:
              "opacity 800ms cubic-bezier(0.16, 1, 0.3, 1) 120ms, transform 800ms cubic-bezier(0.16, 1, 0.3, 1) 120ms",
          }}
        >
          <h3 className="font-display text-2xl md:text-4xl font-bold text-foreground tracking-tight leading-tight">
            {project.title}
          </h3>
          <p className="mt-1 font-body text-sm text-muted">
            {project.subtitle}
          </p>
          <div className="mt-2 flex items-center gap-2 flex-wrap">
            {project.platforms.map((platform) => (
              <span
                key={platform}
                className="font-body text-[10px] tracking-widest uppercase text-accent bg-accent/10 px-2 py-0.5 rounded shrink-0"
              >
                {platform}
              </span>
            ))}
          </div>
          <div className="mt-2 w-10 h-[1.5px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Thumbnail */}
        {project.thumbnail && (
          <div
            className="hidden md:block w-48 lg:w-64 shrink-0"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition:
                "opacity 800ms cubic-bezier(0.16, 1, 0.3, 1) 200ms, transform 800ms cubic-bezier(0.16, 1, 0.3, 1) 200ms",
            }}
          >
            <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
              <Image
                src={project.thumbnail}
                alt={`${project.title} preview`}
                fill
                className="object-contain"
                unoptimized
              />
            </div>
          </div>
        )}

        {/* Arrow */}
        <span
          className="font-body text-sm text-accent opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
          style={{
            transitionDelay: isVisible ? "0ms" : "240ms",
          }}
        >
          View &rarr;
        </span>
      </Link>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      {/* ===== SECTION 1: THE NAME (full viewport) ===== */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="font-display font-bold text-center leading-[0.9] tracking-tight">
          <TextReveal delay={200} duration={1200}>
            <span
              className="block text-foreground"
              style={{ fontSize: "clamp(4rem, 15vw, 14rem)" }}
            >
              AZURE
            </span>
          </TextReveal>
          <TextReveal delay={400} duration={1200}>
            <span
              className="block text-outline"
              style={{ fontSize: "clamp(4rem, 15vw, 14rem)" }}
            >
              MALM
            </span>
          </TextReveal>
        </h1>
        <ScrollReveal delay={700} duration={800} distance={20}>
          <p className="mt-6 font-body text-sm tracking-[0.35em] uppercase text-muted">
            {personalInfo.title}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={900} duration={800} distance={10}>
          <div className="mt-4 w-20 h-[2px] bg-accent" />
        </ScrollReveal>
        <ScrollReveal delay={1100} duration={800} distance={16}>
          <Link
            href="/projects"
            className="mt-8 inline-block font-body text-sm font-semibold tracking-widest uppercase px-8 py-3 bg-accent text-white rounded-full hover:bg-accent-hover transition-colors"
          >
            See My Work
          </Link>
        </ScrollReveal>
      </section>

      {/* ===== SECTION 2: BRANDS + SKILLS MARQUEE ===== */}
      <MarqueeReveal>
        <section className="border-y border-border-line">
          {/* Brand logos carousel - hidden for now
          <div className="py-4 marquee-container">
            <div className="marquee-track" style={{ animation: "marquee 20s linear infinite" }}>
              {[...brandLogos, ...brandLogos, ...brandLogos, ...brandLogos].map((logo, i) => (
                <div key={i} className="shrink-0 mx-10 flex items-center justify-center" style={{ width: "120px", height: "40px" }}>
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={40}
                    className="max-w-full max-h-full w-auto h-auto object-contain"
                    style={{ filter: "grayscale(100%) opacity(0.55)" }}
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="border-t border-border-line" />
          */}
          <div className="py-5 marquee-container">
            <div className="marquee-track-reverse" style={{ animation: "marquee-reverse 15s linear infinite" }}>
              <span className="font-display text-lg md:text-2xl font-medium tracking-widest text-accent">
                {skillsMarquee.repeat(6)}
              </span>
              <span className="font-display text-lg md:text-2xl font-medium tracking-widest text-accent">
                {skillsMarquee.repeat(6)}
              </span>
            </div>
          </div>
        </section>
      </MarqueeReveal>

      {/* ===== SECTION 4: PROJECTS ===== */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        {projects.map((project, index) => (
          <HomeProjectRow
            key={project.slug}
            project={project}
            index={index}
          />
        ))}
      </section>

      {/* ===== SECTION 4: ABOUT TEASER ===== */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
        <div style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)" }}>
          <WordByWordReveal
            text={personalInfo.bio}
            wordDelay={40}
            className="font-display font-extralight text-foreground leading-snug"
            delay={0}
          />
        </div>
        <ScrollReveal delay={200} duration={600} distance={20}>
          <Link
            href="/about"
            className="inline-block mt-8 font-body text-sm text-accent tracking-widest uppercase hover:text-accent-hover transition-colors"
          >
            About Me &rarr;
          </Link>
        </ScrollReveal>
      </section>

      {/* ===== SECTION 5: CTA MARQUEE (reverse direction) ===== */}
      <MarqueeReveal>
        <section className="py-6 border-y border-border-line">
          <div className="marquee-container">
            <div className="marquee-track-reverse">
              <span className="font-display text-base md:text-xl font-light tracking-[0.25em] uppercase text-foreground">
                {ctaMarquee.repeat(8)}
              </span>
              <span className="font-display text-base md:text-xl font-light tracking-[0.25em] uppercase text-foreground">
                {ctaMarquee.repeat(8)}
              </span>
            </div>
          </div>
        </section>
      </MarqueeReveal>
    </div>
  );
}
