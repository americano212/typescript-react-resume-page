import {
  HeaderLeftBox,
  HeaderRightBox,
  HeaderWrapper,
  NameBox,
  TextBox,
} from "./styles/header";
import Flag from "./components/atoms/Flag";
import { Language } from "./types/language.enum";
import { useSelector } from "react-redux";
import { RootState } from "./store/modules";

export default function Header() {
  const language: Language = useSelector(
    (state: RootState) => state.setLanguage.language
  );

  return (
    <HeaderWrapper>
      <HeaderLeftBox>
        <NameBox>
          {language === Language.eng
            ? "Dongjun Shin(신동준)"
            : "신동준(Dongjun Shin)"}
        </NameBox>
        <TextBox>me@dongjun.me</TextBox>
        <TextBox>Seoul, Republic of Korea</TextBox>
      </HeaderLeftBox>
      <HeaderRightBox>
        <Flag />
      </HeaderRightBox>
    </HeaderWrapper>
  );
}
