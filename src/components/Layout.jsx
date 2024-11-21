import { Outlet, Link, useLocation } from "react-router-dom";
import PageLink from "./PageLink";
import ThemeToggle from "./ThemeToggle";

export default function Layout() {
  const location = useLocation(); // Get the current location object
  const currentPath = location.pathname; // Extract the pathname

  return (
    <>
      <header className="flex items-center justify-between">
        <PageLink
          href="/"
          className={`text-pri dark:text-sec font-grand text-4xl sm:text-6xl md:text-7xl`}
        >
          portfolio
        </PageLink>
        <nav className="flex items-center justify-center gap-8 font-medium">
          <PageLink
            href="/projects"
            className={`text-pri dark:text-sec text-lg tracking-widest hover:line-through ${currentPath === "/projects" ? "line-through" : ""}`}
          >
            projects
          </PageLink>
          <PageLink
            href="/contact"
            className={`text-pri dark:text-sec text-lg tracking-widest hover:line-through ${currentPath === "/contact" ? "line-through" : ""}`}
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
