import { Outlet, Link, useLocation } from "react-router-dom";
import PageLink from "./PageLink";

export default function Layout() {
  const location = useLocation(); // Get the current location object
  const currentPath = location.pathname; // Extract the pathname

  return (
    <>
      <header className="flex items-center justify-between">
        <PageLink
          href="/"
          className={`font-grand text-4xl text-primary sm:text-6xl md:text-7xl`}
        >
          portfolio
        </PageLink>
        <nav className="flex justify-center gap-8 font-medium">
          <PageLink
            href="/library"
            className={`text-lg tracking-widest text-primary hover:line-through ${currentPath === "/library" ? "line-through" : ""}`}
          >
            library
          </PageLink>
          <PageLink
            href="/contact"
            className={`text-lg tracking-widest text-primary hover:line-through ${currentPath === "/contact" ? "line-through" : ""}`}
          >
            contact
          </PageLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
