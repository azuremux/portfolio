"use client";

import { useState } from "react";
import { brands } from "@/lib/data";
import { ChevronDown } from "lucide-react";
import {
  TextReveal,
  ScrollReveal,
  StaggerReveal,
} from "@/components/scroll-reveal";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const typeLabels: Record<string, string> = {
  "landing-page": "Landing Page",
  "lead-gen": "Lead Gen",
  marketing: "Marketing",
  branding: "Branding",
  redesign: "Redesign",
  app: "App",
  website: "Website",
};

function BrandRow({
  brand,
  index,
}: {
  brand: (typeof brands)[number];
  index: number;
}) {
  const [open, setOpen] = useState(false);
  const { ref, isVisible } = useScrollReveal({
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px",
  });

  return (
    <div
      ref={ref}
      className="border-b border-border-line"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: `opacity 800ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms, transform 800ms cubic-bezier(0.16, 1, 0.3, 1) ${index * 100}ms`,
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-8 md:py-10 text-left group"
      >
        <div className="flex-1 min-w-0">
          <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground tracking-tight">
            {brand.name}
          </h2>
          <p className="mt-1 font-body text-sm text-muted">
            {brand.description}
          </p>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-accent shrink-0 ml-4 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className="overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          maxHeight: open ? `${brand.work.length * 80 + 40}px` : "0px",
          opacity: open ? 1 : 0,
        }}
      >
        <div className="pb-8 space-y-0">
          {brand.work.map((item, i) => (
            <div
              key={i}
              className="py-3 pl-4 border-l-2 border-accent/20 ml-2"
            >
              <div className="flex items-center gap-3">
                <h3 className="font-display text-base font-bold text-foreground tracking-tight">
                  {item.title}
                </h3>
                <span className="font-body text-[10px] tracking-widest uppercase text-accent bg-accent/10 px-2 py-0.5 rounded shrink-0">
                  {typeLabels[item.type] || item.type}
                </span>
              </div>
              <div>
                <p className="font-body text-sm text-muted">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function BrandsPage() {
  return (
    <div>
      {/* Giant outline title */}
      <section className="pt-28 pb-12 px-6 max-w-6xl mx-auto">
        <TextReveal delay={100} duration={1200}>
          <h1
            className="font-display font-bold text-outline leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
          >
            BRANDS
          </h1>
        </TextReveal>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-8">
        <ScrollReveal delay={200} duration={800} distance={20}>
          <div className="flex items-center gap-4 mb-2">
            <div className="w-12 h-[2px] bg-accent" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted">
              Brands I&apos;ve designed for
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* Brand rows */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        {brands.map((brand, index) => (
          <BrandRow key={brand.slug} brand={brand} index={index} />
        ))}
      </section>
    </div>
  );
}
