import type { Metadata } from "next";
import { Inter, Fira_Code, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira-code" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata: Metadata = {
  title: "Hunny Jain | Python Developer & AI Enthusiast",
  description: "Software Engineer with 3+ years experience specializing in Python Backend Development, Django, and AI",
  keywords: "Hunny Jain, Python Developer, Backend Engineer, Django, FastAPI, AWS, GCP, AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${firaCode.variable} ${jetbrainsMono.variable} font-sans bg-[#1e1e1e] text-white min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
