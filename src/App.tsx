import React from "react";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { toEnglish, toKorean } from "./store/modules/language";
import { RootState } from "./store/modules";

import Header from "./components/header";

function App() {
  const dispatch = useDispatch();
  const language = useSelector(
    (state: RootState) => state.setLanguage.language
  );
  return (
    <div className="App">
      <p>{language}</p>
      <button onClick={() => dispatch(toKorean())}> to korean</button>
      <button onClick={() => dispatch(toEnglish())}> to english</button>
      <Header></Header>
    </div>
  );
}

export default App;
