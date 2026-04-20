import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroImg from "@/assets/hero-photographer.jpg";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative h-[100svh] w-full overflow-hidden grain"
    >
      <motion.div
        style={{ y: imgY, scale: imgScale }}
        className="absolute inset-0 h-[120%] w-full"
      >
        <motion.img
          initial={{ scale: 1.25, filter: "blur(20px)" }}
          animate={{ scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 2.4, ease: [0.2, 0.8, 0.2, 1] }}
          src={heroImg}
          alt="Fotógrafo profesional capturando paisaje al amanecer"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,oklch(0.13_0.005_60/0.6)_0%,transparent_70%)]" />

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

      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-10 flex h-full flex-col justify-end px-6 pb-16 pt-40 md:px-16 md:pb-24 md:pt-48"
      >
        <div className="overflow-hidden">
          <motion.span
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 block text-xs uppercase tracking-[0.4em] text-amber"
          >
            ● Disponible para nuevos proyectos
          </motion.span>
        </div>

        <h1 className="max-w-[95%] font-display text-[3.25rem] font-light leading-[0.92] tracking-[-0.04em] sm:text-6xl md:text-[6rem] lg:text-[8rem] xl:text-[9.5rem]">
          {["Capturando", "momentos", "que cuentan"].map((word, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{
                  duration: 1.1,
                  delay: 0.5 + i * 0.12,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className="block"
              >
                {word}
              </motion.span>
            </span>
          ))}
          <span className="block overflow-hidden">
            <motion.em
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 1.1,
                delay: 0.86,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className="block font-display font-extralight italic text-amber"
            >
              historias.
            </motion.em>
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="mt-12 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between"
        >
          <p className="max-w-md text-base leading-relaxed text-foreground/70 md:text-lg">
            Fotografía profesional para eventos, marcas y proyectos creativos —
            con la mirada de un narrador visual.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#portfolio"
              className="group relative inline-flex items-center gap-3 overflow-hidden bg-foreground px-8 py-4 text-xs uppercase tracking-[0.25em] text-background transition-colors"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-amber transition-transform duration-700 ease-out group-hover:scale-x-100" />
              <span className="relative">Ver portafolio</span>
              <span className="relative transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-3 overflow-hidden border border-foreground/40 px-8 py-4 text-xs uppercase tracking-[0.25em] text-foreground transition-colors hover:border-amber hover:text-amber"
            >
              Contáctame
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-foreground/50">
          Desliza
        </span>
        <div className="relative h-12 w-px overflow-hidden bg-foreground/20">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{
              repeat: Infinity,
              duration: 2.2,
              ease: "easeInOut",
            }}
            className="absolute inset-x-0 h-1/2 bg-amber"
          />
        </div>
      </motion.div>
    </section>
  );
}
