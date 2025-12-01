import Link from "next/link";

const Button = ({
  children,
  href,
  className = "",
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center rounded-2xl shadow-md bg-dark py-4 px-10 text-base font-semibold text-white duration-300 ease-in-out hover:translate-y-[-2px] hover:shadow-lg";
  
  const finalClasses = `${baseClasses} ${className}`;
  
  if (href) {
    const isExternal = href.startsWith("http") || props.download;

    if (isExternal) {
      return (
        <a href={href} className={finalClasses} {...props}>
          {children}
        </a>
      );
    }
	
    return (
      <Link href={href} className={finalClasses} {...props}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={finalClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
