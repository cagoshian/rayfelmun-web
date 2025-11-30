import React from "react";
import Lable from "./Lable";

const Faq = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container mt-20">
        <div className="md:pb-20 lg:pb-28">
          <div className="-mx-4 flex-wrap items-center">
            <Lable
              title="Which MUN procedure will the conference follow?"
              description="Rayfelmun’25 will follow the Harvard procedure."
            />
            <Lable
              title="Will there be any social event?"
              description="Yes, you will be sent an e-mail informing the venue, the time, and the theme of the event as soon as your application is approved."
            />
            <Lable
              title="Where will the RAYFELMUN’25 be held?"
              description="RAYFELMUN’25 will be held in Ramazan Yaman Science High School."
            />
            <Lable
              title="How long will the conference last?"
              description="The conference will last for 2 days, between 13-14 December 2025."
            />
            <Lable
              title="Is accommodation included in the fee?"
              description="No, accommodation is not included in the fee."
            />
            <Lable
              title="What is the dress code policy at RAYFELMUN’25?"
              description="RAYFELMUN'25 will follow the Western Business Attire. All participants must follow the dress code policy of the conference which encompasses formal clothing only. The participants with sneakers or casual outfits will not be allowed to attend the conference."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
