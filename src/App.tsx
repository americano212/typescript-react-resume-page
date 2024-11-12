import React from "react";
import "./App.css";

import { useSelector } from "react-redux";
import { RootState } from "./store/modules";
import { Header, AboutMe, Educations, Experience, Awards, Certificate, TechnicalSkill } from "./components";

export default function App() {
  const language = useSelector((state: RootState) => state.setLanguage.language);

  return (
    <div className="App">
      <Header language={language} />
      <AboutMe />
      <Educations />
      <Experience />
      <Awards />
      <Certificate />
      <TechnicalSkill />
    </div>
  );
}
