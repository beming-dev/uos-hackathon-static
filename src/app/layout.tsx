import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
const seoulNamsan = localFont({
  src: [
    {
      path: "./fonts/SeoulNamsanvert.ttf",
      weight: "100",
    },
    {
      path: "./fonts/SeoulNamsanM.ttf",
      weight: "300",
    },
    {
      path: "./fonts/SeoulNamsanL.ttf",
      weight: "500",
    },
    {
      path: "./fonts/SeoulNamsanEB.ttf",
      weight: "700",
    },
    {
      path: "./fonts/SeoulNamsanB.ttf",
      weight: "900",
    },
  ],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="w-screen h-screen">
      <body className={`${seoulNamsan.variable} antialiased w-full h-full`}>
        <main className="relative container mx-auto max-w-xs h-full m-0">
          {children}
        </main>
        <Navigation />
      </body>
    </html>
  );
}
