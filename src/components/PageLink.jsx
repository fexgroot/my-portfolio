  import { Link } from "react-router-dom";

  export default function PageLink({ href, children, className }) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    );
  }
