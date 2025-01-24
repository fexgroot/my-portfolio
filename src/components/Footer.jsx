import React from "react";
import * as Icon from "react-feather";

const Footer = () => {
  return (
    <footer className="align-center mt-24 flex flex-col items-center justify-center gap-0 text-center text-gray-600 dark:text-gray-400">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Felix Groot. All rights reserved.
      </p>
      <div className="mt-4 flex gap-4">
        <a
          href="https://github.com/fexgroot"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
        >
          <Icon.GitHub strokeWidth={1.5} /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/fexgroot"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
        >
          <Icon.Linkedin strokeWidth={1.5} /> LinkedIn
        </a>
        <a
          href="https://twitter.com/fexgroot"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-2 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white"
        >
          <Icon.Twitter strokeWidth={1.5} /> Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;
