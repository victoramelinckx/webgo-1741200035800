import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Webgo",
  description: "Webgo es una empresa que crea paginas webs expertas en vender 100% optimizadas en velocidad, textos persuasivos, tecnologia y sistemas AI",
  themeColor: "#000000",
  openGraph: {
    title: "Webgo",
    description: "Webgo es una empresa que crea paginas webs expertas en vender 100% optimizadas en velocidad, textos persuasivos, tecnologia y sistemas AI",
    url: "https://webgo-1741200035800.vercel.app",
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${dmSans.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}