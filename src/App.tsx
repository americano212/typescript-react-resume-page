import React from "react";
import "./App.css";

import { useSelector } from "react-redux";
import { RootState } from "./store/modules";
import Header from "./components/header";

function App() {
  const language = useSelector(
    (state: RootState) => state.setLanguage.language
  );
  return (
    <div className="App">
      <Header language={language} />
    </div>
  );
}

export default App;
