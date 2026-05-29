import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { ClientStrip } from "./components/ClientStrip";
import { Services } from "./components/Services";
import { CaseStudy } from "./components/CaseStudy";
import { Products } from "./components/Products";
import { Approach } from "./components/Approach";
import { Founders } from "./components/Founders";
import { Cta } from "./components/Cta";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header locale="fr" />
      <Hero locale="fr" />
      <ClientStrip locale="fr" />
      <Services locale="fr" />
      <CaseStudy locale="fr" />
      <Products locale="fr" />
      <Approach locale="fr" />
      <Founders locale="fr" />
      <Cta locale="fr" />
      <Footer locale="fr" />
    </>
  );
}
