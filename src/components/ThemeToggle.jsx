import React, { useState, useEffect } from "react";
import * as Icon from "react-feather";
import Button from "./Button";

const ThemeToggle = () => {
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
    <Button
      onClick={() => setDarkMode(!darkMode)}
      className="rounded-full px-2"
    >
      {darkMode ? <Icon.Sun /> : <Icon.Moon />}
    </Button>
  );
};

export default ThemeToggle;
