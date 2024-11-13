import { useSelector } from "react-redux";
import { RootState } from "../../store/modules";
import { toEnglish, toKorean } from "../../store/modules/language";
import { useDispatch } from "react-redux";
import { Language } from "../../types/language.enum";
import { FlagImage, FlagWrapper } from "../../styles/flag";

export default function Flag() {
  const dispatch = useDispatch();
  const language: Language = useSelector((state: RootState) => state.setLanguage.language);

  return (
    <FlagWrapper>
      {language === Language.eng ? (
        <div onClick={() => dispatch(toKorean())}>
          <FlagImage src="img/kr.png" alt="KR"></FlagImage>
        </div>
      ) : (
        <div onClick={() => dispatch(toEnglish())}>
          <FlagImage src="img/us.png" alt="US"></FlagImage>
        </div>
      )}
    </FlagWrapper>
  );
}
