import { Outlet, Link, useLocation } from "react-router-dom";
import PageLink from "./PageLink";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const location = useLocation(); // Get the current location object
  const currentPath = location.pathname; // Extract the pathname

  return (
    <>
      <header className="flex items-center justify-between">
        <PageLink
          href="/"
          className={`font-grand text-4xl text-pri dark:text-sec sm:text-6xl md:text-7xl`}
        >
          portfolio
        </PageLink>
        <nav className="flex items-center justify-end gap-8 font-medium">
          <PageLink
            href="/about"
            className={`text-lg tracking-widest text-pri hover:line-through dark:text-sec ${currentPath === "/about" ? "line-through" : ""}`}
          >
            about
          </PageLink>
          <PageLink
            href="/projects"
            className={`text-lg tracking-widest text-pri hover:line-through dark:text-sec ${currentPath === "/projects" ? "line-through" : ""}`}
          >
            projects
          </PageLink>
          <PageLink
            href="/contact"
            className={`text-lg tracking-widest text-pri hover:line-through dark:text-sec ${currentPath === "/contact" ? "line-through" : ""}`}
          >
            contact
          </PageLink>
          <ThemeToggle />
        </nav>
      </header>
      <Outlet />
    </>
  );
}
