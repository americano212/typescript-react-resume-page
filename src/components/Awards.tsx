import React from "react";

import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store/modules";
import Contents from "./atoms/Contents";
import SubTitle from "./atoms/SubTitle";

import TitleBox from "./atoms/TitleBox";

function Awards() {
  const language = useSelector(
    (state: RootState) => state.setLanguage.language
  );
  return (
    <div>
      <TitleBox title={"HONORS AND AWARDS"} />
      <SubTitle>Personal</SubTitle>
      <ULSmallMargin>
        <li>
          {language === "ENG" ? (
            <Contents bold="A Bronze prize">
              2020 Sogang Programming Contest -&nbsp;
            </Contents>
          ) : (
            <Contents bold="동상">
              2022 서강대학교 프로그래밍 대회 SPC -&nbsp;
            </Contents>
          )}
        </li>
      </ULSmallMargin>
      <SubTitle>Team</SubTitle>
      <ULSmallMargin>
        <li>
          {language === "ENG" ? (
            <Contents bold="9th">
              2022 Winter SUAPC (Algorithm Contest) -&nbsp;
            </Contents>
          ) : (
            <Contents bold="9등">
              2022 Winter SUAPC (알고리즘 대회) -&nbsp;
            </Contents>
          )}
        </li>
        <li>
          {language === "ENG" ? (
            <Contents bold="The top prize">
              2021 Sogang University Artech Hackathon -&nbsp;
            </Contents>
          ) : (
            <Contents bold="우승">2021 서강대학교 아텍 해커톤 -&nbsp;</Contents>
          )}
        </li>
        <li>
          {language === "ENG" ? (
            <Contents bold="19th">
              2021 Summer SUAPC (Algorithm Contest) -&nbsp;
            </Contents>
          ) : (
            <Contents bold="19등">
              2021 Summer SUAPC (알고리즘 대회) -&nbsp;
            </Contents>
          )}
        </li>
        <li>
          {language === "ENG" ? (
            <Contents bold="86th">
              2021 ICPC Asia Seoul Preliminary Contest -&nbsp;
            </Contents>
          ) : (
            <Contents bold="86등">2021 ICPC 서울 지역 예선 -&nbsp;</Contents>
          )}
        </li>
        <li>
          {language === "ENG" ? (
            <Contents bold="Popularity Award">
              2020 The 4th Government Innovation Proposal Hackathon -&nbsp;
            </Contents>
          ) : (
            <Contents bold="인기상">
              2020 제4회 정부혁신제안 끝장개발대회(해커톤) -&nbsp;
            </Contents>
          )}
        </li>
        <li>
          {language === "ENG" ? (
            <Contents bold="Global 396th">
              2020 IEEEXtreme 14.0 (Algorithm Contest) -&nbsp;
            </Contents>
          ) : (
            <Contents bold="전세계 396등">
              2020 IEEEXtreme 14.0 (알고리즘 대회) -&nbsp;
            </Contents>
          )}
        </li>
      </ULSmallMargin>
    </div>
  );
}
const ULSmallMargin = styled.ul`
  margin-top: 5px;
  margin-bottom: 5px;
`;

export default Awards;
