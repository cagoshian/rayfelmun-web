"use client";
import dynamic from "next/dynamic";

const LeafletMap = dynamic(() => import("./LeafletMap"), {
	ssr: false,
	loading: () => (
		<div className="w-full h-[500px] bg-gray-200 animate-pulse rounded-[16px]"></div>
	),
});

const Location = () => {
	return (
		<section>
			<div className="container">
				<div className="-mx-4 flex flex-wrap items-center">
					<div className="w-full px-4 lg:w-1/2">
						<div
							className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] text-center mb-12 lg:m-0"
							data-wow-delay=".15s"
						>
							<LeafletMap/>
						</div>
					</div>
					<div className="w-full px-4 lg:w-1/2">
						<div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
							<h3 className="mb-4 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
								Ramazan Yaman Fen Lisesi
							</h3>
							<p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
								Sevgi Mahallesi, Selami Şaşmaz Caddesi, No:17 Lüleburgaz/Kırklareli
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Location;
