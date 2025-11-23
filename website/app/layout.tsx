import type { Metadata } from "next";
import { Architects_Daughter, Inter } from "next/font/google";
import "./globals.css";

const architectsDaughter = Architects_Daughter({
  weight: "400",
  variable: "--font-architects",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Engineering Code Summit",
  description: "Post-conference digital garden and insights.",
};

import Header from "@/components/Header";

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${architectsDaughter.variable} ${inter.variable} antialiased font-sans`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
