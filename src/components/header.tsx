import React from "react";

import styled from "styled-components";
import Flag from "./Flag";

type HeaderProps = {
  language: string;
};

function Header(props: HeaderProps) {
  const language = props.language;
  return (
    <div>
      <FloatLeftDiv>
        <NameText>{language === "ENG" ? "Dongjun Shin" : "신동준"}</NameText>
        <SmallText>me@dongjun.me</SmallText>
        <SmallText>Seoul, Republic of Korea</SmallText>
      </FloatLeftDiv>
      <FloatRightDiv>
        <Flag />
      </FloatRightDiv>
    </div>
  );
}

const NameText = styled.div`
  font-size: large;
  font-weight: bold;
`;

const SmallText = styled.div`
  font-size: small;
`;

const FloatLeftDiv = styled.div`
  float: left;
`;

const FloatRightDiv = styled.div`
  float: right;
`;

export default Header;
