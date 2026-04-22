import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function CtaContact() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], ["-30%", "10%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["10%", "-30%"]);

  return (
    <>
      {/* CTA */}
      <section
        ref={ref}
        className="relative overflow-hidden border-t border-border px-6 py-32 md:px-12 md:py-48"
      >
        <div className="absolute inset-0 bg-gradient-amber opacity-[0.06]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,oklch(0.78_0.14_65/0.12)_0%,transparent_60%)]" />

        <div className="relative mx-auto max-w-[1600px]">
          <motion.div
            style={{ x: x1 }}
            className="pointer-events-none whitespace-nowrap font-display text-[14vw] font-extralight italic leading-none text-amber/20"
          >
            ¿Listo para
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="relative -my-4 text-center"
          >
            <h2 className="mx-auto max-w-5xl font-display text-[3.5rem] font-light leading-[0.9] tracking-[-0.04em] md:text-[10rem]">
              capturar tu
            </h2>
          </motion.div>

          <motion.div
            style={{ x: x2 }}
            className="pointer-events-none whitespace-nowrap text-right font-display text-[14vw] font-extralight italic leading-none text-amber"
          >
            historia?
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="mt-16 flex flex-col items-center gap-8"
          >
            <p className="mx-auto max-w-xl text-center text-base leading-relaxed text-foreground/60 md:text-lg">
              Cuéntame tu idea. Reservas limitadas cada mes para garantizar
              dedicación total a cada proyecto.
            </p>
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-4 overflow-hidden bg-foreground px-12 py-6 text-xs uppercase tracking-[0.3em] text-background"
            >
              <span className="absolute inset-0 origin-left scale-x-0 bg-amber transition-transform duration-700 ease-out group-hover:scale-x-100" />
              <span className="relative">Solicitar sesión</span>
              <span className="relative transition-transform duration-500 group-hover:translate-x-2">
                →
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative border-t border-border px-6 py-32 md:px-12 md:py-44"
      >
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12 md:gap-20">
            <div className="md:col-span-5">
              <span className="mb-6 block text-xs uppercase tracking-[0.4em] text-amber">
                ● 05 — Contacto
              </span>
              <h2 className="font-display text-5xl font-light leading-[0.95] tracking-[-0.04em] md:text-7xl">
                Hablemos
                <span className="text-amber">.</span>
              </h2>
              <p className="mt-8 max-w-md text-foreground/60 md:text-lg md:leading-relaxed">
                Respondo en menos de 24 horas. Para presupuestos, indícame
                fecha tentativa y tipo de evento.
              </p>
              <div className="mt-12 inline-flex items-center gap-3 border border-amber/40 px-4 py-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-amber" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-amber">
                  Agenda abierta
                </span>
              </div>
            </div>

            <div className="md:col-span-7">
              <ul className="divide-y divide-border border-y border-border">
                <ContactRow
                  label="WhatsApp"
                  value="+503 7123 4567"
                  href="https://wa.me/50371234567"
                />
                <ContactRow
                  label="Email"
                  value="hola@lumenstudio.sv"
                  href="mailto:hola@lumenstudio.sv"
                />
                <ContactRow
                  label="Instagram"
                  value="@lumen.studio"
                  href="https://instagram.com"
                />
                <ContactRow
                  label="TikTok"
                  value="@lumen.studio"
                  href="https://tiktok.com/@lumen.studio"
                />
                <ContactRow
                  label="Facebook"
                  value="/lumenstudio.sv"
                  href="https://facebook.com"
                />
                <ContactRow
                  label="Estudio"
                  value="Calle La Reforma #245 — San Salvador"
                  href="#"
                />
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href: string;
}) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group relative flex items-center justify-between overflow-hidden py-7 transition-colors md:px-6 md:py-9"
      >
        <span className="absolute inset-0 origin-left scale-x-0 bg-card transition-transform duration-700 ease-out group-hover:scale-x-100" />
        <span className="relative text-[10px] uppercase tracking-[0.3em] text-foreground/50">
          {label}
        </span>
        <span className="relative flex items-center gap-4 font-display text-2xl font-light tracking-tight text-foreground transition-colors group-hover:text-amber md:text-3xl">
          {value}
          <span className="text-foreground/30 transition-all group-hover:translate-x-2 group-hover:text-amber">
            →
          </span>
        </span>
      </a>
    </li>
  );
}
