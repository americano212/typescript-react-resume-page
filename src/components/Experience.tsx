import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "../store/modules";
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
      <SmallTitle>{language === "ENG" ? "Trainee" : "연수생"}</SmallTitle>
    </div>
  );
}

export default Experience;
