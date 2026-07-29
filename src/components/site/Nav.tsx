import { useState } from "react";
import logo from "@/assets/logo.jpg.asset.json";

const links = [
  { href: "#solusi", label: "Solusi" },
  { href: "#keunggulan", label: "Keunggulan" },
  { href: "#paket", label: "Paket" },
  { href: "#testimoni", label: "Testimoni" },
  { href: "#harga", label: "Harga" },
  { href: "#faq", label: "FAQ" },
];

export const WA_LINK =
  "https://wa.me/6282163775180?text=Halo%20CV.%20Furnama%20Tour%20Travel%2C%20saya%20ingin%20konsultasi%20gratis";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container-page grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3">
        <a href="#hero" className="flex min-w-0 items-center gap-3">
          <img
            src={logo.url}
            alt="Logo CV. Furnama Tour Travel"
            className="h-11 w-11 shrink-0 rounded-full object-cover ring-1 ring-border"
          />
          <span className="min-w-0">
            <span className="block truncate text-sm font-extrabold text-primary sm:text-base">
              CV. FURNAMA
            </span>
            <span className="block truncate text-[10px] font-semibold tracking-[0.28em] text-muted-foreground">
              TOUR TRAVEL
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-bold text-gold-foreground shadow-soft transition-transform hover:scale-[1.03]"
          >
            Konsultasi Gratis
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-card text-primary lg:hidden"
        >
          <span className="relative flex h-4 w-5 flex-col justify-between">
            <span
              className={`h-0.5 w-full origin-center rounded-full bg-current transition-all duration-300 ease-in-out ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-full origin-center rounded-full bg-current transition-all duration-300 ease-in-out ${
                open ? "scale-x-0 opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`h-0.5 w-full origin-center rounded-full bg-current transition-all duration-300 ease-in-out ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        className={`overflow-hidden border-border bg-card transition-[max-height,opacity] duration-300 ease-in-out lg:hidden ${
          open ? "max-h-[28rem] border-t opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-page flex flex-col gap-1 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-2 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="mt-2 rounded-full bg-gold-gradient px-5 py-3 text-center text-sm font-bold text-gold-foreground"
          >
            Konsultasi Gratis
          </a>
        </div>
      </div>
    </header>
  );
}
