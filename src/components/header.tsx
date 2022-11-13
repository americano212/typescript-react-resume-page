import React from "react";
import { useDispatch } from "react-redux";
import { toEnglish, toKorean } from "../store/modules/language";
import styled from "styled-components";

type HeaderProps = {
  language: string;
};

function Header(props: HeaderProps) {
  const dispatch = useDispatch();
  const language = props.language;
  return (
    <div>
      <button onClick={() => dispatch(toKorean())}> to korean</button>
      <button onClick={() => dispatch(toEnglish())}> to english</button>
      <NameText>{language === "ENG" ? "Dongjun Shin" : "신동준"}</NameText>
      <SmallText>me@dongjun.me</SmallText>
      <SmallText>Seoul, Republic of Korea</SmallText>
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

export default Header;
