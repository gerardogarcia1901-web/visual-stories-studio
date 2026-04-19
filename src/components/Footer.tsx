export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border px-6 py-12 md:px-12">
      <div className="mx-auto max-w-[1600px]">
        <div className="overflow-hidden py-16">
          <div className="marquee flex whitespace-nowrap font-display text-[18vw] leading-none tracking-tighter text-foreground/[0.06]">
            <span className="px-8">LÚMEN — STUDIO —</span>
            <span className="px-8">LÚMEN — STUDIO —</span>
          </div>
        </div>

        <div className="flex flex-col gap-6 border-t border-border pt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-xl">Lúmen</span>
            <span className="text-amber">●</span>
            <span className="ml-3 text-[10px] uppercase tracking-[0.3em] text-foreground/40">
              Studio de fotografía
            </span>
          </div>

          <div className="flex gap-6 text-[10px] uppercase tracking-[0.3em] text-foreground/60">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-amber">
              Instagram
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-amber">
              Facebook
            </a>
            <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-amber">
              TikTok
            </a>
            <a href="mailto:hola@lumenstudio.sv" className="transition-colors hover:text-amber">
              Email
            </a>
          </div>

          <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">
            © {new Date().getFullYear()} Lúmen Studio · El Salvador
          </p>
        </div>
      </div>
    </footer>
  );
}
