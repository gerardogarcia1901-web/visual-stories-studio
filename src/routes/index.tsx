import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { CtaContact } from "@/components/CtaContact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lúmen Studio — Fotógrafo profesional en Bogotá | Bodas, Retratos, Comercial" },
      {
        name: "description",
        content:
          "Fotógrafo profesional en Bogotá especializado en bodas, retratos, eventos y fotografía comercial. Sesiones cinematográficas, edición fina y mirada editorial.",
      },
      { name: "keywords", content: "fotógrafo en Bogotá, fotografía profesional, fotógrafo de bodas, sesiones fotográficas, fotografía comercial, retratos profesionales" },
      { property: "og:title", content: "Lúmen Studio — Fotógrafo profesional" },
      { property: "og:description", content: "Capturando momentos que cuentan historias. Bodas, retratos, eventos y comercial." },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-cover.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <Hero />
      <Portfolio />
      <About />
      <Services />
      <Testimonials />
      <CtaContact />
      <Footer />
    </main>
  );
}
