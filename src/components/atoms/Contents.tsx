import React from "react";
import styled from "styled-components";

type ContentsTextProps = {
  children: string;
};

function Contents(props: ContentsTextProps) {
  return <ContentsText>{props.children}</ContentsText>;
}

const ContentsText = styled.div`
  float: left;
  font-size: small;
`;
export default Contents;
