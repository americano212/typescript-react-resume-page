import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "../store/modules";

import TitleBox from "./atoms/TitleBox";
import SubTitle from "./atoms/SubTitle";
import Contents from "./atoms/Contents";
import styled from "styled-components";
import ContentDate from "./atoms/ContentDate";

function Educations() {
  const language = useSelector(
    (state: RootState) => state.setLanguage.language
  );
  return (
    <div>
      <TitleBox title={"EDUCATIONS"} />
      <SubTitle>
        {language === "ENG" ? "Sogang University" : "서강대학교"}
      </SubTitle>
      <ULSmallMargin>
        <li>
          <Contents>
            {language === "ENG"
              ? "Pursuing Bachelor’s Degree in Computer Engineering"
              : "컴퓨터공학과 (학사) 휴학중"}
          </Contents>
          <ContentDate>(20.03 ~)</ContentDate>
        </li>
        <li>
          <Contents>
            {language === "ENG" ? "GPA: 3.3 / 4.5" : "학점: 3.3 / 4.5"}
          </Contents>
        </li>
        <li>
          <Contents>
            {language === "ENG"
              ? "2021 President of the engineering college"
              : "2021 공과대학 학생회장"}
          </Contents>
          <ContentDate>(21.01 ~ 21.12)</ContentDate>
        </li>
      </ULSmallMargin>
    </div>
  );
}

const ULSmallMargin = styled.ul`
  margin-top: 5px;
  margin-bottom: 5px;
`;

export default Educations;
