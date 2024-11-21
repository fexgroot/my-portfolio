const Button = ({ href, children, className, onClick, ...props }) => {
  const Tag = href ? "a" : "button"; // Use <a> for links and <button> otherwise
  return (
    <Tag
      href={href}
      onClick={onClick}
      className={`border-pri hover:bg-pri dark:border-sec hover:text-sec dark:text-sec dark:hover:text-pri dark:hover:bg-sec flex w-fit items-center justify-center gap-2 border-2 px-4 py-2 font-medium ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Button;
