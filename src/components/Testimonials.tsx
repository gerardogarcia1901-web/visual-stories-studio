import { motion } from "framer-motion";

const items = [
  {
    quote:
      "Mateo capturó nuestra boda como nadie hubiera podido. Cada foto es una emoción intacta, un recuerdo que vuelve cada vez que abrimos el álbum.",
    name: "Lucía & Andrés",
    role: "Boda en Playa El Tunco",
  },
  {
    quote:
      "Profesional, sensible y con una mirada única. Las fotos de la campaña superaron todo lo que esperábamos para la marca.",
    name: "Camila Restrepo",
    role: "Directora — Atelier Norte",
  },
  {
    quote:
      "Una sesión que se sintió como una conversación. El resultado: retratos que finalmente se sienten como yo.",
    name: "Daniel Vega",
    role: "Músico",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden border-t border-border px-6 py-32 md:px-12 md:py-44">
      {/* Massive quote */}
      <div className="pointer-events-none absolute -left-8 top-12 select-none font-display text-[20rem] font-extralight leading-none text-amber/[0.08] md:-left-12 md:text-[32rem]">
        "
      </div>

      <div className="relative mx-auto max-w-[1600px]">
        <div className="mb-20 flex flex-col gap-6">
          <span className="block text-xs uppercase tracking-[0.4em] text-amber">
            ● 04 — Palabras
          </span>
          <h2 className="font-display text-[3.5rem] font-light leading-[0.9] tracking-[-0.04em] md:text-[7rem]">
            Lo que dicen
            <br />
            <em className="font-extralight italic text-foreground/40">
              de mi trabajo
            </em>
            <span className="text-amber">.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-16">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.15, ease: [0.2, 0.8, 0.2, 1] }}
              className={`relative ${i === 1 ? "md:mt-16" : ""}`}
            >
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px flex-1 bg-amber/40" />
                <span className="text-[10px] uppercase tracking-[0.4em] text-amber">
                  0{i + 1}
                </span>
              </div>
              <blockquote className="font-display text-2xl font-light leading-snug tracking-tight md:text-[1.75rem]">
                <span className="text-amber">"</span>
                {t.quote}
                <span className="text-amber">"</span>
              </blockquote>
              <figcaption className="mt-10 border-t border-border pt-6">
                <div className="font-display text-xl text-foreground">
                  {t.name}
                </div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-foreground/50">
                  {t.role}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
