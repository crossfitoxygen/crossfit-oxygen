import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CrossFit Oxygen | أفضل جيم كروس فيت في العبور",

  description:
    "CrossFit Oxygen هو جيم متخصص في الكروس فيت واللياقة البدنية في مدينة العبور. برامج تدريب، مدربين محترفين، وتمارين تناسب جميع المستويات.",

  keywords: [
    "CrossFit",
    "CrossFit Egypt",
    "CrossFit Obour",
    "Gym",
    "Fitness",
    "جيم",
    "كروس فيت",
    "العبور",
    "لياقة بدنية",
  ],

  authors: [{ name: "CrossFit Oxygen" }],
  creator: "CrossFit Oxygen",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "CrossFit Oxygen",
    description: "أفضل جيم كروس فيت في مدينة العبور",
    url: "https://crossfit-oxygen.vercel.app",
    siteName: "CrossFit Oxygen",
    locale: "ar_EG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}