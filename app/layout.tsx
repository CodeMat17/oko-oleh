import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GOODBYE, OKO OLEH",
  description:
    "This is the official website for the funeral service of Chief Hori Oko Agbi Oleh. Developed by his son-in-law, Engr. Chukwu Matthew.",
  twitter: {
    card: "summary",
    title: "GOODBYE, OKO OLEH",
    description:
      "This is the official website for the funeral service of Chief Hori Oko Agbi Oleh. Developed by his son-in-law, Engr. Chukwu Matthew.",
  },
  openGraph: {
    title: "GOODBYE, OKO OLEH",
    description:
      "This is the official website for the funeral service of Chief Hori Oko Agbi Oleh. Developed by his son-in-law, Engr. Chukwu Matthew.",
    url: "https://oko-oleh.vercel.app",
    // siteName: "Portfolio website",
    images: [
      {
        url: "https://res.cloudinary.com/mctony17/image/upload/v1724592799/oko-oleh/oko-oleh.jpg",
        width: 800,
        height: 600,
      },
      {
        url: "https://res.cloudinary.com/mctony17/image/upload/v1724592799/oko-oleh/oko-oleh.jpg",
        width: 1800,
        height: 1600,
        alt: "My custom alt",
      },
    ],
    locale: "en_US",
    type: "website",
    // authors: ["Matthew Chukwu"],
  },
};


// https://res.cloudinary.com/mctony17/image/upload/v1724592799/oko-oleh/oko-oleh.jpg

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
