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

const showcaseSections = [
  {
    title: "Sales Map & Territory",
    description:
      "Sales reps drop pins at every house they visit, color-coded by status: sold, come back later, never knock, or pending. Managers see a higher-level view with area demographics, assignment history, and team performance data.",
    screens: [
      {
        src: "/projects/blackbird/map-sales-pins.png",
        alt: "Sales rep map view with dropped pins and property labels",
        caption: "Sales Rep View",
      },
      {
        src: "/projects/blackbird/map-manager-demographics.png",
        alt: "Manager map view with area demographics and assignment history",
        caption: "Manager View",
      },
    ],
  },
  {
    title: "Sign-Up Flow",
    description:
      "The core of Blackbird: a guided process that walks the customer through selecting a treatment plan, scheduling their first service, reviewing and signing the contract, and completing payment. Every screen is designed to be turned toward the customer at the door.",
    screens: [
      {
        src: "/projects/blackbird/treatment-plans.png",
        alt: "Treatment plan selection screen with service tiers",
        caption: "Treatment Plans",
      },
      {
        src: "/projects/blackbird/schedule.png",
        alt: "Service scheduling screen with date and time selection",
        caption: "Schedule Service",
      },
      {
        src: "/projects/blackbird/payment-ach.png",
        alt: "Payment screen showing yearly summary and ACH payment option",
        caption: "Payment",
      },
      {
        src: "/projects/blackbird/contract-sent.png",
        alt: "Contract sent confirmation screen",
        caption: "Contract Sent",
      },
    ],
  },
  {
    title: "Customer Card",
    description:
      "After a sale is closed, every customer gets a detailed card that lives inside the app. Reps and managers can view contact info, service packages, appointment history, special requests, and customer-specific to-do items — all in one place.",
    screens: [
      {
        src: "/projects/blackbird/customer-card-info.png",
        alt: "Customer card showing contact information, address, packages, and service statuses",
        caption: "Customer Info",
      },
      {
        src: "/projects/blackbird/customer-card-appointments.png",
        alt: "Customer card appointments tab showing scheduled services with cancel and reschedule options",
        caption: "Appointments",
      },
      {
        src: "/projects/blackbird/customer-card-requests.png",
        alt: "Customer card requests tab with special requests and customer-specific to-do items",
        caption: "Requests",
      },
    ],
  },
  {
    title: "Dashboard & Leaderboard",
    description:
      "Each rep gets a personal dashboard — nicknamed the \"baseball card\" — packed with their daily stats: revenue, sales counts, contract averages, welcome letter progress, and pin-drop breakdowns. The leaderboard ranks reps across offices by total revenue, total sales, or other indicators, filtered by date range.",
    screens: [
      {
        src: "/projects/blackbird/dashboard-individual-stats.png",
        alt: "Individual sales rep dashboard showing revenue, contract averages, welcome letters, and pin drop charts",
        caption: "Baseball Card",
      },
      {
        src: "/projects/blackbird/leaderboard-by-office.png",
        alt: "Sales rep leaderboard ranked by total revenue across offices",
        caption: "Leaderboard",
      },
    ],
  },
];

function ShowcaseSection({
  section,
  sectionIndex,
}: {
  section: (typeof showcaseSections)[number];
  sectionIndex: number;
}) {
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px",
  });

  return (
    <div
      ref={ref}
      className="pb-14"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 800ms cubic-bezier(0.16, 1, 0.3, 1) ${sectionIndex * 60}ms, transform 800ms cubic-bezier(0.16, 1, 0.3, 1) ${sectionIndex * 60}ms`,
      }}
    >
      {/* Section header */}
      <div className="mb-6">
        <div className="flex items-baseline gap-3 mb-2">
          <p className="font-body text-xs tracking-[0.3em] uppercase text-accent">
            {String(sectionIndex + 1).padStart(2, "0")}
          </p>
          <h3 className="font-display text-lg md:text-xl font-bold text-foreground tracking-tight">
            {section.title}
          </h3>
        </div>
        <p className="font-body text-sm leading-[1.75] text-foreground/70 max-w-2xl">
          {section.description}
        </p>
      </div>

      {/* Screen grid */}
      <div
        className="grid grid-cols-2 gap-4 md:gap-6"
      >
        {section.screens.map((screen, i) => (
          <ScreenCard
            key={screen.caption}
            screen={screen}
            index={i}
            parentVisible={isVisible}
            isMap={section.title === "Sales Map & Territory"}
          />
        ))}
      </div>
    </div>
  );
}

function ScreenCard({
  screen,
  index,
  parentVisible,
  isMap,
}: {
  screen: { src: string; alt: string; caption: string };
  index: number;
  parentVisible: boolean;
  isMap: boolean;
}) {
  const isScrollable = screen.src.includes("payment-ach");

  return (
    <div
      style={{
        opacity: parentVisible ? 1 : 0,
        transform: parentVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 600ms cubic-bezier(0.16, 1, 0.3, 1) ${200 + index * 100}ms, transform 600ms cubic-bezier(0.16, 1, 0.3, 1) ${200 + index * 100}ms`,
      }}
    >
      <p className="font-body text-[10px] tracking-[0.25em] uppercase text-accent mb-2 text-center">
        {screen.caption}
      </p>
      {isScrollable ? (
        <div
          className="mx-auto w-full max-w-[280px] overflow-y-auto"
          style={{ aspectRatio: "835 / 1195" }}
        >
          <Image
            src={screen.src}
            alt={screen.alt}
            width={835}
            height={2812}
            className="w-full h-auto"
            unoptimized
          />
        </div>
      ) : (
        <div
          className="relative mx-auto w-full max-w-[280px] overflow-hidden"
          style={{ aspectRatio: "835 / 1195" }}
        >
          <Image
            src={screen.src}
            alt={screen.alt}
            fill
            className="object-cover object-top"
            unoptimized
          />
        </div>
      )}
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

export default function BlackbirdPage() {
  const project = getProjectBySlug("blackbird");
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
              The Design
            </h2>
            <p className="font-body text-base leading-[1.85] text-foreground/75">
              {project.designApproach}
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Screen Showcase */}
      <section className="max-w-6xl mx-auto px-6 pb-16">
        <ScrollReveal delay={0} duration={800} distance={30}>
          <h2
            className="font-display font-bold text-outline-thin leading-none tracking-tight mb-4"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
          >
            SCREENS
          </h2>
          <p className="font-body text-sm text-foreground/60 mb-12">
            Key screens from the sales map, sign-up flow, customer card, and contract process.
          </p>
        </ScrollReveal>

        <div className="space-y-10">
          {showcaseSections.map((section, index) => (
            <ShowcaseSection
              key={section.title}
              section={section}
              sectionIndex={index}
            />
          ))}
        </div>
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
