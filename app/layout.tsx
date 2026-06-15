import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Noprizal — Event & Invitation Designer",
  description:
    "Portfolio of Noprizal, a designer and developer specializing in distinctive digital invitations and web experiences.",
  openGraph: {
    title: "Noprizal — Event & Invitation Designer",
    description:
      "Portfolio of Noprizal, a designer specializing in digital invitations and bespoke websites.",
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
        className={`${inter.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
