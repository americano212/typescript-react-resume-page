import React from "react";

import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store/modules";
import ContentDate from "./atoms/ContentDate";
import Contents from "./atoms/Contents";

import TitleBox from "./atoms/TitleBox";

function Certificate() {
  const language = useSelector(
    (state: RootState) => state.setLanguage.language
  );
  return (
    <div>
      <TitleBox title={"CERTIFICATE"} />
      <ULSmallMargin>
        <li>
          <Contents>
            {language === "ENG"
              ? "Internet security expert, Grade II"
              : "인터넷보안전문가 2급"}
          </Contents>
          <ContentDate>(2021.12)</ContentDate>
        </li>
      </ULSmallMargin>
    </div>
  );
}
const ULSmallMargin = styled.ul`
  margin-top: 5px;
  margin-bottom: 5px;
`;
export default Certificate;
