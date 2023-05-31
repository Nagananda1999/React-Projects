import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
import AppTheme from "../Colors";

const HeroSection = () => {
  const theme = useContext(ThemeContext)[0];
  const currectTheme = AppTheme[theme];

  return (
    <div
      style={{
        height:"90vh",
        padding: "1rem",
        backgroundColor: `${currectTheme.backgroundColor}`,
        color: `${currectTheme.textColor}`,
        textAlign: "center"
      }}
    >
      <h1>Context API theme toggler</h1>
      <p>This is a nice paragraph</p>
      
    </div>
  );
};

export default HeroSection;
