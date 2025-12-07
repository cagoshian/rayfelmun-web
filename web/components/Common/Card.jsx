"use client";
import React, { useState } from 'react';

const baseCardClasses = "w-full bg-white/5 hover:bg-white/7 backdrop-blur-md rounded-2xl p-6 text-white shadow-lg transition-all duration-300";

export const CardGrid = ({ children, cols = 3, className = "" }) => {
  const gridCols = {
    1: "lg:grid-cols-1",
    2: "lg:grid-cols-2",
    3: "lg:grid-cols-3",
    4: "lg:grid-cols-4",
  };

  return (
    <div className={`grid grid-cols-1 gap-8 w-full max-w-screen-3xl px-5 mx-auto items-start ${gridCols[cols] || "lg:grid-cols-3"} ${className}`}>
      {children}
    </div>
  );
};

export const Card = ({ title, children, footer, className = "" }) => {
  return (
    <div className={`${baseCardClasses} flex flex-col h-full ${className}`}>
      {title && (
        <h2 className="font-bold mb-4 text-white text-2xl md:text-3xl text-center">
          {title}
        </h2>
      )}
      
      <div className="text-base md:text-lg leading-relaxed whitespace-pre-line text-gray-200 flex-grow">
        {children}
      </div>

      {footer && (
        <div className="mt-4 pt-4 border-t border-white/10">
          {footer}
        </div>
      )}
    </div>
  );
};

export const AccordionCard = ({ title, children, footer, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${baseCardClasses} ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left group cursor-pointer focus:outline-none"
      >
        <h4 className="font-bold text-white transition-colors duration-300 text-lg sm:text-xl flex-1 pr-4">
          {title}
        </h4>
	      
        <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-primary transition-all duration-300 group-hover:bg-white/16 ${isOpen ? "bg-white/20 rotate-180" : ""}`}>
          <svg
            className="h-6 w-6"
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
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0 mt-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="text-base md:text-lg leading-relaxed whitespace-pre-line text-gray-200">
            {children}
          </div>
          
          {footer && (
            <div className="mt-6 pt-4 border-t border-white/10">
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
