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
  title: "Columbia Softworks | Custom Software Development",
  description: "Columbia Softworks is a software shop specializing in custom software development, web applications, and digital solutions. Expert software engineering services tailored to your business needs.",
  keywords: ["software development", "custom software", "web development", "software shop", "software engineering", "Columbia Softworks", "digital solutions", "web applications"],
  authors: [{ name: "Columbia Softworks" }],
  creator: "Columbia Softworks",
  publisher: "Columbia Softworks",
  metadataBase: new URL("https://columbiasoftworks.com"),
  icons: {
    icon: "/cs-logo.png",
    shortcut: "/cs-logo.png",
    apple: "/cs-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://columbiasoftworks.com",
    siteName: "Columbia Softworks",
    title: "Columbia Softworks | Custom Software Development",
    description: "Columbia Softworks is a software shop specializing in custom software development, web applications, and digital solutions.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Columbia Softworks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Columbia Softworks | Custom Software Development",
    description: "Columbia Softworks is a software shop specializing in custom software development, web applications, and digital solutions.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
