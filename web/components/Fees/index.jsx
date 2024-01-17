"use client";
import SectionTitle from "../Common/SectionTitle";
import PricingBox from "./PricingBox";

const Pricing = () => {
  return (
    <section id="fees" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Fees"
          // paragraph="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
          center
          width="665px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Individual Delegate"
            price="850"
            link="https://forms.gle/nue5VETdAjaFc5J76"
            //  subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
          ></PricingBox>
          <PricingBox
            packageName="Delegation"
            price="800"
            link="https://forms.gle/qyZpcHtGkAuijK8g7"
            // subtitle="Lorem ipsum dolor sit amet adiscing elit Mauris egestas enim."
          ></PricingBox>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
