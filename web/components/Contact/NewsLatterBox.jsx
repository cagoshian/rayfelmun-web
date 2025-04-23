const NewsLatterBox = () => {
  return (
    <div
      className="wow fadeInUp relative z-10 rounded-2xl bg-primary/[3%] p-8 dark:bg-primary/10 sm:p-11 lg:p-8 xl:p-11"
      data-wow-delay=".2s"
    >
      <h3 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">
        Contact
      </h3>
      <p className="mb-11 border-b border-body-color border-opacity-25 pb-3 text-base font-medium leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        You can contact us at the following addresses
      </p>
      <p className="mb-11 pb-3 text-base font-medium leading-relaxed text-body-color dark:border-white dark:border-opacity-25">
        Director-General: +90 535 567 1139
        <br />
        {}
        <br />
        E-Mail: <a href="mailto:altunbetulece8@gmail.com">altunbetulece8@gmail.com</a>
        <br />
        Instagram: <a href="https://www.instagram.com/rayfelmun/">@rayfelmun</a>
        </p>
    </div>
  );
};

export default NewsLatterBox;
