import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/modules";
import { toEnglish, toKorean } from "../../store/modules/language";
import { Language } from "../../types/language.enum";
import { LangSwitch, LangOption } from "../../styles/flag";

export default function Flag() {
  const dispatch = useDispatch();
  const language: Language = useSelector(
    (state: RootState) => state.setLanguage.language
  );

  return (
    <LangSwitch>
      <LangOption
        $active={language === Language.eng}
        onClick={() => dispatch(toEnglish())}
      >
        EN
      </LangOption>
      <span>/</span>
      <LangOption
        $active={language === Language.kor}
        onClick={() => dispatch(toKorean())}
      >
        KR
      </LangOption>
    </LangSwitch>
  );
}
