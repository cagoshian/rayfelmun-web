import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Providers } from "./providers";
import "../styles/index.css";
import localFont from "next/font/local";

const inter = localFont({
  src: "../public/fonts/InterVariable.woff2",
  weight: "100 900",
  style: "normal",
});

export const metadata = {
  title: "Rayfelmun'25",
  description: "Rayfelmun'25",
  icons: {
    icon: "/images/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning lang="en" className={inter.className}>
      <body className="bg-black">
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
