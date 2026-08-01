import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { TranslationProvider } from "./TranslationContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Habesha Restaurant Bologna | Authentic Ethiopian & Eritrean Cuisine",
  description: "Experience the true taste of East Africa in Bologna with our authentic Ethiopian and Eritrean cuisine.",
  keywords: "Habesha Restaurant Bologna, Ethiopian Restaurant Bologna, Eritrean Restaurant Bologna, African Restaurant Bologna, Traditional Ethiopian Food",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-habesha-cream text-habesha-espresso`}>
        <TranslationProvider>
          {children}
        </TranslationProvider>
      </body>
    </html>
  );
}
