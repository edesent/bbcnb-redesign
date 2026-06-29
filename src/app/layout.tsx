import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const serif = Cormorant_Garamond({
  variable: "--font-serif-site",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const sans = Source_Sans_3({
  variable: "--font-sans-site",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bbcnb.us"),
  title: {
    default: "Bible Baptist Church for the Deaf & Hearing | Seguin, TX",
    template: "%s | Bible Baptist Church",
  },
  description:
    "Bible Baptist Church for the Deaf & Hearing is an independent Baptist church in Seguin, Texas with voiced and signed services.",
  openGraph: {
    title: "Bible Baptist Church for the Deaf & Hearing",
    description:
      "A place for Deaf and hearing people to worship together in Seguin, Texas.",
    url: "https://bbcnb.us",
    siteName: "Bible Baptist Church",
    images: [{ url: "/pastor-family.jpg", width: 315, height: 315 }],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#151316",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
