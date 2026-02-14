"use client";

import Image from "next/image";
import {
  personalInfo,
  experiences,
  education,
  skillCategories,
} from "@/lib/data";
import {
  TextReveal,
  ScrollReveal,
  MarqueeReveal,
  StaggerReveal,
} from "@/components/scroll-reveal";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const highlightsMarquee =
  "HEAD OF DESIGN \u00B7 REACT \u00B7 NEXT.JS \u00B7 FIGMA \u00B7 DESIGN SYSTEMS \u00B7 REACT NATIVE \u00B7 GOOGLE UX CERTIFIED \u00B7 SEATTLE \u00B7 ";

function ExperienceEntry({
  exp,
  index,
}: {
  exp: (typeof experiences)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px",
  });

  return (
    <div
      ref={ref}
      className="py-8 border-b border-border-line"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateX(0)" : "translateX(-40px)",
        transition: `opacity 800ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 120}ms, transform 800ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 120}ms`,
      }}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
        <div>
          <h3 className="font-display text-xl font-bold text-foreground">
            {exp.company}
          </h3>
          <p className="font-body text-sm text-accent">{exp.role}</p>
        </div>
        <span className="font-body text-xs tracking-widest uppercase text-muted shrink-0">
          {exp.period}
        </span>
      </div>
      <p className="font-body text-sm leading-relaxed text-foreground/70 mb-3">
        {exp.description}
      </p>
      <ul className="space-y-1.5">
        {exp.highlights.map((highlight, hIndex) => (
          <li
            key={hIndex}
            className="flex items-start gap-3 font-body text-sm text-foreground/60"
          >
            <span className="mt-2 h-1 w-1 shrink-0 bg-accent rounded-full" />
            {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div>
      {/* Giant outline title */}
      <section className="pt-28 pb-12 px-6 max-w-6xl mx-auto">
        <TextReveal delay={100} duration={1200}>
          <h1
            className="font-display font-bold text-outline leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
          >
            ABOUT
          </h1>
        </TextReveal>
      </section>

      {/* Bio prose */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <ScrollReveal delay={200} duration={800} distance={30}>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[2px] bg-accent" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted">
              {personalInfo.title} / {personalInfo.location}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-start">
          <ScrollReveal delay={300} duration={900} distance={40}>
            <div className="max-w-xs overflow-hidden rounded-2xl">
              <Image
                src="/azure-portrait.jpg"
                alt="Azure Malm portrait"
                width={600}
                height={750}
                className="w-full object-cover object-top"
                style={{ aspectRatio: "3/4", height: "auto" }}
                priority
                unoptimized
              />
            </div>
          </ScrollReveal>

          <div>
            {personalInfo.extendedBio.map((paragraph, index) => (
              <ScrollReveal
                key={index}
                delay={100 * index}
                duration={800}
                distance={30}
              >
                <p className="font-body text-base leading-[1.9] text-foreground/80 mb-6">
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Career highlights marquee */}
      <MarqueeReveal>
        <section className="py-5 border-y border-border-line">
          <div className="marquee-container">
            <div className="marquee-track">
              <span className="font-display text-base md:text-lg font-medium tracking-[0.2em] text-accent">
                {highlightsMarquee.repeat(8)}
              </span>
              <span className="font-display text-base md:text-lg font-medium tracking-[0.2em] text-accent">
                {highlightsMarquee.repeat(8)}
              </span>
            </div>
          </div>
        </section>
      </MarqueeReveal>

      {/* Experience */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <ScrollReveal delay={0} duration={900} distance={40}>
          <h2
            className="font-display font-bold text-outline-thin leading-none tracking-tight mb-14"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
          >
            EXPERIENCE
          </h2>
        </ScrollReveal>

        <div className="space-y-0">
          {experiences.map((exp, index) => (
            <ExperienceEntry key={index} exp={exp} index={index} />
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <ScrollReveal delay={0} duration={900} distance={40}>
          <h2
            className="font-display font-bold text-outline-thin leading-none tracking-tight mb-14"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
          >
            EDUCATION
          </h2>
        </ScrollReveal>

        <StaggerReveal staggerDelay={120} direction="up" distance={30}>
          {education.map((edu, index) => (
            <div key={index} className="py-6 border-b border-border-line flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  {edu.degree}
                </h3>
                <p className="font-body text-sm text-accent">{edu.institution}</p>
              </div>
              <span className="font-body text-xs tracking-widest uppercase text-muted">
                {edu.period}
              </span>
            </div>
          ))}
        </StaggerReveal>
      </section>

      {/* Skills -- flowing text */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <ScrollReveal delay={0} duration={900} distance={40}>
          <h2
            className="font-display font-bold text-outline-thin leading-none tracking-tight mb-14"
            style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}
          >
            SKILLS
          </h2>
        </ScrollReveal>

        <StaggerReveal staggerDelay={150} direction="up" distance={30} className="space-y-10">
          {skillCategories.map((category) => (
            <div key={category.category}>
              <p className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4">
                {category.category}
              </p>
              <p className="font-display text-xl md:text-2xl font-light text-foreground leading-relaxed tracking-wide">
                {category.skills.join(" \u00B7 ")}
              </p>
            </div>
          ))}
        </StaggerReveal>
      </section>
    </div>
  );
}
