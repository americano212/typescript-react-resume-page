import React from "react";

import { useSelector } from "react-redux";
import styled from "styled-components";
import { RootState } from "../store/modules";
import Contents from "./atoms/Contents";
import SmallTitle from "./atoms/SmallTitle";
import SubTitle from "./atoms/SubTitle";

import TitleBox from "./atoms/TitleBox";

function TechnicalSkill() {
  const language = useSelector(
    (state: RootState) => state.setLanguage.language
  );
  return (
    <div>
      <TitleBox title={"TECHNICAL SKILLS"} />
      <SubTitle>{language === "ENG" ? "Back-End" : "백엔드"}</SubTitle>
      <SmallTitle>Language</SmallTitle>
      <ULSmallMargin>
        <li>
          <Contents frontbold="Typescript, Python">, C/C++</Contents>
        </li>
      </ULSmallMargin>
      <SmallTitle>Framework</SmallTitle>
      <ULSmallMargin>
        <li>
          <Contents frontbold="Nest.js">, Express, Django</Contents>
        </li>
      </ULSmallMargin>
      <SmallTitle>Others</SmallTitle>
      <ULSmallMargin>
        <li>
          <Contents>Git, Selenium</Contents>
        </li>
      </ULSmallMargin>
      <SubTitle>{language === "ENG" ? "DevOps" : "데브옵스"}</SubTitle>
      <SmallTitle>Server</SmallTitle>
      <ULSmallMargin>
        <li>
          <Contents frontbold="Nginx">, Apache</Contents>
        </li>
      </ULSmallMargin>
      <SmallTitle>DB</SmallTitle>
      <ULSmallMargin>
        <li>
          <Contents frontbold="MySQL">, MongoDB, Elasticsearch</Contents>
        </li>
      </ULSmallMargin>
      <SmallTitle>Container</SmallTitle>
      <ULSmallMargin>
        <li>
          <Contents frontbold="Docker">&nbsp;</Contents>
        </li>
      </ULSmallMargin>
      <SmallTitle>Cloud</SmallTitle>
      <ULSmallMargin>
        <li>
          <Contents frontbold="AWS">
            &nbsp;(EC2, S3, ALB, SQS, SNS, SES, Route53, Elastic beanstalk,
            Lambda ...)
          </Contents>
        </li>
      </ULSmallMargin>
      <SmallTitle>CI/CD</SmallTitle>
      <ULSmallMargin>
        <li>
          <Contents frontbold="Terraform, Github Action">&nbsp;</Contents>
        </li>
      </ULSmallMargin>
      {/* <SubTitle>{language === "ENG" ? "Front-End" : "프론트엔드"}</SubTitle>
      <SmallTitle>Framework</SmallTitle>
      <ULSmallMargin>
        <li>
          <Contents frontbold="React">, React-Native</Contents>
        </li>
      </ULSmallMargin> */}
    </div>
  );
}

const ULSmallMargin = styled.ul`
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 20px;
`;
export default TechnicalSkill;
