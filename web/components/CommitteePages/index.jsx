import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";

const CommitteeSection = ({title, subTitle, imageSrc, description, pdfLink}) => {
	return (
		<section>
			<div className="container">
				<div className="-mx-4 flex flex-wrap justify-center">
					<div className="w-full px-4 lg:w-8/12">
						<div>
							<SectionTitle
								title={title}
								paragraph={subTitle}
								center></SectionTitle>
							<div>
								<div className="mb-10 w-full overflow-hidden rounded-2xl">
									<div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
										<Image
											src={imageSrc}
											alt={title}
											fill
											className="object-cover object-center"
										/>
									</div>
								</div>
								<p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
									{description}
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
							<a
								href={pdfLink}
								download
								className="rounded-2xl shadow-md bg-dark py-4 px-10 text-base font-semibold text-white duration-300 ease-in-out hover:translate-y-[-2px] hover:shadow-lg"
							>
								Study Guide
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default CommitteeSection;
