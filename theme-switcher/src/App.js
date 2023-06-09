import React, { useState } from "react";
import ThemeContext from "./Context/ThemeContext";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";
import "./App.css"
const App = () => {
  const themeHook = useState("light");
  return (
    <ThemeContext.Provider value={themeHook}>
      <div>
        <Header />
        <div className="hero">
        <HeroSection />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
