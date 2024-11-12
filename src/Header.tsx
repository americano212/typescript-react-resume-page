import { HeaderLeftBox, HeaderRightBox, HeaderWrapper, NameBox, TextBox } from "./styles/header";
import { HeaderProps } from "./types/header.interface";
import Flag from "./components/atoms/Flag";

export default function Header(props: HeaderProps) {
  return (
    <HeaderWrapper>
      <HeaderLeftBox>
        <NameBox>{props.language === "ENG" ? "Dongjun Shin" : "신동준"}</NameBox>
        <TextBox>me@dongjun.me</TextBox>
        <TextBox>Seoul, Republic of Korea</TextBox>
      </HeaderLeftBox>
      <HeaderRightBox>
        <Flag />
      </HeaderRightBox>
    </HeaderWrapper>
  );
}
