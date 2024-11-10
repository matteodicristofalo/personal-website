import type { Metadata } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header/header";
import "./globals.css";

const durer = localFont({
  src: "./fonts/durer.woff2",
  variable: "--font-durer",
});

export const metadata: Metadata = {
  title: "Matteo Di Cristofalo - Personal Website",
  description: "Personal website of Matteo Di Cristofalo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={durer.variable}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
