import { motion } from "framer-motion";
import { useState } from "react";
import p1 from "@/assets/portfolio-1.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import p11 from "@/assets/portfolio-11.jpg";

type Cat = "Todos" | "Bodas" | "Retratos" | "Eventos" | "Comercial";

const works: { src: string; alt: string; cat: Exclude<Cat, "Todos">; title: string; year: string; tall?: boolean }[] = [
  { src: p4, alt: "Pizza artesanal preparada por chef", cat: "Comercial", title: "Forno", year: "MMXXIV", tall: true },
  { src: p3, alt: "Carretera al atardecer con estela de luz", cat: "Eventos", title: "Velocidad", year: "MMXXIV" },
  { src: p11, alt: "Producto cosmético natural con hojas", cat: "Comercial", title: "Botanika", year: "MMXXIII", tall: true },
  { src: p6, alt: "Vista cenital de cancha de baloncesto urbana", cat: "Retratos", title: "Court", year: "MMXXIV" },
  { src: p1, alt: "Detalle macro de hoja tropical verde", cat: "Bodas", title: "Verde Vivo", year: "MMXXIII" },
  { src: p5, alt: "Trabajador agrícola entre cultivos verdes", cat: "Eventos", title: "Cosecha", year: "MMXXIII" },
];

const categories: Cat[] = ["Todos", "Bodas", "Retratos", "Eventos", "Comercial"];

export function Portfolio() {
  const [active, setActive] = useState<Cat>("Todos");
  const filtered = active === "Todos" ? works : works.filter((w) => w.cat === active);

  return (
    <section id="portfolio" className="relative px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <div className="mb-16 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="mb-4 block text-xs uppercase tracking-[0.4em] text-amber">
              ● 01 — Selección
            </span>
            <h2 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
              Trabajos<br />
              <em className="font-light not-italic text-foreground/60">recientes.</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-foreground/60">
            Una colección curada de proyectos donde la luz, el momento y la
            emoción se encuentran. Cada imagen, una historia propia.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-12 flex flex-wrap gap-2 border-b border-border pb-6">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.2em] transition-all ${
                active === c
                  ? "bg-foreground text-background"
                  : "text-foreground/60 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Editorial asymmetric grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
          {filtered.map((w, i) => {
            const layouts = [
              "md:col-span-7 md:row-span-2",
              "md:col-span-5",
              "md:col-span-5",
              "md:col-span-7",
              "md:col-span-6",
              "md:col-span-6",
            ];
            const span = layouts[i % layouts.length];
            return (
              <motion.figure
                key={`${w.src}-${i}`}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1, delay: (i % 3) * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
                className={`group relative ${span}`}
              >
                <div className="hover-zoom relative aspect-[4/5] w-full overflow-hidden bg-card md:aspect-auto md:h-full md:min-h-[420px]">
                  <img
                    src={w.src}
                    alt={w.alt}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-0 translate-y-4 p-6 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100 md:p-8">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-amber">
                      {w.cat}
                    </span>
                    <h3 className="mt-2 font-display text-3xl text-foreground md:text-4xl">
                      {w.title}
                    </h3>
                  </div>
                  <span className="absolute right-4 top-4 text-[10px] uppercase tracking-[0.3em] text-foreground/70">
                    {w.year}
                  </span>
                </div>
              </motion.figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
