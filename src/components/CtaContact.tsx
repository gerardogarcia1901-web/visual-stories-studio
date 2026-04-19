import { motion } from "framer-motion";

export function CtaContact() {
  return (
    <>
      {/* CTA */}
      <section className="relative overflow-hidden px-6 py-32 md:px-12 md:py-44">
        <div className="absolute inset-0 bg-gradient-amber opacity-[0.08]" />
        <div className="mx-auto max-w-[1400px] text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <div className="mb-8 flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-amber" />
              <span className="text-xs uppercase tracking-[0.4em] text-amber">
                Próxima sesión
              </span>
              <span className="h-px w-16 bg-amber" />
            </div>
            <h2 className="mx-auto max-w-4xl font-display text-5xl leading-[0.95] tracking-tight md:text-8xl lg:text-9xl">
              ¿Listo para capturar
              <br />
              tu <em className="font-light not-italic text-amber">historia?</em>
            </h2>
            <p className="mx-auto mt-8 max-w-xl text-base text-foreground/60 md:text-lg">
              Cuéntame tu idea. Reservas limitadas cada mes para garantizar
              dedicación total a cada proyecto.
            </p>
            <a
              href="#contact"
              className="group mt-12 inline-flex items-center gap-4 bg-foreground px-10 py-5 text-xs uppercase tracking-[0.3em] text-background transition-all hover:bg-amber"
            >
              Solicitar sesión
              <span className="transition-transform group-hover:translate-x-2">→</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="relative border-t border-border px-6 py-32 md:px-12 md:py-40"
      >
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
            <div className="md:col-span-5">
              <span className="mb-4 block text-xs uppercase tracking-[0.4em] text-amber">
                ● 05 — Contacto
              </span>
              <h2 className="font-display text-5xl leading-[0.95] tracking-tight md:text-6xl">
                Hablemos.
              </h2>
              <p className="mt-6 max-w-md text-foreground/60">
                Respondo en menos de 24 horas. Para presupuestos, indícame
                fecha tentativa y tipo de evento.
              </p>
            </div>

            <div className="md:col-span-7">
              <ul className="divide-y divide-border border-y border-border">
                <ContactRow
                  label="WhatsApp"
                  value="+57 300 123 4567"
                  href="https://wa.me/573001234567"
                />
                <ContactRow
                  label="Email"
                  value="hola@lumenstudio.co"
                  href="mailto:hola@lumenstudio.co"
                />
                <ContactRow
                  label="Instagram"
                  value="@lumen.studio"
                  href="https://instagram.com"
                />
                <ContactRow
                  label="Estudio"
                  value="Carrera 11 #93-45 — Bogotá"
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

function ContactRow({ label, value, href }: { label: string; value: string; href: string }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group flex items-center justify-between py-6 transition-colors hover:bg-card md:py-8 md:px-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/50">
          {label}
        </span>
        <span className="flex items-center gap-4 font-display text-2xl tracking-tight text-foreground transition-colors group-hover:text-amber md:text-3xl">
          {value}
          <span className="text-foreground/30 transition-all group-hover:translate-x-2 group-hover:text-amber">
            →
          </span>
        </span>
      </a>
    </li>
  );
}
