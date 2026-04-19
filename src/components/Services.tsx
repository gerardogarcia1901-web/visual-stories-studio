import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  {
    n: "01",
    title: "Bodas",
    subtitle: "Cinematic Wedding",
    desc: "Cobertura cinematográfica del día más importante. Edición fina, entrega rápida, recuerdos eternos.",
    tags: ["Día completo", "Película", "Álbum"],
  },
  {
    n: "02",
    title: "Eventos",
    subtitle: "Live Coverage",
    desc: "Lanzamientos, conciertos y celebraciones corporativas con mirada editorial y entrega exprés.",
    tags: ["Cobertura", "Reportaje", "Express"],
  },
  {
    n: "03",
    title: "Sesiones",
    subtitle: "Personal Portraits",
    desc: "Retratos honestos en estudio o exteriores. Para quienes buscan una imagen con identidad.",
    tags: ["Retrato", "Familia", "Maternidad"],
  },
  {
    n: "04",
    title: "Comercial",
    subtitle: "Brand & Product",
    desc: "Fotografía de producto, lookbooks y campañas para marcas que comunican con imagen.",
    tags: ["Producto", "Lookbook", "Branding"],
  },
];

export function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-border px-6 py-32 md:px-12 md:py-44"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-20 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <span className="mb-6 block text-xs uppercase tracking-[0.4em] text-amber">
              ● 03 — Servicios
            </span>
            <h2 className="font-display text-[3.5rem] font-light leading-[0.9] tracking-[-0.04em] md:text-[8rem]">
              Lo que
              <br />
              <em className="font-extralight italic text-foreground/40">
                ofrezco
              </em>
              <span className="text-amber">.</span>
            </h2>
          </div>
          <p className="max-w-md self-end text-sm leading-relaxed text-foreground/60 md:text-base">
            Cuatro disciplinas, una misma obsesión: contar tu historia con la
            estética y honestidad que merece — sin atajos ni fórmulas.
          </p>
        </div>

        <div
          onMouseLeave={() => setHovered(null)}
          className="border-t border-border"
        >
          {services.map((s, i) => (
            <motion.article
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              onMouseEnter={() => setHovered(i)}
              className="group relative cursor-pointer border-b border-border"
            >
              {/* Slide-in fill */}
              <motion.span
                animate={{
                  scaleY: hovered === i ? 1 : 0,
                }}
                transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                className="absolute inset-0 origin-top bg-card"
              />
              <div className="relative grid grid-cols-12 items-center gap-6 px-2 py-10 md:py-14">
                <div className="col-span-2 md:col-span-1">
                  <span className="font-display text-sm text-amber">{s.n}</span>
                </div>

                <div className="col-span-10 md:col-span-4">
                  <h3 className="font-display text-4xl font-light leading-none tracking-[-0.03em] md:text-6xl">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.4em] text-foreground/40">
                    {s.subtitle}
                  </p>
                </div>

                <div className="col-span-12 md:col-span-5">
                  <p className="max-w-md text-sm leading-relaxed text-foreground/60 md:text-base">
                    {s.desc}
                  </p>
                </div>

                <div className="col-span-12 hidden md:col-span-2 md:flex md:justify-end">
                  <motion.div
                    animate={{
                      x: hovered === i ? 0 : -10,
                      opacity: hovered === i ? 1 : 0.3,
                    }}
                    transition={{ duration: 0.5 }}
                    className="flex h-14 w-14 items-center justify-center rounded-full border border-foreground/30 text-amber"
                  >
                    →
                  </motion.div>
                </div>

                <div className="col-span-12 md:col-span-12 md:col-start-2">
                  <ul className="flex flex-wrap gap-2 pt-4">
                    {s.tags.map((t) => (
                      <li
                        key={t}
                        className="border border-border/60 px-3 py-1 text-[10px] uppercase tracking-[0.25em] text-foreground/60"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
