import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "../src/styles/globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"),
  title: "Sharath & Meghana - Wedding Invitation",
  description: "You are invited to celebrate the wedding of Sharath & Meghana on Wednesday, November 26th, 2025",
  keywords: ["wedding", "invitation", "Sharath", "Meghana", "Kodad"],
  authors: [{ name: "Knotify" }],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Sharath & Meghana - Wedding Invitation",
    description: "You are invited to celebrate the wedding of Sharath & Meghana on Wednesday, November 26th, 2025",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/favicon.png",
        width: 1200,
        height: 630,
        alt: "Sharath & Meghana Wedding",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sharath & Meghana - Wedding Invitation",
    description: "You are invited to celebrate the wedding of Sharath & Meghana",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${inter.variable}`}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

