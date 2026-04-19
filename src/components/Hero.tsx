import { motion } from "framer-motion";
import heroImg from "@/assets/hero-photographer.jpg";

export function Hero() {
  return (
    <section id="top" className="relative h-[100svh] w-full overflow-hidden grain">
      <motion.img
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.4, ease: [0.2, 0.8, 0.2, 1] }}
        src={heroImg}
        alt="Fotógrafo profesional capturando paisaje al amanecer"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Side meta */}
      <div className="absolute left-6 top-1/2 hidden -translate-y-1/2 md:block">
        <span className="vertical-text text-[10px] uppercase tracking-[0.4em] text-foreground/60">
          Est. 2014 — Fotografía Profesional
        </span>
      </div>
      <div className="absolute right-6 top-1/2 hidden -translate-y-1/2 md:block">
        <span className="vertical-text text-[10px] uppercase tracking-[0.4em] text-foreground/60">
          Volumen 01 / Portfolio
        </span>
      </div>

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 pt-28 md:px-16 md:pb-24 md:pt-32">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6 text-xs uppercase tracking-[0.4em] text-amber"
        >
          ● Disponible para nuevos proyectos
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          className="max-w-5xl font-display text-[3.25rem] leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-[6.5rem]"
        >
          Capturando momentos
          <br />
          que cuentan <em className="text-amber not-italic font-light">historias</em>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-base text-foreground/70 md:text-lg">
            Fotografía profesional para eventos, marcas y proyectos creativos —
            con la mirada de un narrador visual.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-3 bg-foreground px-7 py-4 text-xs uppercase tracking-[0.2em] text-background transition-all hover:bg-amber"
            >
              Ver portafolio
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 border border-foreground/40 px-7 py-4 text-xs uppercase tracking-[0.2em] text-foreground transition-all hover:border-amber hover:text-amber"
            >
              Contáctame
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/50">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="h-8 w-px bg-foreground/40"
        />
      </motion.div>
    </section>
  );
}
