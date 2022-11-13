import React from "react";
import { useDispatch } from "react-redux";
import { toEnglish, toKorean } from "../store/modules/language";

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
      {language === "ENG" ? <h3>Name</h3> : <h3>이름</h3>}
    </div>
  );
}

export default Header;
