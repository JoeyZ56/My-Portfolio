import "./NavBar.scss";
import { images } from "../../constants";
// from react icons
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { useState } from "react";
import PDFresume from "../PDFresume/PDFresume";

const NavBar = ({ toggleTheme }) => {
  const [toggle, setToggle] = useState(false);
  const [theme, setTheme] = useState("theme1");

  const handleToggleTheme = () => [
    setTheme((curr) => (curr === "theme1" ? "theme2" : "theme1")),
    toggleTheme(),
  ];

  return (
    <nav className="app__navbar">
      {/* <div className="app__navbar-logo">
        <img src={images.jzLogo2} alt="logo" />
      </div> */}

      <>
        <label className="app__toggle-label">
          <input
            className="app__toggle-input"
            type="checkbox"
            value={theme}
            checked={theme === "theme2"}
            onClick={handleToggleTheme}
          />

          <div className="app__toggle-fill"></div>
        </label>
      </>

      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>

      <PDFresume />
    </nav>
  );
};

export default NavBar;
