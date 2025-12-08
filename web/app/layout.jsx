import "../styles/index.css";
import localFont from "next/font/local";
import RootLayoutClient from "@/components/RootLayoutClient";

const inter = localFont({
	src: "../public/fonts/InterVariable.woff2",
	weight: "100 900",
	style: "normal",
});

export const metadata = {
	metadataBase: new URL("https://rayfelmun.com"),
	title: {
		default: "Rayfelmun'25",
		template: "%s | Rayfelmun'25",
	},
	description: "Ramazan Yaman Fen Lisesi Model United Nations Conference (Rayfelmun'25)",
	keywords: ["Rayfelmun", "MUN", "Model United Nations", "Ramazan Yaman Fen Lisesi", "Lüleburgaz", "Kırklareli", "Konferans", "Lise"],
	authors: [{name: "Rayfelmun IT & Media Team"}],
	creator: "Rayfelmun Organization",
	publisher: "Ramazan Yaman Fen Lisesi",
	robots: {
		index: true,
		follow: true,
	},
	openGraph: {
		title: "Rayfelmun'25",
		description: "Ramazan Yaman Fen Lisesi Model United Nations Conference",
		url: "https://rayfelmun.com",
		siteName: "Rayfelmun'25",
		images: [
			{
				url: "/images/logo.png",
				width: 800,
				height: 600,
				alt: "Rayfelmun'25 Logo",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Rayfelmun'25",
		description: "Ramazan Yaman Fen Lisesi MUN Conference",
		images: ["/images/logo.png"],
	},
	icons: {
		icon: "/images/favicon.ico",
	},
};

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Event",
	"name": "Rayfelmun'25",
	"startDate": "2025-12-13",
	"endDate": "2025-12-14",
	"eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
	"eventStatus": "https://schema.org/EventScheduled",
	"location": {
		"@type": "Place",
		"name": "Ramazan Yaman Fen Lisesi",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "Sevgi Mahallesi, Selami Şaşmaz Caddesi, No:17",
			"addressLocality": "Lüleburgaz",
			"addressRegion": "Kırklareli",
			"postalCode": "39750",
			"addressCountry": "TR"
		}
	},
	"image": [
		"https://rayfelmun.com/images/logo.png"
	],
	"description": "Ramazan Yaman Fen Lisesi Model United Nations Conference"
};

export default function RootLayout({children}) {
	return (
		<html lang="en" className={inter.className}>
		<body className="bg-black">
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
		/>
		<RootLayoutClient>
			{children}
		</RootLayoutClient>
		</body>
		</html>
	);
}
