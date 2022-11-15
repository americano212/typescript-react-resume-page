import React from "react";
import styled from "styled-components";

type ContentDateTextProps = {
  children: string;
};

function ContentDate(props: ContentDateTextProps) {
  return <ContentDateText>{props.children}</ContentDateText>;
}

const ContentDateText = styled.div`
  float: right;
  font-size: small;
`;
export default ContentDate;
