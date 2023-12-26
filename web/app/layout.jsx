"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Head from "./head";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "./providers";
import "../styles/index.css";

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en">
      <Head />
      <body className="dark:bg-black">
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
