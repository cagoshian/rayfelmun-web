const SectionTitle = ({
  title,
  paragraph,
  center,
}) => {
  return (
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""} max-w-screen-xl`}
      >
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-white sm:text-4xl md:text-[45px]">
          {title}
        </h2>
        <p className="text-base !leading-relaxed text-body-color md:text-lg">
          {paragraph}
        </p>
      </div>
  );
};

export default SectionTitle;
