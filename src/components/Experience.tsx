import React from "react";

import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store/modules";
import ContentDate from "./atoms/ContentDate";
import Contents from "./atoms/Contents";
import SmallTitle from "./atoms/SmallTitle";
import SubTitle from "./atoms/SubTitle";

import TitleBox from "./atoms/TitleBox";

function Experience() {
  const language = useSelector(
    (state: RootState) => state.setLanguage.language
  );
  return (
    <div>
      <TitleBox title={"EXPERIENCE"} />
      <SubTitle>
        {language === "ENG"
          ? "Software Maestro 13th"
          : "소프트웨어 마에스트로 13기"}
      </SubTitle>
      <SmallTitle>
        {language === "ENG"
          ? "Backend of app services"
          : "앱 서비스 백엔드 개발"}
      </SmallTitle>
      <ULSmallMargin>
        <li>
          <Contents>
            {language === "ENG"
              ? "Project on 'DDAKZIP' Backend, AWS infra setting & APIs development with Typescript+GraphQL"
              : "'딱집' 프로젝트 백엔드 담당, AWS로 인프라를 세팅하고, Typescript+GraphQL로 API를 개발했습니다."}
          </Contents>
          <ContentDate>(22.04 ~ 22.11)</ContentDate>
        </li>
        <li>
          <Contents>
            {language === "ENG"
              ? "Focused on writing clean APIs so that front developers can use it easily."
              : "프론트개발자가 사용하기 쉽도록 깔끔한 API 작성에 집중했습니다."}
          </Contents>
        </li>
        <li>
          <Contents>
            {language === "ENG"
              ? "Focused on writing clean APIs so that front developers can use it easily."
              : "프론트개발자가 사용하기 쉽도록 깔끔한 API 작성에 집중했습니다."}
          </Contents>
        </li>
      </ULSmallMargin>
      <SmallTitle>{language === "ENG" ? "Trainee" : "연수생"}</SmallTitle>
    </div>
  );
}

const ULSmallMargin = styled.ul`
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 20px;
`;

export default Experience;
