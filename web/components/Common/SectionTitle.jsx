const SectionTitle = ({
  title,
  paragraph,
  width = "1140px",
  center,
  children,
  mb = "100px",
}) => {
  return (
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {children}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
