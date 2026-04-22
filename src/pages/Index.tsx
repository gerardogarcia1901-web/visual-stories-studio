import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { CtaContact } from "@/components/CtaContact";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <>
      <Helmet>
        <title>Lúmen Studio — Fotógrafo profesional | Bodas, Retratos, Comercial</title>
        <meta
          name="description"
          content="Fotógrafo profesional especializado en bodas, retratos, eventos y fotografía comercial. Sesiones cinematográficas, edición fina y mirada editorial."
        />
        <meta
          name="keywords"
          content="fotógrafo profesional, fotografía profesional, fotógrafo de bodas, sesiones fotográficas, fotografía comercial, retratos profesionales"
        />
        <meta property="og:title" content="Lúmen Studio — Fotógrafo profesional" />
        <meta
          property="og:description"
          content="Capturando momentos que cuentan historias. Bodas, retratos, eventos y comercial."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og-cover.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
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
    </>
  );
}
