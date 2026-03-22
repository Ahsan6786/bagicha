import type { Metadata } from "next";
import { Newsreader, Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-be-vietnam-pro",
});

export const metadata: Metadata = {
  title: "Bagicha | Where Roots Meet Luxury",
  description: "Experience Bihar's cultural essence with world-class premium luxury.",
};

import BookingModal from "@/components/BookingModal";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${newsreader.variable} ${beVietnamPro.variable} font-sans antialiased text-brand-primary bg-brand-background overflow-x-hidden`}
      >
        <LanguageProvider>
          {children}
          <BookingModal />
        </LanguageProvider>
      </body>
    </html>
  );
}
