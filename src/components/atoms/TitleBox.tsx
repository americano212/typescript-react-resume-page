import { HorizontalLine, TitleBoxWrapper, TitleText } from "../../styles/title-box";

type TitleBoxProps = {
  title: string;
};

export default function TitleBox(props: TitleBoxProps) {
  const title = props.title;
  return (
    <TitleBoxWrapper>
      <HorizontalLine />
      <TitleText>{title}</TitleText>
      <HorizontalLine />
    </TitleBoxWrapper>
  );
}
