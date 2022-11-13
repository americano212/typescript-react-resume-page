import React from "react";
import TitleBox from "./atoms/TitleBox";
import styled from "styled-components";

function AboutMe() {
  return (
    <AboutMeBox>
      <TitleBox title={"ABOUT ME"} />
    </AboutMeBox>
  );
}

const AboutMeBox = styled.div`
  padding-top: 70px;
`;

export default AboutMe;
