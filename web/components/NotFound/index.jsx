import SectionTitle from "../Common/SectionTitle";
import Button from "@/components/Common/Button";
import React from "react";

const NotFound = () => {
  return (
    <section
	    id="not-found"
        className="w-full max-w-4xl flex flex-col gap-10 text-center items-center"
    >
        <h1 className="mx-auto text-[140px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/5 sm:text-[220px] select-none">
          404
        </h1>
	      
	    <SectionTitle
				title="Motion to Adjourn?"
				paragraph="Delegate, it seems you've wandered out of the committee session. The resolution you are looking for has either been vetoed or does not exist."></SectionTitle>
	      
	    <Button href="/">
		    Return to General Assembly
		</Button>
    </section>
  );
};

export default NotFound;
