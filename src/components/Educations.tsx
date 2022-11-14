import React from "react";

import { useSelector } from "react-redux";
import { RootState } from "../store/modules";

import TitleBox from "./atoms/TitleBox";

function Educations() {
  const language = useSelector(
    (state: RootState) => state.setLanguage.language
  );
  return (
    <div>
      <TitleBox title={"EDUCATIONS"} />
      {language}
    </div>
  );
}

export default Educations;
