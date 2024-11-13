import { ActionType } from "typesafe-actions";
import { Language } from "../../types/language.enum";

// Actions
const TOENG = "TOENG";
const TOKOR = "TOKOR";

// Action Creator
export const toEnglish = () => {
  return {
    type: TOENG,
  };
};
export const toKorean = () => {
  return {
    type: TOKOR,
  };
};

const actions = { toEnglish, toKorean }; // 모든 액션 생성함수들을 actions 객체에 넣습니다
type SetLanguageAction = ActionType<typeof actions>;

// 초기값 설정
const initialState = {
  language: Language.eng,
};

// counterReducer
export default function setLanguage(
  state = initialState,
  action: SetLanguageAction
) {
  switch (action.type) {
    case TOENG:
      return {
        language: Language.eng,
      };
    case TOKOR:
      return {
        language: Language.kor,
      };
    default:
      return state;
  }
}
