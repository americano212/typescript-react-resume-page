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
          ? "Software Maestro 13th - Selected as the best person (TOP 8%)"
          : "소프트웨어 마에스트로 13기 - 우수자 선정 (상위 8%)"}
      </SubTitle>
      <SmallTitle>
        {language === "ENG"
          ? "Backend of app services, Business planning"
          : "앱 서비스 백엔드 개발, 사업 기획"}
      </SmallTitle>

      <ULSmallMargin>
        <li>
          <Contents url="https://ddakzip.com/download" placeholder="link">
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
              ? "Experience various parts such as project planning, design, marketing, etc"
              : "프로젝트 기획, 디자인, 마케팅 등 다양한 파트를 경험함"}
          </Contents>
        </li>
        <li>
          <Contents>
            {language === "ENG"
              ? "Improve performance with repectoring and automate cloud deployment with terraform when projects are over"
              : "프로젝트가 끝났을 때, 리펙토링을 통해 성능 개선 및 테라폼으로 클라우드 배포 자동화"}
          </Contents>
        </li>
      </ULSmallMargin>
      {language === "ENG" ? (
        <SubTitle describtion="Algorithm Study Club of Sogang Univ.">
          Sogang ICPC Team
        </SubTitle>
      ) : (
        <SubTitle describtion="서강대학교 알고리즘 학회">
          Sogang ICPC Team
        </SubTitle>
      )}
      <ContentDate>(20.03 ~)</ContentDate>
      <SmallTitle>
        {language === "ENG" ? "Algorithm Study Tutor" : "알고리즘 스터디 강사"}
      </SmallTitle>

      <ULSmallMargin>
        <li>
          <Contents
            url="https://www.youtube.com/watch?v=PEMSNWi1tLM&list=PLNsZHQX7ujN8c9BRdZIPifxU1fM7hZBBh"
            placeholder="link"
          >
            {language === "ENG"
              ? "2021, 2022 Spring Basic Algorithms with cpp lecture (1,3,5,7 lectures)"
              : "2021년, 2022년 봄, cpp로 기초 알고리즘 강의 (1,3,5,7 lectures)"}
          </Contents>
        </li>
      </ULSmallMargin>
      {language === "ENG" ? (
        <SubTitle describtion="Sogang Wise Investment Club">SWIC</SubTitle>
      ) : (
        <SubTitle describtion="서강대학교 재테크 학회">SWIC</SubTitle>
      )}
      <ContentDate>(20.09 ~ 21.12)</ContentDate>
      <SmallTitle>
        {language === "ENG"
          ? "Team Leader (2021 1st semester, 2nd semester)"
          : "팀장 (2021년 1,2학기)"}
      </SmallTitle>
      <ULSmallMargin>
        <li>
          <Contents>
            {language === "ENG"
              ? "Analyze companies with Python, Research on efficient portfolio optimization"
              : "파이썬으로 기업을 분석하고, 효율적인 포트폴리오 최적화 연구"}
          </Contents>
        </li>
        <li>
          <Contents>
            {language === "ENG"
              ? "Conducted a Python study for beginners within the club"
              : "학회 내에서 비전공자를 위해 파이썬 스터디 진행"}
          </Contents>
        </li>
        <li>
          <Contents>
            {language === "ENG"
              ? "Create stock backtesting and visualization programs"
              : "주식 백테스팅 및 시각화 프로그램을 제작"}
          </Contents>
        </li>
      </ULSmallMargin>
      <SubTitle tag="Sogang University">
        {language === "ENG" ? "Python Lecture Mentor" : "파이썬 강의 멘토"}
      </SubTitle>
      <ULSmallMargin>
        <li>
          <Contents>
            {language === "ENG"
              ? "2021 Basic Python Lecture for Freshmen"
              : "2021년 신입생을 위한 파이썬 기초 강의"}
          </Contents>
        </li>
      </ULSmallMargin>
    </div>
  );
}

const ULSmallMargin = styled.ul`
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 20px;
`;

export default Experience;
