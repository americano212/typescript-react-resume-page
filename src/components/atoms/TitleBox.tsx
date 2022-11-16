import React from "react";
import styled from "styled-components";

type TitleBoxProps = {
  title: string;
};

function TitleBox(props: TitleBoxProps) {
  const title = props.title;
  return (
    <TitleDiv>
      <Width100Hr />
      <TitleText>{title}</TitleText>
      <Width100Hr />
    </TitleDiv>
  );
}

const TitleDiv = styled.div`
  margin-top: 20px;
`;

const TitleText = styled.p`
  font-size: medium;
  margin: 0;
  margin-left: 10px;
`;

const Width100Hr = styled.hr`
  width: 100%;
  margin: 0;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export default TitleBox;
