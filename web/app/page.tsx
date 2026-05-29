import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ClientStrip } from "./components/ClientStrip";
import { Services } from "./components/Services";
import { CaseStudy } from "./components/CaseStudy";
import { Approach } from "./components/Approach";
import { Founders } from "./components/Founders";
import { Cta } from "./components/Cta";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ClientStrip />
      <Services />
      <CaseStudy />
      <Approach />
      <Founders />
      <Cta />
      <Footer />
    </>
  );
}
