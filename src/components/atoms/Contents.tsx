import React from "react";
import styled from "styled-components";

type ContentsTextProps = {
  children: string;
  bold?: string;
  frontbold?: string;
};

function Contents(props: ContentsTextProps) {
  const bold = props.bold;
  const frontbold = props.frontbold;
  return (
    <ContentsDiv>
      {frontbold !== undefined ? (
        <ContentsTextBold>{frontbold}</ContentsTextBold>
      ) : (
        <ContentsTextBold></ContentsTextBold>
      )}
      <ContentsText>{props.children}</ContentsText>
      {bold !== undefined ? (
        <ContentsTextBold>{bold}</ContentsTextBold>
      ) : (
        <ContentsTextBold></ContentsTextBold>
      )}
    </ContentsDiv>
  );
}

const ContentsDiv = styled.div`
  float: left;
`;

const ContentsText = styled.span`
  font-size: small;
`;

const ContentsTextBold = styled.span`
  font-size: small;
  font-weight: bold;
`;

export default Contents;
