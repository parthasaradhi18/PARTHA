import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SkyBackground } from "@/components/ui/sky-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MPS | Maddela Partha Saradhi - Portfolio",
  description: "Portfolio of Maddela Partha Saradhi, a Web Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen antialiased bg-black relative`}>
        <SkyBackground />
        {children}
      </body>
    </html>
  );
}
