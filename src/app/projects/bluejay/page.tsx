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
    title: "Customer Lookup & Service Setup",
    description:
      "Reps start by looking up the customer to see their existing appointments, inspections, and account details. From there, they enter the sign-up flow where they can select services, add-ons, term lengths, and pricing for the customer.",
    layout: "desktop" as const,
    screens: [
      {
        src: "/projects/bluejay/customer-lookup.png",
        alt: "Customer lookup screen showing inspection appointments and account details",
        caption: "Customer Lookup",
        scrollable: false,
      },
      {
        src: "/projects/bluejay/add-services.png",
        alt: "Add services screen with service types, customizations, and pricing options",
        caption: "Add Services",
        scrollable: true,
      },
    ],
  },
  {
    title: "Link Sharing & Progress Tracking",
    description:
      "Once the rep builds the service package, they send a link to the customer to complete the sign-up on their own device. The internal view updates in real time via webhooks, showing exactly where the customer is in the flow and what action items remain.",
    layout: "desktop" as const,
    screens: [
      {
        src: "/projects/bluejay/send-link.png",
        alt: "Choose how to continue screen with option to send link to customer",
        caption: "Send Link",
        scrollable: false,
      },
      {
        src: "/projects/bluejay/progress-indicator.png",
        alt: "Progress indicator showing customer action items and completion status",
        caption: "Progress Tracking",
        scrollable: false,
      },
    ],
  },
  {
    title: "Customer Side: Agreement & Payment",
    description:
      "The customer-facing side walks them through signing the service agreement via PandaDoc and completing payment with card or billing information. Each step is simple and mobile-optimized so the customer can finish on their phone.",
    layout: "mobile" as const,
    screens: [
      {
        src: "/projects/bluejay/service-agreement.png",
        alt: "Service agreement sign prompt with Sign Here button",
        caption: "Sign Prompt",
        scrollable: false,
      },
      {
        src: "/projects/bluejay/service-agreement-open.png",
        alt: "Service agreement document open with PandaDoc and Start signing button",
        caption: "Agreement Document",
        scrollable: false,
      },
      {
        src: "/projects/bluejay/payment-card.png",
        alt: "Payment card information entry with name, card number, CVV, and expiry",
        caption: "Card Info",
        scrollable: false,
      },
      {
        src: "/projects/bluejay/payment-billing.png",
        alt: "Billing information entry with address, city, state, and zip code",
        caption: "Billing Info",
        scrollable: false,
      },
    ],
  },
  {
    title: "Renewal Flow",
    description:
      "The tool was later adapted to handle customer renewals. Reps can see the customer's active services and add-ons, select which services to renew, choose a new term length, set pricing, and review the renewal summary before sending.",
    layout: "desktop" as const,
    screens: [
      {
        src: "/projects/bluejay/renewal.png",
        alt: "Renewal screen showing active services, renewal selection, add-ons, and pricing summary",
        caption: "Renew Services",
        scrollable: false,
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

  const gridClass =
    section.layout === "mobile"
      ? "grid-cols-2 md:grid-cols-4"
      : section.screens.length === 1
        ? "grid-cols-1"
        : "grid-cols-1 md:grid-cols-2";

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
      <div className={`grid gap-4 md:gap-6 ${gridClass}`}>
        {section.screens.map((screen, i) => (
          <ScreenCard
            key={screen.caption}
            screen={screen}
            index={i}
            parentVisible={isVisible}
            layout={section.layout}
            isSingle={section.screens.length === 1}
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
  layout,
  isSingle,
}: {
  screen: { src: string; alt: string; caption: string; scrollable: boolean };
  index: number;
  parentVisible: boolean;
  layout: "desktop" | "mobile";
  isSingle: boolean;
}) {
  return (
    <div
      className={isSingle ? "max-w-4xl mx-auto w-full" : ""}
      style={{
        opacity: parentVisible ? 1 : 0,
        transform: parentVisible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 600ms cubic-bezier(0.16, 1, 0.3, 1) ${200 + index * 100}ms, transform 600ms cubic-bezier(0.16, 1, 0.3, 1) ${200 + index * 100}ms`,
      }}
    >
      <p className="font-body text-[10px] tracking-[0.25em] uppercase text-accent mb-2 text-center">
        {screen.caption}
      </p>
      {layout === "desktop" ? (
        screen.scrollable ? (
          <div
            className="w-full overflow-y-auto"
            style={{ maxHeight: "500px" }}
          >
            <Image
              src={screen.src}
              alt={screen.alt}
              width={1440}
              height={1951}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        ) : (
          <div className="w-full">
            <Image
              src={screen.src}
              alt={screen.alt}
              width={1440}
              height={906}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        )
      ) : (
        <div className="mx-auto w-full max-w-[280px]">
          <Image
            src={screen.src}
            alt={screen.alt}
            width={450}
            height={1050}
            className="w-full h-auto"
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

export default function BluejayPage() {
  const project = getProjectBySlug("bluejay");
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
            Key screens from the internal sales flow, customer-facing sign-up experience, and renewal process.
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
