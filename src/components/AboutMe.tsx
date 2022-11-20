import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "../store/modules";

import TitleBox from "./atoms/TitleBox";
import styled from "styled-components";
import Contents from "./atoms/Contents";
import LinkBox from "./atoms/LinkBox";
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
            {language === "ENG"
              ? "I'm a S/W developer who wants to draw dreams with code."
              : "저는 코드로 꿈을 그리는 사람이 되고 싶은 소프트웨어 개발자입니다."}
          </Contents>
          <LinkBox
            url="https://pypystory.tistory.com/"
            placeholder="blog"
          ></LinkBox>
        </li>
        <li>
          <Contents>
            {language === "ENG"
              ? "Now I'm interested backend, which designs infrastructure and creates APIs."
              : "현재는 인프라를 설계하고, API를 만드는 백엔드가 관심있습니다."}
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
