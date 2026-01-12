import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TransitionProvider } from "@/components/TransitionProvider";
import { LoaderOverlay } from "@/components/LoaderOverlay";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"]
});
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Portfolio · Développeur Web & Automatisation",
  description: "Portfolio premium dark luxury tech avec automatisation n8n et apps modernes."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="relative isolate bg-base font-sans text-white antialiased">
        <LoaderOverlay />
        <Navbar />
        <TransitionProvider>
          <main className="pt-16">{children}</main>
        </TransitionProvider>
        <Footer />
        <div className="noise-overlay" aria-hidden="true" />
      </body>
    </html>
  );
}
