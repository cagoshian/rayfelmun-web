"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import { faqData } from "@/data/faq";

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-8 w-full rounded-2xl p-5 sm:p-8 shadow-lg bg-white/5 shadow-gray-dark transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left group"
      >
        <h4 className="text-lg font-bold text-white sm:text-xl transition-colors duration-300">
          {question}
        </h4>
        <div className={`ml-5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/8 text-primary transition-colors duration-300`}>
          <svg
            className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
	    
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-6"
            : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="text-base leading-relaxed text-gray-300">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const Faq = () => {
  return (
    <section className="relative z-20 overflow-hidden">
      <div className="container">
        <SectionTitle
          title="Frequently Asked Questions"
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-2 lg:grid-cols-2">
          {faqData.map((item) => (
            <div key={item.id} className="w-full">
              <FaqItem question={item.question} answer={item.answer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
