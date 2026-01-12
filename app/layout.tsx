import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { TransitionProvider } from "@/components/TransitionProvider";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Portfolio · Développeur Web & Automatisation",
  description: "Portfolio premium dark luxury tech avec automatisation n8n et apps modernes."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-base text-white antialiased">
        <Navbar />
        <TransitionProvider>
          <main className="pt-16">{children}</main>
        </TransitionProvider>
        <Footer />
      </body>
    </html>
  );
}
