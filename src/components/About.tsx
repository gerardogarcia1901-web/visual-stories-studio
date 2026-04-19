import { motion } from "framer-motion";
import portrait from "@/assets/photographer-portrait.jpg";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 md:grid-cols-12 md:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
          className="md:col-span-5"
        >
          <div className="relative">
            <div className="hover-zoom aspect-[3/4] overflow-hidden bg-card shadow-cinematic">
              <img
                src={portrait}
                alt="Retrato del fotógrafo profesional con cámara"
                loading="lazy"
                width={1024}
                height={1280}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden border border-amber bg-background/80 px-6 py-4 backdrop-blur-md md:block">
              <div className="font-display text-4xl text-amber">10+</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-foreground/70">
                Años de oficio
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="md:col-span-7 md:pt-12"
        >
          <span className="mb-4 block text-xs uppercase tracking-[0.4em] text-amber">
            ● 02 — Sobre mí
          </span>
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
            La cámara es solo
            <br />
            la <em className="font-light not-italic text-amber">excusa.</em>
          </h2>

          <div className="mt-10 space-y-6 text-base text-foreground/70 md:text-lg md:leading-relaxed">
            <p>
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

          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-border pt-8 md:grid-cols-4">
            {[
              ["240+", "Sesiones"],
              ["80+", "Bodas"],
              ["35+", "Marcas"],
              ["12", "Premios"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-3xl text-foreground md:text-4xl">{n}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-foreground/50">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
