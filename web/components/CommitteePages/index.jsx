import SectionTitle from "@/components/Common/SectionTitle";
import Button from "@/components/Common/Button";
import CommonImage from "../Common/Image";
import RegularText from "@/components/Common/RegularText";

const CommitteeSection = ({ data }) => {
	if (!data) return null;
	
	const { title, subTitle, imageSrc, description, pdfLink } = data;
	
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
			
			<CommonImage
				src={imageSrc}
				alt={title}
				fill
				priority
				className="aspect-[97/60] w-full sm:aspect-[97/44]"
			/>
			
			<RegularText paragraph={description}/>
			
			
			{pdfLink && (
				<Button href={pdfLink} download>
					Study Guide
				</Button>
			)}
		</section>
	);
};

export default CommitteeSection;
