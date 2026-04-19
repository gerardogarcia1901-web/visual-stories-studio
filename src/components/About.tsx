import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import portrait from "@/assets/photographer-portrait.jpg";

export function About() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const labelX = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden border-t border-border bg-card/30 px-6 py-32 md:px-12 md:py-44"
    >
      {/* Sliding word */}
      <motion.div
        style={{ x: labelX }}
        className="pointer-events-none absolute top-12 select-none whitespace-nowrap font-display text-[16vw] font-extralight leading-none tracking-tighter text-foreground/[0.04]"
      >
        El fotógrafo · El fotógrafo · El fotógrafo
      </motion.div>

      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 gap-16 md:grid-cols-12 md:gap-24">
        <motion.div
          style={{ y: portraitY }}
          className="md:col-span-5"
        >
          <div className="relative">
            <motion.div
              initial={{ clipPath: "inset(100% 0 0 0)" }}
              whileInView={{ clipPath: "inset(0% 0 0 0)" }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: [0.7, 0, 0.2, 1] }}
              className="hover-zoom relative aspect-[3/4] overflow-hidden bg-card shadow-cinematic"
            >
              <img
                src={portrait}
                alt="Retrato del fotógrafo profesional con cámara"
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_60%,oklch(0_0_0/0.5)_100%)]" />
            </motion.div>

            {/* Floating signature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              className="absolute -bottom-8 -right-4 hidden border border-amber/40 bg-background/90 px-7 py-5 shadow-amber backdrop-blur-md md:block"
            >
              <div className="font-display text-5xl font-extralight italic text-amber">
                10+
              </div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/70">
                Años de oficio
              </div>
            </motion.div>

            {/* Top tag */}
            <div className="absolute -top-4 left-4 bg-background px-4 py-2 text-[10px] uppercase tracking-[0.3em] text-amber">
              Mateo Ríos
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:col-span-7 md:pt-20"
        >
          <span className="mb-6 block text-xs uppercase tracking-[0.4em] text-amber">
            ● 02 — Sobre el autor
          </span>
          <h2 className="font-display text-5xl font-light leading-[0.95] tracking-[-0.04em] md:text-7xl lg:text-8xl">
            La cámara
            <br />
            es solo la
            <br />
            <em className="font-extralight italic text-amber">excusa.</em>
          </h2>

          <div className="mt-12 max-w-xl space-y-6 text-base leading-relaxed text-foreground/70 md:text-lg">
            <p className="first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:font-light first-letter:leading-[0.85] first-letter:text-amber">
              Soy <span className="text-foreground">Mateo Ríos</span>, fotógrafo
              con más de una década dedicada a buscar la luz justa, el gesto
              involuntario, el segundo donde todo cuadra. Trabajo entre lo
              documental y lo cinematográfico.
            </p>
            <p>
              Cada fotografía es una historia. Mi objetivo no es retratar lo
              perfecto, sino capturar la emoción real — esa que se escapa entre
              poses y se queda para siempre en una imagen.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-px bg-border md:grid-cols-4">
            {[
              ["240+", "Sesiones"],
              ["80+", "Bodas"],
              ["35+", "Marcas"],
              ["12", "Premios"],
            ].map(([n, l], i) => (
              <motion.div
                key={l}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                className="bg-card/30 p-6"
              >
                <div className="font-display text-4xl font-extralight text-foreground md:text-5xl">
                  {n}
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-foreground/50">
                  {l}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
