import Header from "@/components/Header";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GOODBYE, Chief Hori, OKO OLEH",
  description:
    "This is the official website for the funeral service of Chief Hori Oko Agbi Oleh. Developed by his son-in-law, Engr. Chukwu Matthew.",
  twitter: {
    card: "summary",
    title: "GOODBYE, Chief Hori, OKO OLEH",
    description:
      "This is the official website for the funeral service of Chief Hori Oko Agbi Oleh. Developed by his son-in-law, Engr. Chukwu Matthew.",
  },
  openGraph: {
    title: "GOODBYE, Chief Hori, OKO OLEH",
    description:
      "This is the official website for the funeral service of Chief Hori Oko Agbi Oleh. Developed by his son-in-law, Engr. Chukwu Matthew.",
    url: "https://www.oko-oleh.com.ng",
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
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
