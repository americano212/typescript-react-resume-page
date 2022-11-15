import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "../store/modules";

import TitleBox from "./atoms/TitleBox";
import SubTitle from "./atoms/SubTitle";
import Contents from "./atoms/Contents";
import styled from "styled-components";

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
              : "컴퓨터공학과 (학사) 재학중"}
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
