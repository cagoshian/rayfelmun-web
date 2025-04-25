"use client";

import { useState } from "react";

const Lable = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
    <button
    onClick={() => setIsOpen(!isOpen)}
    className="flex w-full justify-between items-center text-left"
    >
    <h5 className="text-lg font-semibold">{title}</h5>
    <span className="text-xl">{isOpen ? "−" : "+"}</span>
    </button>

    {isOpen && (
      <p className="mt-2 text-sm font-medium text-body-color">
      {description}
      </p>
    )}
    </div>
  );
};

export default Lable;
