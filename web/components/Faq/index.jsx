import React from "react";
import Lable from "./Lable";

const Faq = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container mt-20">
        <div className="md:pb-20 lg:pb-28">
          <div className="-mx-4 flex-wrap items-center">
            <Lable title="Test" description="Lorem impus" />
            <Lable
              title="Test2"
              description="Lorem impus asdjkfşjlkasjlşkfjşasdjfjasdklj"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
