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
              description="Talmun’24 will follow the Harvard procedure."
            />
            <Lable
              title="What are the bank account details for the payment?"
              description="All participants will be sent an e-mail informing about the details of the bank accounts for the payment as soon as your application is approved."
            />
            <Lable
              title="When is the last date for payments?"
              description="It will be announced soon."
            />
            <Lable
              title="Will there be any social event?"
              description="Yes, you will be sent an e-mail informing the venue, the time, and the theme of the event as soon as your application is approved."
            />
            <Lable
              title="Will there be accommodation options in TALMUN’24?"
              description="Accomodation details will be announced soon."
            />
            <Lable
              title="Where will the TALMUN’24 be held?"
              description="TALMUN’24 will be held in Namık Kemal University."
            />
            <Lable
              title="How long will the conference last?"
              description="The conference will last for 3 days, between 08-10 March 2024."
            />
            <Lable
              title="Is accommodation included in the fee?"
              description="No, accommodation is not included in the fee."
            />
            <Lable
              title="What is the dress code policy at TALMUN’24?"
              description="Only elegant attire will be required. All participants must follow the dress code policy of the conference which encompasses formal clothing only. The participants with sneakers or casual outfits will not be allowed to attend the conference."
            />
            <Lable
              title="Is There a Vegan Option For Applicants?"
              description="Yes, the participants demanding the vegan or vegetarian diet will be offered to have alternative options to have for lunch."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
