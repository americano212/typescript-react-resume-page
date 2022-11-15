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
          <ContentDate>(2020.03 ~)</ContentDate>
        </li>
        <li>
          <Contents>
            {language === "ENG" ? "GPA: 3.3 / 4.5" : "학점: 3.3 / 4.5"}
          </Contents>
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
