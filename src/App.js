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
        <NavBar toggleTheme={toggleTheme} />

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
