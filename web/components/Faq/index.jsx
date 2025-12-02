"use client";
import SectionTitle from "../Common/SectionTitle";
import { faqData } from "@/data/faq";
import { CardGrid, AccordionCard } from "../Common/Card";

const Faq = () => {
  return (
    <section
      id="faq"
      className="w-full flex flex-col gap-10 text-center items-center"
    >
      <SectionTitle
        title="Frequently Asked Questions"
        center
      />
	    
      <CardGrid cols={2}>
        {faqData.map((item) => (
          <AccordionCard
              key={item.id}
              title={item.question}
          >
             {item.answer}
          </AccordionCard>
        ))}
      </CardGrid>
    </section>
  );
};

export default Faq;
