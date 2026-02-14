"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Work" },
  { href: "/brands", label: "Brands" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Fixed top bar: logo + nav left, CTA right */}
      <header
        className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "rgba(255, 253, 247, 0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
          boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="font-display text-lg font-bold tracking-tight text-foreground"
          >
            AM
          </Link>

          {/* Desktop nav — just small text links in a row */}
          <nav className="hidden md:flex items-center gap-5">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-body text-xs tracking-widest uppercase transition-colors ${
                    isActive
                      ? "text-accent"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden flex flex-col gap-[5px] w-5"
            aria-label="Open menu"
          >
            <span className="block h-[1.5px] w-full bg-foreground" />
            <span className="block h-[1.5px] w-full bg-foreground" />
          </button>
        </div>

        {/* Contact CTA — right side */}
        <Link
          href="/contact"
          className="hidden md:inline-block font-body text-xs font-semibold tracking-widest uppercase px-6 py-2.5 border-2 border-foreground text-foreground rounded-full hover:bg-foreground hover:text-background transition-colors"
        >
          Contact Me
        </Link>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-background flex flex-col">
          <div className="flex items-center justify-between px-6 py-5">
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              AM
            </span>
            <button
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X className="h-5 w-5 text-foreground" />
            </button>
          </div>
          <nav className="flex flex-col items-start px-6 pt-12 gap-6">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`font-display text-4xl font-light tracking-tight transition-colors ${
                    isActive ? "text-accent" : "text-foreground hover:text-accent"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
