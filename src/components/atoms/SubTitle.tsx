import React from "react";
import styled from "styled-components";

type SubTitleProps = {
  children: string;
  tag?: string;
  describtion?: string;
};

function SubTitle(props: SubTitleProps) {
  const subTitle = props.children;
  const tag = props.tag;
  const describtion = props.describtion;
  return (
    <div>
      <SubTitleText>{subTitle}</SubTitleText>
      {tag !== undefined ? <TagText> @ {tag}</TagText> : <TagText></TagText>}
      {describtion !== undefined ? (
        <DescribtionText> - {describtion}</DescribtionText>
      ) : (
        <DescribtionText></DescribtionText>
      )}
    </div>
  );
}

const SubTitleText = styled.span`
  font-weight: bold;
  font-size: 0.9rem;
  margin: 0;
  margin-left: 20px;
`;

const TagText = styled.span`
  font-weight: normal;
  font-size: 0.9rem;
  margin: 0;
`;

const DescribtionText = styled.span`
  font-weight: normal;
  font-size: 0.7rem;
  margin: 0;
`;

export default SubTitle;
