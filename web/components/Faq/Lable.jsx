import React from "react";

const Lable = ({ title, description }) => {
  return (
    <div className="lg:block xl:flex border-b border-body-color border-opacity-10 pb-4 dark:border-white dark:border-opacity-10">
      <div className="w-full">
        <h5>{title}</h5>
        <p className="text-xs font-medium text-body-color">{description}</p>
      </div>
    </div>
  );
};

export default Lable;
