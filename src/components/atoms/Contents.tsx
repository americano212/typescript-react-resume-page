import React from "react";
import styled from "styled-components";

type ContentsTextProps = {
  children: string;
  bold?: string;
  frontbold?: string;
  placeholder?: string;
  url?: string;
};

function Contents(props: ContentsTextProps) {
  const bold = props.bold;
  const frontbold = props.frontbold;
  const url = props.url;
  const placeholder = props.placeholder;
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
      {url !== undefined ? (
        <ContentsText>
          &nbsp;(
          <LinkA href={url} target="_blank">
            {placeholder}
          </LinkA>
          )
        </ContentsText>
      ) : (
        <ContentsText></ContentsText>
      )}
    </ContentsDiv>
  );
}

const ContentsDiv = styled.div`
  position: absolute;
  float: left;
`;

const ContentsText = styled.span`
  font-size: small;
`;

const ContentsTextBold = styled.span`
  font-size: small;
  font-weight: bold;
`;

const LinkA = styled.a`
  &:visited {
    color: blue;
  }
`;
export default Contents;
