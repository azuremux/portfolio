"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { projects, type Project } from "@/lib/data";
import {
  TextReveal,
  ScrollReveal,
  StaggerReveal,
} from "@/components/scroll-reveal";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface ProjectDetailProps {
  project: Project;
}

function FeatureEntry({
  feature,
  index,
}: {
  feature: Project["features"][number];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px",
  });

  return (
    <div
      ref={ref}
      className="flex items-start gap-5 py-6 border-b border-border-line"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 800ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms, transform 800ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`,
      }}
    >
      <span
        className="font-display text-3xl font-bold text-outline-accent leading-none shrink-0"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(20px)",
          transition: `opacity 800ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms, transform 800ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`,
        }}
      >
        {String(feature.number).padStart(2, "0")}
      </span>
      <div>
        <h3 className="font-display text-lg font-bold text-foreground tracking-tight">
          {feature.title}
        </h3>
        <p className="mt-1 font-body text-sm leading-relaxed text-foreground/65">
          {feature.description}
        </p>
      </div>
    </div>
  );
}

function ScreenshotEntry({
  screenshot,
  index,
}: {
  screenshot: Project["screenshots"][number];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px",
  });

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 900ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 150}ms, transform 900ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 150}ms`,
      }}
    >
      <ImagePlaceholder
        description={screenshot.description}
        aspectRatio={index % 2 === 0 ? "4/3" : "3/4"}
      />
      <p className="mt-3 font-body text-xs tracking-widest uppercase text-muted">
        {screenshot.label}
      </p>
    </div>
  );
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div>
      {/* Back link */}
      <div className="max-w-4xl mx-auto px-6 pt-20">
        <ScrollReveal delay={0} duration={600} distance={10}>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase text-accent hover:text-accent-hover transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            All Projects
          </Link>
        </ScrollReveal>
      </div>

      {/* Title */}
      <section className="max-w-4xl mx-auto px-6 pt-10 pb-6">
        <TextReveal delay={100} duration={1100}>
          <h1
            className="font-display font-bold text-foreground leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)" }}
          >
            {project.title}
          </h1>
        </TextReveal>
        <ScrollReveal delay={300} duration={700} distance={10}>
          <div className="mt-4 w-16 h-[2px] bg-accent" />
        </ScrollReveal>
        <ScrollReveal delay={400} duration={700} distance={20}>
          <p className="mt-4 font-body text-sm text-muted">
            {project.role} &middot; {project.tech.join(" / ")}
          </p>
        </ScrollReveal>
      </section>

      {/* Hero image */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <ScrollReveal delay={300} duration={1000} distance={50}>
          <ImagePlaceholder
            description={project.heroPlaceholder}
            aspectRatio="16/9"
          />
        </ScrollReveal>
      </section>

      {/* Overview / Problem / Goal */}
      <section className="max-w-3xl mx-auto px-6 pb-16 space-y-12">
        <ScrollReveal delay={0} duration={800} distance={30}>
          <div>
            <h2 className="font-display text-xl font-medium text-foreground mb-4 tracking-tight">
              Overview
            </h2>
            <p className="font-body text-base leading-[1.85] text-foreground/75">
              {project.description}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-12 md:grid-cols-2">
          <ScrollReveal delay={0} duration={800} distance={30}>
            <div>
              <h2 className="font-display text-xl font-medium text-foreground mb-4 tracking-tight">
                The Problem
              </h2>
              <p className="font-body text-sm leading-[1.85] text-foreground/70">
                {project.problem}
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={120} duration={800} distance={30}>
            <div>
              <h2 className="font-display text-xl font-medium text-foreground mb-4 tracking-tight">
                The Goal
              </h2>
              <p className="font-body text-sm leading-[1.85] text-foreground/70">
                {project.goal}
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Design approach -- accent left border */}
        <ScrollReveal delay={0} duration={800} distance={30}>
          <div className="border-l-2 border-accent pl-6">
            <h2 className="font-display text-xl font-medium text-foreground mb-4 tracking-tight">
              Design Approach
            </h2>
            <p className="font-body text-base leading-[1.85] text-foreground/75">
              {project.designApproach}
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Screenshots */}
      <section className="max-w-4xl mx-auto px-6 pb-16">
        <ScrollReveal delay={0} duration={800} distance={30}>
          <h2
            className="font-display font-bold text-outline-thin leading-none tracking-tight mb-10"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
          >
            SCREENSHOTS
          </h2>
        </ScrollReveal>
        <div className="grid gap-6 md:grid-cols-2">
          {project.screenshots.map((screenshot, index) => (
            <ScreenshotEntry
              key={index}
              screenshot={screenshot}
              index={index}
            />
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <ScrollReveal delay={0} duration={800} distance={30}>
          <h2
            className="font-display font-bold text-outline-thin leading-none tracking-tight mb-10"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
          >
            KEY FEATURES
          </h2>
        </ScrollReveal>
        <div className="space-y-0">
          {project.features.map((feature, index) => (
            <FeatureEntry key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </section>

      {/* Prev / Next */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <ScrollReveal delay={0} duration={800} distance={20}>
          <div className="border-t border-border-line pt-10 grid gap-6 grid-cols-1 sm:grid-cols-2">
            {prevProject ? (
              <Link
                href={`/projects/${prevProject.slug}`}
                className="group"
              >
                <p className="font-body text-xs tracking-widest uppercase text-accent mb-2">
                  &larr; Previous
                </p>
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors tracking-tight">
                  {prevProject.title}
                </h3>
                <p className="font-body text-sm text-muted">
                  {prevProject.subtitle}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Link
                href={`/projects/${nextProject.slug}`}
                className="group text-right"
              >
                <p className="font-body text-xs tracking-widest uppercase text-accent mb-2">
                  Next &rarr;
                </p>
                <h3 className="font-display text-xl font-bold text-foreground group-hover:text-accent transition-colors tracking-tight">
                  {nextProject.title}
                </h3>
                <p className="font-body text-sm text-muted">
                  {nextProject.subtitle}
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
