const Button = ({ href, children, className, onClick, ...props }) => {
  const Tag = href ? "a" : "button"; // Use <a> for links and <button> otherwise
  return (
    <Tag
      href={href}
      onClick={onClick}
      className={`flex w-fit items-center justify-center gap-2 border-2 border-pri italic text-pri hover:bg-pri hover:text-sec dark:border-sec dark:text-sec dark:hover:bg-sec dark:hover:text-pri ${className}`}
      style={{ fontSize: "24px" }}
      role={href ? "button" : undefined}
      aria-label={
        props["aria-label"] ||
        (typeof children === "string" ? children : "Button")
      }
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Button;
