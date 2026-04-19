import { motion } from "framer-motion";

const services = [
  {
    n: "01",
    title: "Bodas",
    desc: "Cobertura cinematográfica del día más importante. Edición fina, entrega rápida, recuerdos eternos.",
    tags: ["Día completo", "Película", "Álbum"],
  },
  {
    n: "02",
    title: "Eventos",
    desc: "Lanzamientos, conciertos y celebraciones corporativas con mirada editorial y entrega exprés.",
    tags: ["Cobertura", "Reportaje", "Express"],
  },
  {
    n: "03",
    title: "Sesiones personales",
    desc: "Retratos honestos en estudio o exteriores. Para quienes buscan una imagen con identidad.",
    tags: ["Retrato", "Familia", "Maternidad"],
  },
  {
    n: "04",
    title: "Comercial",
    desc: "Fotografía de producto, lookbooks y campañas para marcas que comunican con imagen.",
    tags: ["Producto", "Lookbook", "Branding"],
  },
];

export function Services() {
  return (
    <section id="services" className="relative border-y border-border bg-card/40 px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <span className="mb-4 block text-xs uppercase tracking-[0.4em] text-amber">
              ● 03 — Servicios
            </span>
            <h2 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Lo que<br />
              <em className="font-light not-italic text-foreground/60">ofrezco.</em>
            </h2>
          </div>
          <p className="max-w-md self-end text-sm text-foreground/60 md:text-base">
            Cuatro disciplinas, una misma obsesión: contar tu historia con la
            estética y honestidad que merece.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
          {services.map((s, i) => (
            <motion.article
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative bg-background p-8 transition-colors hover:bg-card md:p-12"
            >
              <div className="flex items-baseline justify-between">
                <span className="font-display text-sm text-amber">{s.n}</span>
                <span className="text-foreground/30 transition-all duration-500 group-hover:translate-x-2 group-hover:text-amber">
                  →
                </span>
              </div>
              <h3 className="mt-8 font-display text-4xl tracking-tight md:text-5xl">
                {s.title}
              </h3>
              <p className="mt-4 max-w-md text-foreground/60">{s.desc}</p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <li
                    key={t}
                    className="border border-border px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-foreground/60"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
