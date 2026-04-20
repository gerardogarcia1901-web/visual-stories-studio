import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import p1 from "@/assets/portfolio-1.jpg";
import p3 from "@/assets/portfolio-3.jpg";
import p4 from "@/assets/portfolio-4.jpg";
import p5 from "@/assets/portfolio-5.jpg";
import p6 from "@/assets/portfolio-6.jpg";
import p11 from "@/assets/portfolio-11.jpg";

type Cat = "Todos" | "Bodas" | "Retratos" | "Eventos" | "Comercial";

type Work = {
  src: string;
  alt: string;
  cat: Exclude<Cat, "Todos">;
  title: string;
  year: string;
  num: string;
  location: string;
};

const works: Work[] = [
  { src: p4, alt: "Pizza artesanal preparada por chef", cat: "Comercial", title: "Forno Atelier", year: "2024", num: "001", location: "Roma, IT" },
  { src: p3, alt: "Carretera al atardecer con estela de luz", cat: "Eventos", title: "Velocidad", year: "2024", num: "002", location: "Stuttgart, DE" },
  { src: p11, alt: "Producto cosmético natural con hojas", cat: "Comercial", title: "Botanika", year: "2023", num: "003", location: "Lisboa, PT" },
  { src: p6, alt: "Vista cenital de cancha de baloncesto urbana", cat: "Retratos", title: "Court Stories", year: "2024", num: "004", location: "Barcelona, ES" },
  { src: p1, alt: "Detalle macro de hoja tropical verde", cat: "Bodas", title: "Verde Vivo", year: "2023", num: "005", location: "Tulum, MX" },
  { src: p5, alt: "Trabajador agrícola entre cultivos verdes", cat: "Eventos", title: "Cosecha", year: "2023", num: "006", location: "Chiang Mai, TH" },
];

const categories: Cat[] = ["Todos", "Bodas", "Retratos", "Eventos", "Comercial"];

export function Portfolio() {
  const [active, setActive] = useState<Cat>("Todos");
  const [hovered, setHovered] = useState<number | null>(null);
  const filtered = active === "Todos" ? works : works.filter((w) => w.cat === active);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden px-6 py-32 md:px-12 md:py-44"
    >
      {/* Massive background number */}
      <div className="pointer-events-none absolute -top-20 right-0 select-none font-display text-[20vw] font-extralight leading-none tracking-tighter text-foreground/[0.03] md:text-[14rem]">
        01
      </div>

      <div className="relative mx-auto max-w-[1600px]">
        <div className="mb-20 flex flex-col gap-10">
          <span className="block text-xs uppercase tracking-[0.4em] text-amber">
            ● 01 — Selección curada
          </span>

          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="font-display text-[3.5rem] font-light leading-[0.9] tracking-[-0.04em] md:text-[8rem]">
              Trabajos
              <br />
              <em className="font-extralight italic text-foreground/40">
                recientes
              </em>
              <span className="text-amber">.</span>
            </h2>
            <p className="max-w-sm text-sm leading-relaxed text-foreground/60 md:text-right">
              Una colección curada de proyectos donde la luz, el momento y la
              emoción se encuentran. Cada imagen — una historia propia.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-16 flex flex-wrap items-center gap-x-1 gap-y-2 border-y border-border py-4">
          <span className="mr-4 text-[10px] uppercase tracking-[0.3em] text-foreground/40">
            Filtrar /
          </span>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`relative px-5 py-2 text-xs uppercase tracking-[0.25em] transition-colors ${
                active === c
                  ? "text-amber"
                  : "text-foreground/50 hover:text-foreground"
              }`}
            >
              {active === c && (
                <motion.span
                  layoutId="filter-pill"
                  className="absolute inset-0 border border-amber"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative">{c}</span>
            </button>
          ))}
        </div>

        {/* Editorial alternating layout */}
        <div className="flex flex-col gap-32 md:gap-44">
          {filtered.map((w, i) => (
            <PortfolioItem
              key={`${w.src}-${i}`}
              work={w}
              index={i}
              isHovered={hovered === i}
              onHover={() => setHovered(i)}
              onLeave={() => setHovered(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioItem({
  work,
  index,
  isHovered,
  onHover,
  onLeave,
}: {
  work: Work;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

  const isOdd = index % 2 === 1;

  return (
    <motion.div
      ref={ref}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 1 }}
      className={`group grid grid-cols-12 items-center gap-6 md:gap-12 ${
        isOdd ? "md:[direction:rtl]" : ""
      }`}
    >
      <div
        className={`col-span-12 md:col-span-8 ${isOdd ? "md:[direction:ltr]" : ""}`}
      >
        <div className="relative">
          {/* Number behind */}
          <div
            className={`pointer-events-none absolute -top-12 ${
              isOdd ? "right-0 md:-right-6" : "left-0 md:-left-6"
            } z-10 select-none font-display text-7xl font-extralight text-foreground/30 md:text-9xl`}
          >
            {work.num}
          </div>

          <motion.div
            initial={{ clipPath: "inset(20% 0 0 0)", opacity: 0 }}
            whileInView={{ clipPath: "inset(0% 0 0 0)", opacity: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.2, ease: [0.7, 0, 0.2, 1] }}
            className="relative overflow-hidden bg-card shadow-cinematic"
          >
            <motion.div
              style={{ scale: imgScale }}
              className="aspect-[4/5] md:aspect-[16/10]"
            >
              <motion.img
                src={work.src}
                alt={work.alt}
                loading={index < 2 ? "eager" : "lazy"}
                animate={{
                  scale: isHovered ? 1.06 : 1,
                  filter: isHovered ? "brightness(1.05)" : "brightness(0.9)",
                }}
                transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1] }}
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Vignette */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,oklch(0_0_0/0.4)_100%)]" />

            {/* Hover overlay caption */}
            <motion.div
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/60 to-transparent p-6 md:p-10"
            >
              <div className="flex items-end justify-between">
                <span className="text-[10px] uppercase tracking-[0.4em] text-amber">
                  {work.cat}
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/60">
                  Ver caso →
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        style={{ y }}
        className={`col-span-12 md:col-span-4 ${isOdd ? "md:[direction:ltr]" : ""}`}
      >
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-amber" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-amber">
              {work.cat} · {work.year}
            </span>
          </div>
          <h3 className="font-display text-4xl font-light leading-[0.95] tracking-[-0.03em] md:text-5xl lg:text-6xl">
            {work.title}
          </h3>
          <p className="text-[11px] uppercase tracking-[0.3em] text-foreground/50">
            {work.location}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
