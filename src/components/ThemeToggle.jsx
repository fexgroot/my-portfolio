import React, { useState, useEffect } from "react";
import * as Icon from "react-feather";
import { Tooltip } from "react-tooltip";
import Button from "./Button";

const ThemeToggle = ({ padding }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // Load initial state from localStorage or default to light mode
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    // Add/remove the 'dark' class on the root element
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <>
      <Button
        data-tooltip-id="theme-toggle"
        data-tooltip-content="Toggle theme"
        data-tooltip-variant={darkMode ? "light" : "dark"}
        onClick={() => setDarkMode(!darkMode)}
        className={`rounded-full p-[${padding}]`}
      >
        {darkMode ? <Icon.Moon /> : <Icon.Sun />}
      </Button>
      <div className="tooltip">
        <Tooltip id="theme-toggle" />
      </div>
    </>
  );
};

export default ThemeToggle;
