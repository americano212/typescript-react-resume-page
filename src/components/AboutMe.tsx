import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "../store/modules";

import TitleBox from "./atoms/TitleBox";
import styled from "styled-components";
import Contents from "./atoms/Contents";
function AboutMe() {
  const language = useSelector(
    (state: RootState) => state.setLanguage.language
  );
  return (
    <AboutMeBox>
      <TitleBox title={"ABOUT ME"} />
      <ul>
        <li>
          <Contents>
            {language === "ENG" ? "I am ..." : "나는 이런 사람 입니다"}
          </Contents>
        </li>
        <li>
          <Contents>
            {language === "ENG" ? "I am ..." : "나는 이런 사람 입니다"}
          </Contents>
        </li>
      </ul>
    </AboutMeBox>
  );
}

const AboutMeBox = styled.div`
  padding-top: 70px;
`;

export default AboutMe;
