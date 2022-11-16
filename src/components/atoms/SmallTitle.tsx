import React from "react";
import styled from "styled-components";

type SmallTitleProps = {
  children: string;
};

function SmallTitle(props: SmallTitleProps) {
  const subTitle = props.children;
  return (
    <div>
      <SmallTitleText>{subTitle}</SmallTitleText>
    </div>
  );
}

const SmallTitleText = styled.p`
  font-weight: normal;
  font-size: 0.8rem;
  margin: 0;
  margin-top: 5px;
  margin-left: 30px;
`;

export default SmallTitle;
