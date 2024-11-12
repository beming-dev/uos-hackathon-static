import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { Suspense } from "react";
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
  title: "서울도서이음",
  description: "편리한 서울시 도서관 이용 앱",
  icons: {
    icon: "/favicon.png",
  },
  metadataBase: new URL("https://uos-hackathon-static.vercel.app"),
  openGraph: {
    images: [
      {
        url: "/logo.png",
        alt: "로고",
      },
    ],
  },
  twitter: {
    images: [
      {
        url: "/logo.png",
        alt: "로고",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="light w-screen h-screen no-scrollbar flex justify-center items-center text-black"
    >
      <body
        className={`${seoulNamsan.variable} antialiased w-full h-full flex justify-center items-center max-w-lg relative`}
      >
        <main className="container mx-auto max-w-xs h-full m-0">
          <Suspense fallback={<div>Loading..</div>}>{children}</Suspense>
          <Navigation />
        </main>
      </body>
    </html>
  );
}
