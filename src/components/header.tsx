import React from "react";

import styled from "styled-components";
import Flag from "./flag";

type HeaderProps = {
  language: string;
};

function Header(props: HeaderProps) {
  const language = props.language;
  return (
    <div>
      <FloatDiv>
        <NameText>{language === "ENG" ? "Dongjun Shin" : "신동준"}</NameText>
        <SmallText>me@dongjun.me</SmallText>
        <SmallText>Seoul, Republic of Korea</SmallText>
      </FloatDiv>
      <Flag />
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

const FloatDiv = styled.div`
  float: left;
`;

export default Header;
