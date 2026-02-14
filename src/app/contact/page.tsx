"use client";

import { useState } from "react";
import { personalInfo } from "@/lib/data";
import {
  TextReveal,
  ScaleReveal,
  ScrollReveal,
  StaggerReveal,
  MarqueeReveal,
} from "@/components/scroll-reveal";

const contactMarquee =
  "LET\u2019S WORK TOGETHER \u00B7 azurem.ux@gmail.com \u00B7 SEATTLE, WA \u00B7 ";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("https://formsubmit.co/ajax/azurem.ux@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      {/* Giant typographic header */}
      <section className="pt-28 pb-8 px-6 max-w-5xl mx-auto">
        <h1 className="font-display font-bold leading-[0.9] tracking-tight">
          <ScaleReveal delay={100} duration={1200}>
            <span
              className="block text-outline"
              style={{ fontSize: "clamp(4rem, 14vw, 12rem)" }}
            >
              LET&apos;S
            </span>
          </ScaleReveal>
          <TextReveal delay={300} duration={1200}>
            <span
              className="block text-accent"
              style={{ fontSize: "clamp(4rem, 14vw, 12rem)" }}
            >
              TALK
            </span>
          </TextReveal>
        </h1>
      </section>

      {/* Contact details + form */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <ScrollReveal delay={400} duration={800} distance={20}>
          <div className="flex items-center gap-4 mb-10">
            <div className="w-12 h-[2px] bg-accent" />
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted">
              Get in touch
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-16 md:grid-cols-2">
          {/* Left: contact info */}
          <ScrollReveal delay={500} duration={800} distance={30}>
            <div className="space-y-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="block font-display text-xl md:text-2xl font-medium text-accent hover:text-accent-hover transition-colors tracking-tight"
              >
                {personalInfo.email}
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block font-body text-sm text-foreground hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
              <p className="font-body text-sm text-muted">
                {personalInfo.location}
              </p>
            </div>
          </ScrollReveal>

          {/* Right: form */}
          <StaggerReveal staggerDelay={120} baseDelay={500} direction="up" distance={30}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block font-body text-xs tracking-[0.2em] uppercase text-muted"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-0 border-b border-border-line bg-transparent px-0 py-3 font-body text-sm text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-accent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block font-body text-xs tracking-[0.2em] uppercase text-muted"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-0 border-b border-border-line bg-transparent px-0 py-3 font-body text-sm text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-accent"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block font-body text-xs tracking-[0.2em] uppercase text-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none border-0 border-b border-border-line bg-transparent px-0 py-3 font-body text-sm text-foreground outline-none transition-colors placeholder:text-muted/50 focus:border-accent"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className="font-body text-sm tracking-widest uppercase text-accent border-b border-accent pb-1 hover:text-accent-hover hover:border-accent-hover transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "sent"
                  ? "Message Sent!"
                  : "Send Message →"}
              </button>
              {status === "error" && (
                <p className="font-body text-sm text-red-500 mt-2">
                  Something went wrong. Please try emailing me directly.
                </p>
              )}
            </form>
          </StaggerReveal>
        </div>
      </section>

      {/* Bottom marquee */}
      <MarqueeReveal>
        <section className="py-6 border-y border-border-line">
          <div className="marquee-container">
            <div className="marquee-track-reverse">
              <span className="font-display text-base md:text-xl font-light tracking-[0.25em] uppercase text-foreground">
                {contactMarquee.repeat(10)}
              </span>
              <span className="font-display text-base md:text-xl font-light tracking-[0.25em] uppercase text-foreground">
                {contactMarquee.repeat(10)}
              </span>
            </div>
          </div>
        </section>
      </MarqueeReveal>
    </div>
  );
}
