import { Outlet, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import * as Icon from "react-feather"; // Import Feather Icons
import PageLink from "./PageLink";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const location = useLocation(); // Get the current location object
  const currentPath = location.pathname; // Extract the pathname
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to track mobile menu

  // Function to toggle mobile menu
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="flex items-center justify-between">
        <PageLink
          href="/"
          className="font-grand text-5xl text-pri dark:text-sec sm:text-6xl md:text-7xl lg:text:8xl"
        >
          felix nagy
        </PageLink>

        {/* Hamburger icon for mobile */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button
            onClick={toggleMobileMenu}
            className="block focus:outline-none md:hidden"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <Icon.X
                strokeWidth={1.5}
                className="h-8 w-8 text-pri dark:text-sec"
              />
            ) : (
              <Icon.Menu
                strokeWidth={1.5}
                className="h-8 w-8 text-pri dark:text-sec"
              />
            )}
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden items-center justify-end gap-8 font-medium md:flex">
          <PageLink
            href="/about"
            className={`text-lg tracking-widest text-pri hover:line-through dark:text-sec ${
              currentPath === "/about" ? "line-through" : ""
            }`}
          >
            about
          </PageLink>
          <PageLink
            href="/projects"
            className={`text-lg tracking-widest text-pri hover:line-through dark:text-sec ${
              currentPath === "/projects" ? "line-through" : ""
            }`}
          >
            projects
          </PageLink>
          <PageLink
            href="/contact"
            className={`text-lg tracking-widest text-pri hover:line-through dark:text-sec ${
              currentPath === "/contact" ? "line-through" : ""
            }`}
          >
            contact
          </PageLink>
          <ThemeToggle />
        </nav>
      </header>

      {/* Mobile Navigation (shown when hamburger is toggled) */}
      <nav
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } -mt-10 border-pri font-medium md:hidden`}
      >
        <ul className="mt-4 flex flex-col items-start gap-4">
          <hr className="w-full border-2 border-pri opacity-25 dark:border-sec" />
          <li>
            <PageLink
              href="/about"
              className={`text-lg tracking-widest text-pri dark:text-sec ${
                currentPath === "/about" ? "line-through" : ""
              }`}
              onClick={toggleMobileMenu}
            >
              about
            </PageLink>
          </li>
          <li>
            <PageLink
              href="/projects"
              className={`text-lg tracking-widest text-pri dark:text-sec ${
                currentPath === "/projects" ? "line-through" : ""
              }`}
              onClick={toggleMobileMenu}
            >
              projects
            </PageLink>
          </li>
          <li>
            <PageLink
              href="/contact"
              className={`text-lg tracking-widest text-pri dark:text-sec ${
                currentPath === "/contact" ? "line-through" : ""
              }`}
              onClick={toggleMobileMenu}
            >
              contact
            </PageLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
