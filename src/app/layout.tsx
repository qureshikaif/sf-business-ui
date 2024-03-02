import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import NextTopLoader from "nextjs-toploader";
import { ParallaxProvider } from "react-scroll-parallax";
import Providers from "./providers";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SF Business Solutions",
  description:
    "SF Business Solutions is a business consulting firm. We help businesses grow and scale using our accounting and finance services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          <NextTopLoader />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
