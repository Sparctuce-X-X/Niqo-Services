import type { Metadata } from "next";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { ClientStrip } from "../components/ClientStrip";
import { Services } from "../components/Services";
import { CaseStudy } from "../components/CaseStudy";
import { Products } from "../components/Products";
import { Approach } from "../components/Approach";
import { Founders } from "../components/Founders";
import { Cta } from "../components/Cta";
import { Footer } from "../components/Footer";

export const metadata: Metadata = {
  title: "Niqo Services — Digital engineering firm",
  description:
    "Bespoke design and delivery of platforms for premium institutions. French-speaking Africa, headquartered in the Republic of Congo.",
  alternates: {
    canonical: "/en",
    languages: {
      fr: "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Niqo Services",
    description: "Digital engineering firm · French-speaking Africa",
    images: ["/brand/social/og-image-1200x630.png"],
    locale: "en_US",
    type: "website",
    url: "https://niqo-services.com/en",
  },
};

export default function HomeEn() {
  return (
    <>
      <Header locale="en" />
      <Hero locale="en" />
      <ClientStrip locale="en" />
      <Services locale="en" />
      <CaseStudy locale="en" />
      <Products locale="en" />
      <Approach locale="en" />
      <Founders locale="en" />
      <Cta locale="en" />
      <Footer locale="en" />
    </>
  );
}
