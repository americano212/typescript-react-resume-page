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
      <ULSmallMargin>
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
      </ULSmallMargin>
    </AboutMeBox>
  );
}

const AboutMeBox = styled.div`
  padding-top: 70px;
`;

const ULSmallMargin = styled.ul`
  margin-top: 5px;
  margin-bottom: 5px;
`;

export default AboutMe;
