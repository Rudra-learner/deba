import type { Metadata } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "[YOUR NAME] | VLSI & FPGA Engineer",
  description: "Portfolio of [YOUR NAME], an Electronics & Communication Engineering student focused on VLSI, RTL design, FPGA, digital hardware and embedded systems.",
  openGraph: {
    title: "[YOUR NAME] | VLSI & FPGA Engineer",
    description: "Portfolio of [YOUR NAME], an Electronics & Communication Engineering student focused on VLSI, RTL design, FPGA, digital hardware and embedded systems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${robotoMono.variable} font-sans antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        {children}
      </body>
    </html>
  );
}
