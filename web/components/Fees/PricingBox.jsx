const PricingBox = (props) => {
  const { price, packageName, subtitle, children, link } = props;

  return (
    <div className="w-full">
      <div
        className="wow fadeInUp relative z-10 rounded-md bg-white px-8 py-10 shadow-signUp dark:bg-[#1D2144]"
        data-wow-delay=".1s"
      >
        <div className="flex items-center justify-between">
          <h3 className="price mb-2 text-3xl font-bold text-black dark:text-white">
            ₺<span className="amount">{price}</span>
          </h3>
          <h4 className="mb-2 text-xl font-bold text-dark dark:text-white">
            {packageName}
          </h4>
        </div>
        <p className="mb-7 text-base text-body-color">{subtitle}</p>
        <div className="mb-8 border-body-color border-opacity-10 pb-8 dark:border-white dark:border-opacity-10">
          <a href={link} className="flex w-full items-center justify-center rounded-md bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
            Apply
          </a>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default PricingBox;
