import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css"
import Header from "@/components/layout/header";
import Hero from "@/components/layout/hero";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// className={`${geistSans.variable} ${geistMono.variable} antialiased`}

export const metadata: Metadata = {
  title: "Camel Coin",
  description: "The currency exchange of the next generation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
		<Header />
		<Hero/>
        {children}
      </body>
    </html>
  );
}
