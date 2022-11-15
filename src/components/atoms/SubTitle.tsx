import React from "react";
import styled from "styled-components";

type SubTitleProps = {
  children: string;
};

function SubTitle(props: SubTitleProps) {
  const subTitle = props.children;
  return (
    <div>
      <SubTitleText>{subTitle}</SubTitleText>
    </div>
  );
}

const SubTitleText = styled.p`
  font-weight: bold;
  font-size: 0.9rem;
  margin: 0;
  margin-left: 20px;
`;

export default SubTitle;
