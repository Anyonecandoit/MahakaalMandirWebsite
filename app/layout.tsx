import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mahakal Pooja Services | Authentic Mangalnath & Mahakal Temple Poojas, Ujjain",
  description:
    "Book authentic Mangalnath & Mahakal Temple Poojas online. Performed by experienced Vedic Pandits — Pt. Abhishek Vyas — in Ujjain. Mangal Dosh, Kaal Sarp, Rudrabhishek & more.",
  keywords:
    "Mangalnath Temple Puja, Mahakal Puja, Ujjain Puja, Mangal Dosh Puja, Kaal Sarp Dosh Puja, Rudrabhishek, Narayan Bali, Vedic Pandit Ujjain",
  openGraph: {
    title: "Mahakal Pooja Services | Authentic Temple Poojas in Ujjain",
    description:
      "Book authentic Mangalnath & Mahakal Temple Poojas online. Experienced Vedic Pandits. Transparent pricing.",
    url: "https://kalsarpmangalpujaujain.com",
    siteName: "Mahakal Pooja Services",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-amber-50/30">{children}</body>
    </html>
  );
}
