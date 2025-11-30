"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import {Providers} from "@/app/providers";

export default function RootLayoutClient({children}) {
	return (
		<Providers>
			<Header/>
			<div className="mt-12 mb-12">
				{children}
			</div>
			<Footer/>
			<ScrollToTop/>
		</Providers>
	);
}
