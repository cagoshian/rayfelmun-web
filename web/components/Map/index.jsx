"use client";
import dynamic from "next/dynamic";
import SectionTitle from "@/components/Common/SectionTitle";
import React from "react";

const LeafletMap = dynamic(() => import("./LeafletMap"), {
	ssr: false,
	loading: () => (
		<div className="w-full h-[500px] bg-gray-200 animate-pulse rounded-[16px]"></div>
	),
});

const Location = () => {
	return (
		<section
			id="logistics"
			className="w-full max-w-3xl flex flex-col gap-10"
		>
			<SectionTitle
				title="Logistics"
				center></SectionTitle>
			
				<LeafletMap/>
			
			<SectionTitle
				title="Ramazan Yaman Fen Lisesi"
				paragraph="Sevgi Mahallesi, Selami Şaşmaz Caddesi, No:17, Lüleburgaz/Kırklareli"
				center></SectionTitle>
		</section>
	);
};

export default Location;
