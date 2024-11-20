const Button = ({ href, children, className, onClick, ...props }) => {
  const Tag = href ? "a" : "button"; // Use <a> for links and <button> otherwise
  return (
    <Tag
      href={href}
      onClick={onClick}
      className={`flex w-fit items-center justify-center gap-2 border-2 border-primary px-4 py-2 font-medium hover:bg-primary hover:text-secondary ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Button;
