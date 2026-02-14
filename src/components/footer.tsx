"use client";

export function Footer() {
  const items = "AZURE MALM \u00B7 HEAD OF DESIGN \u00B7 SEATTLE \u00B7 azurem.ux@gmail.com \u00B7 ";
  const repeated = items.repeat(8);

  return (
    <footer className="py-4 border-t border-border-line">
      <div className="marquee-container">
        <div className="marquee-track">
          <span className="font-display text-xs font-light tracking-[0.3em] uppercase text-muted pr-2">
            {repeated}
          </span>
          <span className="font-display text-xs font-light tracking-[0.3em] uppercase text-muted pr-2">
            {repeated}
          </span>
        </div>
      </div>
    </footer>
  );
}
