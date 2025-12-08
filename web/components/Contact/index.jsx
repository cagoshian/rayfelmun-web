import SectionTitle from "@/components/Common/SectionTitle";
import {AccordionCard, Card, CardGrid} from "@/components/Common/Card";
import React from "react";

const Contact = () => {
	return (
		<section
			id="contact"
			className="w-full max-w-4xl flex flex-col gap-10 text-center items-center"
		>
		<SectionTitle
			title="Contact Us"></SectionTitle>
			
			<Card title="Social Media" className="max-w-xl">
				Instagram: @rayfelmun<br/>
				TikTok: @rayfelmun0
			</Card>
			
			<CardGrid cols={2}>
				<AccordionCard title="Responsible Teacher">
					Duygu YILDIZ<br/>
					+90 532 166 27 40
				</AccordionCard>
				
				<AccordionCard title="Secretary General">
					Ekin SEZER<br/>
					+90 535 567 11 39
				</AccordionCard>
			</CardGrid>
		</section>
	);
};

export default Contact;
