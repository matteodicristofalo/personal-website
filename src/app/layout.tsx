import type { Metadata } from "next";
import localFont from "next/font/local";
import { ReactLenis } from "@/libs/lenis";
import { Header } from "@/components/header/header";
import clsx from "clsx";
import "./globals.css";
import "@matteodicristofalo/text-animations/index.css";

const rhosyn = localFont({
  src: "./fonts/rhosyn.woff2",
  variable: "--font-rhosyn",
});

const gnarly = localFont({
  src: [
    {
      path: "./fonts/gnarly-regular.woff2",
      weight: "400",
    },
    {
      path: "./fonts/gnarly-semibold.woff2",
      weight: "500",
    },
  ],
  variable: "--font-gnarly",
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
      <body className={clsx(rhosyn.variable, gnarly.variable)}>
        <ReactLenis root>
          <Header />
          <main>{children}</main>
        </ReactLenis>
      </body>
    </html>
  );
}
