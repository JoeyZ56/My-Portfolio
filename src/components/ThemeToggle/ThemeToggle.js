import React from "react";
import "./ThemeToggle.scss";
import { useState, createContext } from "react";

export const ThemeContext = createContext(null);

const ThemeToggle = () => {
  const [theme, setTheme] = useState("theme1");

  const toggleTheme = () => [
    setTheme((curr) => (curr === "theme1" ? "theme2" : "theme1")),
  ];
  return (
    <>
      <label className="app__toggle-label">
        <input
          className="app__toggle-input"
          type="checkbox"
          value={theme}
          onChange={toggleTheme}
        />

        <div className="app__toggle-fill"></div>
      </label>
    </>
  );
};

export default ThemeToggle;
