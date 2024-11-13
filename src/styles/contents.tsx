import styled from "styled-components";

export const ContentsWrapper = styled.div`
  float: left;
  font-size: small;
  width: 100%;
  margin-bottom: 10px;
`;

export const SubDescriptionText = styled.p`
  font-weight: normal;
  font-size: 0.8rem;
  margin: 0;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 30px;
`;

export const DetailUlBox = styled.ul`
  margin: 0;
  margin-top: 1px;
  margin-bottom: 3px;
`;

export const DetailLiBox = styled.li`
  margin-bottom: 5px;
  margin-left: 10px;
`;

export const DetailWrapper = styled.div`
  float: left;
`;

export const ContentsBoldText = styled.span`
  font-weight: bold;
`;

export const ContentsRegularText = styled.span``;

export const ContentsLink = styled.a`
  margin-left: 5px;
  &:visited {
    color: blue;
  }
`;

export const ContentsDate = styled.div`
  float: right;
  text-align: right;
`;
