import type { Metadata } from "next";
import { Inter, Playfair_Display, Grey_Qo } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
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
        className={`${inter.variable} ${playfair.variable} ${greyQo.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
