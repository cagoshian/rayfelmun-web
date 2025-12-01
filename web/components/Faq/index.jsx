"use client";
import SectionTitle from "../Common/SectionTitle";
import { faqData } from "@/data/faq";
import Card, { CardGrid } from "../Common/Card";

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
          <Card
              key={item.id}
              collapsible
              title={item.question}
          >
             {item.answer}
          </Card>
        ))}
      </CardGrid>
    </section>
  );
};

export default Faq;
