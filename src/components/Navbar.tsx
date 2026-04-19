import { useEffect, useState } from "react";

const links = [
  { href: "#portfolio", label: "Portafolio" },
  { href: "#about", label: "Sobre mí" },
  { href: "#services", label: "Servicios" },
  { href: "#contact", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-xl border-b border-border"
          : "bg-gradient-to-b from-background/70 via-background/30 to-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-2xl tracking-tight">Lúmen</span>
          <span className="text-amber text-xs">●</span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-sm uppercase tracking-[0.2em] text-foreground/70 transition-colors hover:text-foreground"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-amber transition-all duration-500 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 border border-foreground/30 px-5 py-2.5 text-xs uppercase tracking-[0.2em] transition-all hover:border-amber hover:text-amber"
        >
          Reservar
        </a>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="md:hidden flex flex-col gap-1.5"
        >
          <span className={`h-px w-7 bg-foreground transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-px w-7 bg-foreground transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`h-px w-7 bg-foreground transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-t border-border">
          <ul className="flex flex-col gap-6 px-6 py-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  onClick={() => setOpen(false)}
                  href={l.href}
                  className="text-2xl font-display text-foreground/80"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
