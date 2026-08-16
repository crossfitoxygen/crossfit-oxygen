import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
// import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-main",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crossfit-oxygen.vercel.app"),

  title: {
    default: "CrossFit Oxygen | CrossFit Gym in Obour",
    template: "%s | CrossFit Oxygen",
  },

  description:
    "CrossFit Oxygen هو جيم كروس فيت في مدينة العبور يقدم تدريبات CrossFit، Personal Training، وبرامج تدريب للسيدات مع مدربين محترفين.",

  keywords: [
    "CrossFit Oxygen",
    "CrossFit Oxygen Obour",
    "CrossFit Obour",
    "CrossFit Egypt",
    "CrossFit العبور",
    "جيم العبور",
    "جيم في العبور",
    "كروس فيت العبور",
    "CrossFit Gym Obour",
    "Gym Obour",
    "Fitness Obour",
    "Personal Training Obour",
    "Ladies Gym Obour",
    "لياقة بدنية",
    "جيم",
    "كروس فيت",
    "Personal Training",
  ],

  authors: [
    {
      name: "CrossFit Oxygen",
    },
  ],

  creator: "CrossFit Oxygen",
  publisher: "CrossFit Oxygen",

  applicationName: "CrossFit Oxygen",

  category: "fitness",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: {
    canonical: "https://crossfit-oxygen.vercel.app/",
  },

  openGraph: {
    title: "CrossFit Oxygen | CrossFit Gym in Obour",
    description:
      "أفضل جيم CrossFit في مدينة العبور. تدريبات CrossFit، Personal Training وبرامج خاصة للسيدات.",

    url: "https://crossfit-oxygen.vercel.app/",
    siteName: "CrossFit Oxygen",

    locale: "ar_EG",

    type: "website",

    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "CrossFit Oxygen",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CrossFit Oxygen | CrossFit Gym in Obour",
    description:
      "CrossFit Gym في مدينة العبور - تدريبات CrossFit وPersonal Training وبرامج للسيدات.",
    images: ["/logo.png"],
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