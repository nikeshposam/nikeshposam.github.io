import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolageSans = Bricolage_Grotesque({
  variable: "--font-bricolage-sans",
  subsets: ["latin"],
});

const bricolageMono = Bricolage_Grotesque({
  variable: "--font-bricolage-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikesh Posam | Fullstack Engineer",
  description: "Experienced tech professional skilled in leading development teams, ensuring code quality, project estimation, and delivering scalable, high-quality software solutions on time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bricolageSans.variable} ${bricolageMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
