"use client";

import Link from "next/link";
import Image from "next/image";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { projects } from "@/lib/data";
import {
  TextReveal,
  ProjectRowReveal,
} from "@/components/scroll-reveal";

export default function ProjectsPage() {
  return (
    <div>
      {/* Giant outline title */}
      <section className="pt-28 pb-12 px-6 max-w-6xl mx-auto">
        <TextReveal delay={100} duration={1200}>
          <h1
            className="font-display font-bold text-outline leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(4rem, 12vw, 10rem)" }}
          >
            WORK
          </h1>
        </TextReveal>
      </section>

      {/* Project rows */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        {projects.map((project, index) => {
          const num = String(index + 1).padStart(2, "0");
          return (
            <ProjectRowReveal key={project.slug}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block border-b border-border-line py-10 md:py-14"
              >
                <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
                  {/* Left: number + text */}
                  <div className="flex items-start gap-5 md:gap-8 flex-1 min-w-0">
                    <span className="project-num font-display text-5xl md:text-7xl font-bold text-outline shrink-0 leading-none">
                      {num}
                    </span>
                    <div className="project-text flex-1 min-w-0">
                      <h2 className="font-display text-2xl md:text-4xl font-bold text-foreground tracking-tight leading-tight">
                        {project.title}
                      </h2>
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
                      <p className="mt-2 font-body text-xs tracking-widest uppercase text-accent">
                        {project.role}
                      </p>
                      <div className="mt-3 w-10 h-[1.5px] bg-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* Right: image */}
                  <div className="project-image w-full md:w-64 lg:w-80 shrink-0">
                    {project.thumbnail ? (
                      <div className="relative w-full" style={{ aspectRatio: "16/10" }}>
                        <Image
                          src={project.thumbnail}
                          alt={`${project.title} preview`}
                          fill
                          className="object-contain"
                          unoptimized
                        />
                      </div>
                    ) : (
                      <ImagePlaceholder
                        description={project.heroPlaceholder}
                        aspectRatio="16/10"
                      />
                    )}
                  </div>
                </div>
              </Link>
            </ProjectRowReveal>
          );
        })}
      </section>
    </div>
  );
}
