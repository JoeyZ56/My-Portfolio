import { About, Footer, Header, Skills, Testimonials, Work } from "./container";
import { NavBar } from "./components";
import { useState, createContext } from "react";
import "./App.scss";

export const ThemeContext = createContext(null);

const App = () => {
  const [theme, setTheme] = useState("theme1");

  const toggleTheme = () => [
    setTheme((curr) => (curr === "theme1" ? "theme2" : "theme1")),
  ];

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app" id={theme}>
        <NavBar />
        <>
          <label className="app__toggle-label">
            <input
              className="app__toggle-input"
              type="checkbox"
              value={theme}
              onClick={toggleTheme}
            />

            <div className="app__toggle-fill"></div>
          </label>
        </>
        <Header />
        <About />
        <Work />
        <Skills />
        {/* <Testimonials /> */}
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
