import type { Metadata } from "next";
import { Manrope, Inter, Source_Sans_3, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-source-sans",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Niqo Services — Cabinet de services numériques",
  description:
    "Conception et livraison de plateformes sur-mesure pour les institutions premium. Afrique francophone, siège en République du Congo.",
  metadataBase: new URL("https://niqo-services.com"),
  alternates: {
    canonical: "/",
    languages: {
      fr: "/",
      en: "/en",
      "x-default": "/",
    },
  },
  openGraph: {
    title: "Niqo Services",
    description: "Cabinet de services numériques · Afrique francophone",
    images: ["/brand/social/og-image-1200x630.png"],
    locale: "fr_FR",
    alternateLocale: ["en_US"],
    type: "website",
    url: "https://niqo-services.com",
  },
  icons: {
    icon: [
      { url: "/brand/favicons/favicon-32.png", sizes: "32x32" },
      { url: "/brand/favicons/favicon-16.png", sizes: "16x16" },
    ],
    apple: "/brand/favicons/apple-touch-icon-180.png",
  },
  manifest: "/brand/favicons/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${manrope.variable} ${inter.variable} ${sourceSans.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
