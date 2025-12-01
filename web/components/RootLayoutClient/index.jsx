"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "@/app/providers";

export default function RootLayoutClient({ children }) {
  return (
    <Providers>
      <Header />
      <section className="pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]">
        <div className="container">
          <div className="flex flex-col items-center">
            {children}
          </div>
        </div>
      </section>
      <Footer />
      <ScrollToTop />
    </Providers>
  );
}
