import NextImage from "next/image";

const Image = ({
  src,
  alt,
  width,
  height,
  fill,
  priority,
  quality,
  placeholder,
  blurDataURL,
  loader,
  sizes,
  imageClassName = "",
  className = "",
  ...wrapperProps
}) => {
  return (
    <div
      className={`relative overflow-hidden bg-dark shadow-lg group rounded-2xl ${className}`}
      {...wrapperProps}
    >
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        fill={fill}
        priority={priority}
        quality={quality}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        loader={loader}
        sizes={sizes}
        className={`object-cover object-center transition duration-300 group-hover:scale-110 ${imageClassName}`}
      />
    </div>
  );
};

export default Image;
