import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-main",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crossfit-oxygen.vercel.app"),

  title: {
    default: "CrossFit Oxygen",
    template: "%s | CrossFit Oxygen",
  },

  description:
    "أفضل جيم كروس فيت بمدينة العبور. برامج تدريب احترافية، Personal Training، تدريبات للسيدات، ومدربين محترفين.",

  keywords: [
    "CrossFit",
    "CrossFit Egypt",
    "CrossFit Obour",
    "Gym",
    "Fitness",
    "Personal Training",
    "CrossFit Oxygen",
    "جيم",
    "كروس فيت",
    "لياقة",
    "العبور",
  ],

  authors: [{ name: "CrossFit Oxygen" }],
  creator: "CrossFit Oxygen",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "CrossFit Oxygen",
    description: "أفضل جيم كروس فيت بمدينة العبور",
    url: "https://crossfit-oxygen.vercel.app",
    siteName: "CrossFit Oxygen",
    locale: "ar_EG",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
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
      className={`${montserrat.variable} scroll-smooth`}
    >
      <body className="bg-black text-white antialiased">
        {children}
      </body>
    </html>
  );
}