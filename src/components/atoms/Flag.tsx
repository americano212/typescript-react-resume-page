import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../store/modules";
import { toEnglish, toKorean } from "../../store/modules/language";
import { useDispatch } from "react-redux";
function Flag() {
  const dispatch = useDispatch();
  const language = useSelector(
    (state: RootState) => state.setLanguage.language
  );
  return (
    <div>
      {language === "ENG" ? (
        <div onClick={() => dispatch(toKorean())}>
          <FlagImage src="img/kr.png" alt="KR"></FlagImage>
        </div>
      ) : (
        <div onClick={() => dispatch(toEnglish())}>
          <FlagImage src="img/us.png" alt="US"></FlagImage>
        </div>
      )}
    </div>
  );
}

const FlagImage = styled.img`
  margin: 0 auto;
  width: 40px;
  height: 40px;
  border: 2px solid rgb(0, 0, 0);
  border-radius: 50%;
  right: 0;
`;

export default Flag;
