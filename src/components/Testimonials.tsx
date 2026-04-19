import { motion } from "framer-motion";

const items = [
  {
    quote:
      "Mateo capturó nuestra boda como nadie hubiera podido. Cada foto es una emoción intacta, un recuerdo que vuelve cada vez que abrimos el álbum.",
    name: "Lucía & Andrés",
    role: "Boda en Cartagena",
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
    <section className="relative px-6 py-32 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <span className="mb-4 block text-xs uppercase tracking-[0.4em] text-amber">
          ● 04 — Palabras
        </span>
        <h2 className="mb-16 font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
          Lo que dicen<br />
          <em className="font-light not-italic text-foreground/60">de mi trabajo.</em>
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {items.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.15 }}
              className="border-t border-border pt-8"
            >
              <div className="mb-6 font-display text-5xl leading-none text-amber">"</div>
              <blockquote className="font-display text-xl leading-snug tracking-tight md:text-2xl">
                {t.quote}
              </blockquote>
              <figcaption className="mt-8">
                <div className="text-sm text-foreground">{t.name}</div>
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
