import React from "react";
import "./App.css";

import { useSelector } from "react-redux";
import { RootState } from "./store/modules";
import { Header, AboutMe } from "./components";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

interface AppBoxProps {
  HorizontalMargin: string;
}

function App() {
  const isMobile = useMediaQuery({ maxWidth: 1024 });
  const language = useSelector(
    (state: RootState) => state.setLanguage.language
  );

  const HorizontalMargin = isMobile ? "10%" : "20%";
  return (
    <div className="App">
      <AppBox HorizontalMargin={HorizontalMargin}>
        <Header language={language} />
        <AboutMe />
      </AppBox>
    </div>
  );
}
const AppBox = styled.div<AppBoxProps>`
  margin-left: ${(props) => props.HorizontalMargin};
  margin-right: ${(props) => props.HorizontalMargin};
`;
export default App;
