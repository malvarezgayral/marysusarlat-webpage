import type { Metadata } from "next";
import { Inter, Grey_Qo } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { LanguageToggle } from "@/components/LanguageToggle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const greyQo = Grey_Qo({
  weight: "400",
  variable: "--font-grey-qo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "María Susarlat",
  description: "Proyectos de arquitectura y diseño con un enfoque atemporal y esencial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${greyQo.variable} antialiased bg-background text-foreground`}
      >
        <Providers>
          <LanguageToggle />
          {children}
        </Providers>
      </body>
    </html>
  );
}
