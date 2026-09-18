import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const switzer = localFont({
  src: [
    { path: "./fonts/Switzer-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Switzer-Medium.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-switzer",
  display: "swap",
});

const sentient = localFont({
  src: [{ path: "./fonts/Sentient-Regular.woff2", weight: "400", style: "normal" }],
  variable: "--font-sentient",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ingaze — a creative practice by laura ilisii",
  description: "exploring people, place, nature and the stories that connect them",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${switzer.variable} ${sentient.variable}`}>
      <body data-heroink>{children}</body>
    </html>
  );
}
