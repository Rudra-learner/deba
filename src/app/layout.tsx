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
  title: "Debabrata Sahu | VLSI & Digital Hardware Research Portfolio",
  description: "Portfolio of Debabrata Sahu, an Electronics & Communication Engineering student exploring VLSI, digital IC design, RTL, FPGA, computer arithmetic, approximate computing, and hardware research.",
  openGraph: {
    title: "Debabrata Sahu | VLSI & Digital Hardware Research Portfolio",
    description: "Portfolio of Debabrata Sahu, an Electronics & Communication Engineering student exploring VLSI, digital IC design, RTL, FPGA, computer arithmetic, approximate computing, and hardware research.",
    type: "website",
  },
};

import { ThemeProvider } from 'next-themes';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${robotoMono.variable} font-sans antialiased bg-[var(--background)] text-[var(--foreground)]`}
      >
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
