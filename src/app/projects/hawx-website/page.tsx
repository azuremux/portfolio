"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { getProjectBySlug, projects } from "@/lib/data";
import { notFound } from "next/navigation";
import {
  TextReveal,
  ScrollReveal,
} from "@/components/scroll-reveal";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import React from "react";

const comparisons = [
  {
    label: "Homepage",
    description:
      "Redesigned the homepage with a modern layout, clearer value proposition, improved trust signals, and a stronger conversion flow from first impression to lead capture.",
    beforeImage: "/projects/hawx-website/homepage-before.png",
    afterImage: "/projects/hawx-website/homepage-after.png",
  },
  {
    label: "Location Overview",
    description:
      "Replaced the basic text list of locations with a structured overview page that makes it easy for visitors to find their nearest service area.",
    beforeImage: "/projects/hawx-website/location-overview-before.png",
    afterImage: "/projects/hawx-website/location-overview-after.png",
  },
  {
    label: "State Page",
    description:
      "Created a dedicated state-level page that lists all branches in that state with local details, replacing the old flat location list.",
    beforeImage: "/projects/hawx-website/branch-state-before.png",
    afterImage: "/projects/hawx-website/branch-state-after.png",
  },
  {
    label: "Branch / City Page",
    description:
      "Redesigned the individual branch page with better local information, clearer CTAs, and a layout that works across all screen sizes.",
    beforeImage: "/projects/hawx-website/branch-city-before.png",
    afterImage: "/projects/hawx-website/branch-city-after.png",
  },
  {
    label: "Pest Library",
    description:
      "Restructured the pest information pages with improved content hierarchy, better readability, and clear calls to action for visitors researching specific pest problems.",
    beforeImage: "/projects/hawx-website/pest-library-before.png",
    afterImage: "/projects/hawx-website/pest-library-after.png",
  },
];

function ScrollableImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative w-full h-[420px] rounded-lg overflow-hidden border border-border-line bg-white">
      <div className="absolute inset-0 overflow-y-auto scrollbar-hide">
        <Image
          src={src}
          alt={alt}
          width={800}
          height={3000}
          className="w-full h-auto"
          unoptimized
        />
      </div>
      {/* Fade hint at bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}

function BeforeAfterCard({
  comparison,
  index,
}: {
  comparison: (typeof comparisons)[number];
  index: number;
}) {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px",
  });

  return (
    <div
      ref={ref}
      className="pb-6"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 800ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 60}ms, transform 800ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 60}ms`,
      }}
    >
      {/* Title & description */}
      <div className="mb-5">
        <div className="flex items-baseline gap-3 mb-2">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent">
            {String(index + 1).padStart(2, "0")}
          </p>
          <h3 className="font-display text-lg md:text-xl font-bold text-foreground tracking-tight">
            {comparison.label}
          </h3>
        </div>
        <p className="font-body text-sm leading-[1.75] text-foreground/70 max-w-2xl">
          {comparison.description}
        </p>
      </div>

      {/* Side-by-side Before & After */}
      <div className="grid grid-cols-2 gap-4 md:gap-6">
        {/* Before */}
        <div>
          <p className="font-body text-[10px] tracking-[0.25em] uppercase text-muted mb-2 text-center">
            Before
          </p>
          <ScrollableImage
            src={comparison.beforeImage}
            alt={`${comparison.label} — Before redesign`}
          />
        </div>

        {/* After */}
        <div>
          <p className="font-body text-[10px] tracking-[0.25em] uppercase text-accent mb-2 text-center">
            After
          </p>
          <ScrollableImage
            src={comparison.afterImage}
            alt={`${comparison.label} — After redesign`}
          />
        </div>
      </div>
    </div>
  );
}

function FeatureEntry({
  feature,
  index,
}: {
  feature: { number: number; title: string; description: string };
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

export default function HawxWebsitePage() {
  const project = getProjectBySlug("hawx-website");
  if (!project) return notFound();

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
                The Challenge
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

        {/* Design approach */}
        <ScrollReveal delay={0} duration={800} distance={30}>
          <div className="border-l-2 border-accent pl-6">
            <h2 className="font-display text-xl font-medium text-foreground mb-4 tracking-tight">
              The Redesign
            </h2>
            <p className="font-body text-base leading-[1.85] text-foreground/75">
              {project.designApproach}
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Before & After */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <ScrollReveal delay={0} duration={800} distance={30}>
          <h2
            className="font-display font-bold text-outline-thin leading-none tracking-tight mb-4"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
          >
            BEFORE &amp; AFTER
          </h2>
          <p className="font-body text-sm text-foreground/60 mb-12">
            Homepage, location pages, and pest library redesigned so far. More pages in progress.
          </p>
        </ScrollReveal>

        <div className="space-y-10">
          {comparisons.map((comparison, index) => (
            <BeforeAfterCard
              key={comparison.label}
              comparison={comparison}
              index={index}
            />
          ))}
        </div>

        <ScrollReveal delay={0} duration={800} distance={20}>
          <div className="mt-14 border border-border-line rounded-lg px-6 py-5 text-center">
            <p className="font-body text-sm text-foreground/60">
              This redesign is still in progress. More pages are being designed and will be added here as they're completed.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Key Features */}
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
