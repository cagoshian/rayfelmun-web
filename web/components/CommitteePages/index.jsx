import Image from "next/image";
import SectionTitle from "@/components/Common/SectionTitle";
import Button from "@/components/Common/Button";

const CommitteeSection = ({data}) => {
	if (!data) return null;
	
	const {title, subTitle, imageSrc, description, pdfLink} = data;
	
	return (
		<section
			id="committee"
			className="w-full max-w-4xl flex flex-col gap-10 text-center items-center"
		>
			<SectionTitle
				title={title}
				paragraph={subTitle}
				center
			/>
			
			<div className="relative aspect-[97/60] w-full overflow-hidden rounded-2xl bg-dark sm:aspect-[97/44]">
				<Image
					src={imageSrc}
					alt={title}
					fill
					className="object-cover object-center"
					priority
				/>
			</div>
			
			<p className="text-base font-medium leading-relaxed text-body-color sm:text-lg">
				{description}
			</p>
			
			{pdfLink && (
				<Button href={pdfLink} download>
					Study Guide
				</Button>
			)}
		</section>
	);
};

export default CommitteeSection;
